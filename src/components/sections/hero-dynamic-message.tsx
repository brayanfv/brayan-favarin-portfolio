"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

interface HeroDynamicMessageProps {
  fallbackMessage: string;
  messages: readonly string[];
}

const typingDelay = 58;
const pauseDuration = 2000;
const deletingDelay = 36;

export function HeroDynamicMessage({
  fallbackMessage,
  messages,
}: HeroDynamicMessageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );
  const shouldReduceMotion = useReducedMotion();
  const currentMessage = messages[currentIndex] ?? fallbackMessage;
  const displayedMessage = currentMessage.slice(0, displayedLength);

  useEffect(() => {
    if (shouldReduceMotion || messages.length < 2) {
      return;
    }

    if (phase === "typing") {
      if (displayedLength < currentMessage.length) {
        const timeoutId = window.setTimeout(() => {
          setDisplayedLength((length) => length + 1);
        }, typingDelay);

        return () => {
          window.clearTimeout(timeoutId);
        };
      }

      const timeoutId = window.setTimeout(() => {
        setPhase("pausing");
      }, 0);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    if (phase === "pausing") {
      const timeoutId = window.setTimeout(() => {
        setPhase("deleting");
      }, pauseDuration);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    if (displayedLength > 0) {
      const timeoutId = window.setTimeout(() => {
        setDisplayedLength((length) => length - 1);
      }, deletingDelay);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % messages.length);
      setPhase("typing");
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    currentMessage.length,
    displayedLength,
    messages.length,
    phase,
    shouldReduceMotion,
  ]);

  if (shouldReduceMotion || messages.length < 2) {
    return (
      <p className="min-h-8 text-lg leading-8 font-semibold text-foreground sm:text-xl">
        {fallbackMessage}
      </p>
    );
  }

  return (
    <p
      aria-label={currentMessage}
      className="min-h-8 whitespace-nowrap text-lg leading-8 font-semibold text-foreground sm:text-xl"
    >
      <noscript>{fallbackMessage}</noscript>
      <span aria-hidden="true">{displayedMessage}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        aria-hidden="true"
        className="ml-px inline-block text-primary-light"
        transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
      >
        |
      </motion.span>
    </p>
  );
}
