import { FileText } from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { DiagnosticReport } from "@/lib/fhir/types";

export function DiagnosticReportCard({ report }: { report: DiagnosticReport }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-3">
        <div className="rounded-2xl bg-sky-300/10 p-3 text-sky-200">
          <FileText className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{report.code.text}</h3>
          <p className="mt-2 text-sm text-slate-400">
            Issued {formatDateTime(report.issued)}
          </p>
          <p className="mt-2 text-xs text-slate-500">Status: {report.status}</p>
        </div>
      </div>
    </article>
  );
}