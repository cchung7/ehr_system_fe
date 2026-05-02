import { Search } from "lucide-react";

export function ProviderHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Provider Dashboard
          </p>
          <h1 className="text-xl font-semibold text-white">
            Clinical chart workspace
          </h1>
        </div>

        <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 md:flex">
          <Search className="h-4 w-4 text-slate-500" />
          Search patient, MRN, encounter...
        </div>
      </div>
    </header>
  );
}