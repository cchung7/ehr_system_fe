type ResourceSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ResourceSectionHeader({
  eyebrow,
  title,
  description,
}: ResourceSectionHeaderProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
    </div>
  );
}