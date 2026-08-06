interface SectionHeadingProps {
  description?: string;
  eyebrow: string;
  titleId?: string;
  title: string;
}

export function SectionHeading({
  description,
  eyebrow,
  titleId,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.16em] text-primary-light uppercase">
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
        id={titleId}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-foreground-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
