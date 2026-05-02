import { ClipboardCheck } from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { Procedure } from "@/lib/fhir/types";

export function ProcedureCard({ procedure }: { procedure: Procedure }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-3">
        <div className="rounded-2xl bg-violet-300/10 p-3 text-violet-200">
          <ClipboardCheck className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{procedure.code.text}</h3>
          <p className="mt-2 text-sm text-slate-400">
            Performed {formatDateTime(procedure.performedDateTime)}
          </p>
          <p className="mt-2 text-xs text-slate-500">Status: {procedure.status}</p>
        </div>
      </div>
    </article>
  );
}