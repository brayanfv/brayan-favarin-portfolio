export function joinClassNames(
  ...classNames: Array<string | false | null | undefined>
): string {
  return classNames.filter(Boolean).join(" ");
}

export function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}
