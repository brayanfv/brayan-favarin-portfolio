"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

import styles from "@/components/projects/project-carousel.module.css";
import { joinClassNames } from "@/lib/utils";

interface ProjectCarouselItem {
  card: ReactNode;
  id: string;
  title: string;
}

interface ProjectCarouselProps {
  ariaLabel: string;
  initialItemId?: string;
  items: readonly ProjectCarouselItem[];
  nextLabel: string;
  previousLabel: string;
}

interface DragState {
  active: boolean;
  moved: boolean;
  pointerId: number;
  scrollLeft: number;
  startX: number;
}

const initialDragState: DragState = {
  active: false,
  moved: false,
  pointerId: -1,
  scrollLeft: 0,
  startX: 0,
};

export function ProjectCarousel({
  ariaLabel,
  initialItemId,
  items,
  nextLabel,
  previousLabel,
}: ProjectCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const initialIndex = Math.max(
    initialItemId
      ? items.findIndex((item) => item.id === initialItemId)
      : 0,
    0,
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const activeIndexRef = useRef(initialIndex);
  const animationFrameRef = useRef<number | null>(null);
  const dragStateRef = useRef<DragState>({ ...initialDragState });
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const suppressClickRef = useRef(false);
  const trackRef = useRef<HTMLOListElement>(null);

  const setCurrentIndex = useCallback((index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return activeIndexRef.current;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = activeIndexRef.current;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) {
        return;
      }

      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior?: ScrollBehavior) => {
      const track = trackRef.current;
      const boundedIndex = Math.min(Math.max(index, 0), items.length - 1);
      const slide = slideRefs.current[boundedIndex];

      if (!track || !slide) {
        return;
      }

      const left =
        slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;

      setCurrentIndex(boundedIndex);
      track.scrollTo({
        behavior: behavior ?? (shouldReduceMotion ? "auto" : "smooth"),
        left,
      });
    },
    [items.length, setCurrentIndex, shouldReduceMotion],
  );

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current !== null) {
      return;
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      const nearestIndex = getNearestIndex();

      if (nearestIndex !== activeIndexRef.current) {
        setCurrentIndex(nearestIndex);
      }
    });
  }, [getNearestIndex, setCurrentIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLOListElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndexRef.current - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndexRef.current + 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(items.length - 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLOListElement>) => {
    const target = event.target as HTMLElement;

    if (event.pointerType !== "mouse" || target.closest("a, button")) {
      return;
    }

    dragStateRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      scrollLeft: event.currentTarget.scrollLeft,
      startX: event.clientX,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLOListElement>) => {
    const dragState = dragStateRef.current;

    if (!dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - dragState.startX;

    if (Math.abs(distance) > 4) {
      dragState.moved = true;
    }

    event.preventDefault();
    event.currentTarget.scrollLeft = dragState.scrollLeft - distance;
  };

  const finishPointerDrag = (
    event: PointerEvent<HTMLOListElement>,
    shouldSnap: boolean,
  ) => {
    const dragState = dragStateRef.current;

    if (!dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const moved = dragState.moved;
    dragStateRef.current = { ...initialDragState };
    setIsDragging(false);

    if (moved) {
      suppressClickRef.current = true;
      window.requestAnimationFrame(() => {
        suppressClickRef.current = false;
      });
    }

    if (shouldSnap) {
      scrollToIndex(getNearestIndex());
    }
  };

  const handleSlideClick = (
    event: MouseEvent<HTMLLIElement>,
    index: number,
  ) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (index !== activeIndexRef.current && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
      scrollToIndex(index);
    }
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      scrollToIndex(activeIndexRef.current, "auto");
    });

    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollToIndex]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const activeSlide = track?.children.item(initialIndex);

    if (!track || !(activeSlide instanceof HTMLElement)) {
      return;
    }

    track.scrollLeft =
      activeSlide.offsetLeft - (track.clientWidth - activeSlide.clientWidth) / 2;
  }, [initialIndex]);

  if (items.length === 0) {
    return null;
  }

  const previousProject = items[activeIndex - 1];
  const nextProject = items[activeIndex + 1];

  return (
    <div
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className={styles.carousel}
      role="region"
    >
      <ol
        className={joinClassNames(
          styles.track,
          "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-3 focus-visible:outline-offset-[-2px] sm:gap-6",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
        )}
        id="projects-carousel-track"
        onDragStart={(event) => event.preventDefault()}
        onKeyDown={handleKeyDown}
        onPointerCancel={(event) => finishPointerDrag(event, false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishPointerDrag(event, true)}
        onScroll={handleScroll}
        ref={trackRef}
        tabIndex={0}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <li
              aria-current={isActive ? "true" : undefined}
              aria-label={`${index + 1}/${items.length} — ${item.title}`}
              aria-roledescription="slide"
              className={joinClassNames(
                styles.slide,
                "snap-center transition-[opacity,transform] duration-300 motion-reduce:transform-none motion-reduce:transition-none",
                isActive
                  ? "scale-100 opacity-100"
                  : "scale-[0.94] cursor-pointer opacity-55",
              )}
              key={item.id}
              onClickCapture={(event) => handleSlideClick(event, index)}
              onFocusCapture={() => {
                if (!isActive) {
                  scrollToIndex(index);
                }
              }}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
            >
              {item.card}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 flex items-center justify-center gap-1 sm:mt-7 sm:gap-2">
        <button
          aria-controls="projects-carousel-track"
          aria-label={
            previousProject
              ? `${previousLabel}: ${previousProject.title}`
              : previousLabel
          }
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-[border-color,color,opacity] duration-200 hover:border-primary/60 hover:text-primary-light focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none"
          disabled={!previousProject}
          onClick={() => scrollToIndex(activeIndex - 1)}
          type="button"
        >
          <ChevronLeft aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>

        <div className="flex items-center" role="group">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-controls="projects-carousel-track"
                aria-current={isActive ? "true" : undefined}
                aria-label={`${item.title} — ${index + 1}/${items.length}`}
                className="group grid h-11 w-9 place-items-center rounded-sm focus-visible:outline-offset-0"
                key={item.id}
                onClick={() => scrollToIndex(index)}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className={joinClassNames(
                    "h-1 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none",
                    isActive
                      ? "w-6 bg-primary-light"
                      : "w-2 bg-border group-hover:bg-foreground-muted",
                  )}
                />
              </button>
            );
          })}
        </div>

        <button
          aria-controls="projects-carousel-track"
          aria-label={nextProject ? `${nextLabel}: ${nextProject.title}` : nextLabel}
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-[border-color,color,opacity] duration-200 hover:border-primary/60 hover:text-primary-light focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none"
          disabled={!nextProject}
          onClick={() => scrollToIndex(activeIndex + 1)}
          type="button"
        >
          <ChevronRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
      </div>

      <p aria-live="polite" className="sr-only">
        {`${activeIndex + 1}/${items.length} — ${items[activeIndex].title}`}
      </p>
    </div>
  );
}
