import { Pill } from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { MedicationRequest } from "@/lib/fhir/types";

export function MedicationRequestCard({
  medication,
}: {
  medication: MedicationRequest;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-3">
        <div className="rounded-2xl bg-emerald-300/10 p-3 text-emerald-200">
          <Pill className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            {medication.medicationCodeableConcept.text}
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Ordered {formatDateTime(medication.authoredOn)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Status: {medication.status} · Intent: {medication.intent}
          </p>
        </div>
      </div>
    </article>
  );
}