import { FileText } from "lucide-react";

export function ImplementationNote() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-200">
          <FileText className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Implementation note
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">Backend boundary</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            This UI should eventually call Java/Spring endpoints, not directly expose
            protected FHIR access from the browser. The backend should enforce auth,
            roles, patient context, and audit logging.
          </p>
        </div>
      </div>
    </div>
  );
}