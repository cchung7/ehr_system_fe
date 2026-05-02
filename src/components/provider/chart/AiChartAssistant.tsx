import { Bot, ShieldCheck, Sparkles } from "lucide-react";

type AiChartAssistantProps = {
  patientName?: string;
};

export function AiChartAssistant({ patientName }: AiChartAssistantProps) {
  return (
    <aside className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-100">
          <Bot className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            AI Assistant
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Chart intelligence
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Placeholder for a future Java Spring AI endpoint. The assistant should
            only summarize chart data after backend authorization and audit logging.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Sparkles className="h-4 w-4 text-cyan-200" />
          Suggested prompts
        </div>

        <div className="mt-3 space-y-2 text-sm text-slate-300">
          <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:bg-white/10">
            Summarize {patientName ? `${patientName}'s` : "this patient's"} recent
            encounters.
          </button>

          <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:bg-white/10">
            Explain abnormal observations using chart references.
          </button>

          <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:bg-white/10">
            Draft a patient-friendly summary from structured FHIR data.
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-200" />
          <p className="text-xs leading-5 text-amber-100">
            AI access to patient data should be logged like normal chart access.
            Generated summaries should cite source resources.
          </p>
        </div>
      </div>
    </aside>
  );
}