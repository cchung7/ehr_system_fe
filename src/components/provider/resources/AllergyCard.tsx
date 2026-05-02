import { AlertTriangle } from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { AllergyIntolerance } from "@/lib/fhir/types";

export function AllergyCard({ allergy }: { allergy: AllergyIntolerance }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-3">
        <div className="rounded-2xl bg-red-300/10 p-3 text-red-200">
          <AlertTriangle className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{allergy.code.text}</h3>
          <p className="mt-2 text-sm text-slate-400">
            Recorded {formatDateTime(allergy.recordedDate)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Status: {allergy.clinicalStatus}
          </p>
        </div>
      </div>
    </article>
  );
}