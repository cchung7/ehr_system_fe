import { Search } from "lucide-react";

export function PatientDirectoryHeader() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          Patient directory
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Patient records</h2>
        <p className="mt-2 text-sm text-slate-400">
          Static first-pass patient list using mock FHIR Patient resources.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-400">
        <Search className="h-4 w-4" />
        Search will connect to Java API later
      </div>
    </section>
  );
}