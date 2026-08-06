import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

import { isInternalHref, joinClassNames } from "@/lib/utils";

type SecondaryButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
};

export function SecondaryButton({
  className,
  href,
  ...props
}: SecondaryButtonProps) {
  const buttonClassName = joinClassNames(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 font-medium text-foreground transition-[border-color,background-color,transform] duration-200 hover:border-primary hover:bg-card focus-visible:outline-offset-2 active:scale-[0.98] motion-reduce:transition-none",
    className,
  );

  if (isInternalHref(href)) {
    return <Link className={buttonClassName} href={href} {...props} />;
  }

  return <a className={buttonClassName} href={href} {...props} />;
}
