import { HeartPulse } from "lucide-react";

import { formatDateTime, formatObservationValue } from "@/lib/fhir/formatters";
import type { Observation } from "@/lib/fhir/types";

export function ObservationCard({ observation }: { observation: Observation }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
          <HeartPulse className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-white">{observation.code.text}</h3>
          <p className="mt-1 text-2xl font-semibold text-cyan-100">
            {formatObservationValue(observation)}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {formatDateTime(observation.effectiveDateTime)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-white/10 px-3 py-1 text-slate-300">
          {observation.status}
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-slate-300">
          {observation.resourceType}
        </span>
      </div>
    </article>
  );
}