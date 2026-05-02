import Link from "next/link";

import { getPatientDisplayName, getPatientMrn } from "@/lib/fhir/formatters";
import type { Patient } from "@/lib/fhir/types";

type PatientReviewQueueProps = {
  patients: Patient[];
};

export function PatientReviewQueue({ patients }: PatientReviewQueueProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Today
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Patient review queue
          </h3>
        </div>

        <Link
          href="/provider/patients"
          className="text-sm font-medium text-cyan-200 hover:text-cyan-100"
        >
          View all
        </Link>
      </div>

      <div className="space-y-3">
        {patients.slice(0, 3).map((patient) => (
          <Link
            key={patient.id}
            href={`/provider/patients/${patient.id}`}
            className="block rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">
                  {getPatientDisplayName(patient)}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {getPatientMrn(patient)} · {patient.gender} · DOB{" "}
                  {patient.birthDate}
                </p>
              </div>

              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                Chart
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}