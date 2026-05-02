import type {
  AllergyIntolerance,
  Condition,
  DiagnosticReport,
  MedicationRequest,
  Observation,
  Procedure,
} from "@/lib/fhir/types";

import { AllergyCard } from "./AllergyCard";
import { ConditionCard } from "./ConditionCard";
import { DiagnosticReportCard } from "./DiagnosticReportCard";
import { EmptyState } from "./EmptyState";
import { MedicationRequestCard } from "./MedicationRequestCard";
import { ObservationCard } from "./ObservationCard";
import { ProcedureCard } from "./ProcedureCard";
import { ResourceSectionHeader } from "./ResourceSectionHeader";

type ResourceGridProps = {
  observations: Observation[];
  conditions: Condition[];
  medications: MedicationRequest[];
  allergies: AllergyIntolerance[];
  procedures: Procedure[];
  reports: DiagnosticReport[];
};

export function ResourceGrid({
  observations,
  conditions,
  medications,
  allergies,
  procedures,
  reports,
}: ResourceGridProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <ResourceSectionHeader
          eyebrow="Vitals & labs"
          title="Observations"
          description="FHIR Observation resources such as vital signs and lab values."
        />

        {observations.length === 0 ? (
          <EmptyState label="No observations found for this patient." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {observations.map((observation) => (
              <ObservationCard key={observation.id} observation={observation} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <ResourceSectionHeader
          eyebrow="Problems"
          title="Conditions"
          description="FHIR Condition resources representing diagnoses and clinical problems."
        />

        {conditions.length === 0 ? (
          <EmptyState label="No active conditions found for this patient." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {conditions.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <ResourceSectionHeader
            eyebrow="Medication"
            title="Medication Requests"
            description="FHIR MedicationRequest resources."
          />

          {medications.length === 0 ? (
            <EmptyState label="No medication requests found." />
          ) : (
            medications.map((medication) => (
              <MedicationRequestCard key={medication.id} medication={medication} />
            ))
          )}
        </div>

        <div className="space-y-4">
          <ResourceSectionHeader
            eyebrow="Safety"
            title="Allergies"
            description="FHIR AllergyIntolerance resources."
          />

          {allergies.length === 0 ? (
            <EmptyState label="No allergies recorded." />
          ) : (
            allergies.map((allergy) => (
              <AllergyCard key={allergy.id} allergy={allergy} />
            ))
          )}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <ResourceSectionHeader
            eyebrow="Procedures"
            title="Procedures"
            description="FHIR Procedure resources."
          />

          {procedures.length === 0 ? (
            <EmptyState label="No procedures found." />
          ) : (
            procedures.map((procedure) => (
              <ProcedureCard key={procedure.id} procedure={procedure} />
            ))
          )}
        </div>

        <div className="space-y-4">
          <ResourceSectionHeader
            eyebrow="Reports"
            title="Diagnostic Reports"
            description="FHIR DiagnosticReport resources."
          />

          {reports.length === 0 ? (
            <EmptyState label="No diagnostic reports found." />
          ) : (
            reports.map((report) => (
              <DiagnosticReportCard key={report.id} report={report} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}