import type { LucideIcon } from "lucide-react";

type SummaryMetricCardProps = {
  label: string;
  value: number;
  description: string;
  icon: LucideIcon;
};

export function SummaryMetricCard({
  label,
  value,
  description,
  icon: Icon,
}: SummaryMetricCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-xs text-slate-500">{description}</p>
        </div>

        <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}