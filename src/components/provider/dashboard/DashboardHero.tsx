import Link from "next/link";

export function DashboardHero() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/15 via-white/[0.04] to-slate-950 p-6 shadow-2xl shadow-black/20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          FHIR-enabled workspace
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Provider dashboard for patient chart review
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-300">
          First-pass UI for a Java-backed EHR/FHIR architecture. This version uses
          mock FHIR-like data and prepares the frontend for future Spring Boot,
          HAPI FHIR, audit logging, and AI chart intelligence.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/provider/patients"
            className="rounded-2xl bg-cyan-200 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View patients
          </Link>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
            Review audit queue
          </button>
        </div>
      </div>
    </section>
  );
}