import { UserRound } from "lucide-react";

import { formatDate, getPatientMrn } from "@/lib/fhir/formatters";
import type { Patient } from "@/lib/fhir/types";
import { SecurityNotice } from "@/components/provider/shell";

type PatientChartHeaderProps = {
  patient: Patient;
  patientName: string;
};

export function PatientChartHeader({ patient, patientName }: PatientChartHeaderProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-cyan-300/10 to-slate-950 p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
            <UserRound className="h-7 w-7" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Patient chart
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{patientName}</h2>
            <p className="mt-2 text-sm text-slate-400">FHIR Patient/{patient.id}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                {getPatientMrn(patient)}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                {patient.gender}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                DOB {formatDate(patient.birthDate)}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:max-w-sm">
          <SecurityNotice description="Opening this chart should create a backend audit event once Java/Spring security is connected." />
        </div>
      </div>
    </section>
  );
}