export function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-5 text-sm text-slate-400">
      {label}
    </div>
  );
}