import type { ComponentProps } from "react";

import { joinClassNames } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={joinClassNames(
        "mx-auto w-full max-w-[var(--content-max-width)] px-[var(--space-page-mobile)] sm:px-[var(--space-page-desktop)]",
        className,
      )}
      {...props}
    />
  );
}
