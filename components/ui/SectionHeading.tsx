interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  /** Heading level; use "h1" when this is the page's main heading. */
  as?: "h1" | "h2";
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-4">
          {badge}
        </span>
      )}
      <Heading className="font-display font-bold text-3xl lg:text-4xl text-foreground leading-tight mb-4">
        {title}
      </Heading>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
