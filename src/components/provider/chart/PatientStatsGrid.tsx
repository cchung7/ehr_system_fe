import { CalendarClock, IdCard } from "lucide-react";

type PatientStatsGridProps = {
  encounterCount: number;
  resourceCount: number;
};

export function PatientStatsGrid({
  encounterCount,
  resourceCount,
}: PatientStatsGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Encounters</p>
            <p className="text-2xl font-semibold text-white">{encounterCount}</p>
          </div>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
            <IdCard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-400">FHIR resources</p>
            <p className="text-2xl font-semibold text-white">{resourceCount}</p>
          </div>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div>
          <p className="text-sm text-slate-400">AI readiness</p>
          <p className="mt-2 text-lg font-semibold text-white">Backend required</p>
          <p className="mt-1 text-xs text-slate-500">
            Spring AI endpoint should handle authorization and audit logging.
          </p>
        </div>
      </article>
    </section>
  );
}