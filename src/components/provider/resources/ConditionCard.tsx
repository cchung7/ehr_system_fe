import { AlertTriangle } from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { Condition } from "@/lib/fhir/types";

export function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-200">
          <AlertTriangle className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{condition.code.text}</h3>
          <p className="mt-2 text-sm text-slate-400">
            Recorded {formatDateTime(condition.recordedDate)}
          </p>
        </div>
      </div>

      <div className="mt-4 text-xs">
        <span className="rounded-full bg-white/10 px-3 py-1 text-slate-300">
          {condition.clinicalStatus}
        </span>
      </div>
    </article>
  );
}