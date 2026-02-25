interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl lg:text-4xl text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
