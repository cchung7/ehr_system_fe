import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { AiChartAssistant } from "@/components/provider/chart/AiChartAssistant";
import { ClinicalTimeline } from "@/components/provider/chart/ClinicalTimeline";
import { PatientChartHeader } from "@/components/provider/chart/PatientChartHeader";
import { PatientStatsGrid } from "@/components/provider/chart/PatientStatsGrid";
import { ResourceGrid } from "@/components/provider/resources/ResourceGrid";
import { ProviderShell } from "@/components/provider/shell";
import { getPatientDisplayName } from "@/lib/fhir/formatters";
import {
  getPatientAllergies,
  getPatientById,
  getPatientConditions,
  getPatientDiagnosticReports,
  getPatientEncounters,
  getPatientMedicationRequests,
  getPatientObservations,
  getPatientProcedures,
  getPatientTimeline,
} from "@/lib/fhir/selectors";

type PatientDetailPageProps = {
  params: Promise<{
    patientId: string;
  }>;
};

export default async function PatientDetailPage({ params }: PatientDetailPageProps) {
  const { patientId } = await params;

  const patient = getPatientById(patientId);

  if (!patient) {
    notFound();
  }

  const patientName = getPatientDisplayName(patient);
  const timeline = getPatientTimeline(patient.id);
  const encounters = getPatientEncounters(patient.id);
  const observations = getPatientObservations(patient.id);
  const conditions = getPatientConditions(patient.id);
  const medications = getPatientMedicationRequests(patient.id);
  const allergies = getPatientAllergies(patient.id);
  const procedures = getPatientProcedures(patient.id);
  const reports = getPatientDiagnosticReports(patient.id);

  return (
    <ProviderShell>
      <div className="space-y-6">
        <Link
          href="/provider/patients"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to patients
        </Link>

        <PatientChartHeader patient={patient} patientName={patientName} />

        <PatientStatsGrid
          encounterCount={encounters.length}
          resourceCount={timeline.length}
        />

        <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <ClinicalTimeline items={timeline} />

            <ResourceGrid
              observations={observations}
              conditions={conditions}
              medications={medications}
              allergies={allergies}
              procedures={procedures}
              reports={reports}
            />
          </div>

          <AiChartAssistant patientName={patientName} />
        </section>
      </div>
    </ProviderShell>
  );
}