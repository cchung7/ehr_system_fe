import Link from "next/link";
import { CalendarClock, ShieldCheck, UserRound } from "lucide-react";

import { formatDate, getPatientDisplayName, getPatientMrn } from "@/lib/fhir/formatters";
import type { Patient } from "@/lib/fhir/types";

type PatientDirectoryCardProps = {
  patient: Patient;
};

export function PatientDirectoryCard({ patient }: PatientDirectoryCardProps) {
  return (
    <Link
      href={`/provider/patients/${patient.id}`}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
            <UserRound className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {getPatientDisplayName(patient)}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {getPatientMrn(patient)} · {patient.gender} · DOB{" "}
              {formatDate(patient.birthDate)}
            </p>
          </div>
        </div>

        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
            <div className="flex items-center gap-2 text-slate-400">
              <CalendarClock className="h-4 w-4" />
              Last encounter
            </div>
            <p className="mt-1 font-medium text-white">Synthetic data</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="h-4 w-4" />
              Access
            </div>
            <p className="mt-1 font-medium text-cyan-200">Audit required</p>
          </div>
        </div>
      </div>
    </Link>
  );
}