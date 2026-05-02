import {
  allergies,
  conditions,
  diagnosticReports,
  encounters,
  medicationRequests,
  observations,
  patients,
  procedures,
} from "./mockData";
import type { ClinicalTimelineItem, FhirReference } from "./types";
import { formatObservationValue } from "./formatters";

function matchesPatient(reference: FhirReference | undefined, patientId: string) {
  return reference?.reference === `Patient/${patientId}`;
}

export function getPatientById(patientId: string) {
  return patients.find((patient) => patient.id === patientId);
}

export function getPatientEncounters(patientId: string) {
  return encounters.filter((encounter) => matchesPatient(encounter.subject, patientId));
}

export function getPatientObservations(patientId: string) {
  return observations.filter((observation) => matchesPatient(observation.subject, patientId));
}

export function getPatientConditions(patientId: string) {
  return conditions.filter((condition) => matchesPatient(condition.subject, patientId));
}

export function getPatientMedicationRequests(patientId: string) {
  return medicationRequests.filter((medication) => matchesPatient(medication.subject, patientId));
}

export function getPatientAllergies(patientId: string) {
  return allergies.filter((allergy) => matchesPatient(allergy.patient, patientId));
}

export function getPatientProcedures(patientId: string) {
  return procedures.filter((procedure) => matchesPatient(procedure.subject, patientId));
}

export function getPatientDiagnosticReports(patientId: string) {
  return diagnosticReports.filter((report) => matchesPatient(report.subject, patientId));
}

export function getPatientTimeline(patientId: string): ClinicalTimelineItem[] {
  const patientEncounters = getPatientEncounters(patientId).map((encounter) => ({
    id: encounter.id,
    resourceType: "Encounter" as const,
    title: encounter.reasonCode?.[0]?.text ?? "Encounter",
    subtitle: encounter.class.display,
    date: encounter.period.start,
    status: encounter.status,
  }));

  const patientObservations = getPatientObservations(patientId).map((observation) => ({
    id: observation.id,
    resourceType: "Observation" as const,
    title: observation.code.text,
    subtitle: formatObservationValue(observation),
    date: observation.effectiveDateTime,
    status: observation.status,
  }));

  const patientConditions = getPatientConditions(patientId).map((condition) => ({
    id: condition.id,
    resourceType: "Condition" as const,
    title: condition.code.text,
    subtitle: "Clinical problem / diagnosis",
    date: condition.recordedDate,
    status: condition.clinicalStatus,
  }));

  const patientMedications = getPatientMedicationRequests(patientId).map((medication) => ({
    id: medication.id,
    resourceType: "MedicationRequest" as const,
    title: medication.medicationCodeableConcept.text,
    subtitle: `Intent: ${medication.intent}`,
    date: medication.authoredOn,
    status: medication.status,
  }));

  const patientAllergies = getPatientAllergies(patientId).map((allergy) => ({
    id: allergy.id,
    resourceType: "AllergyIntolerance" as const,
    title: allergy.code.text,
    subtitle: "Allergy / intolerance",
    date: allergy.recordedDate,
    status: allergy.clinicalStatus,
  }));

  const patientProcedures = getPatientProcedures(patientId).map((procedure) => ({
    id: procedure.id,
    resourceType: "Procedure" as const,
    title: procedure.code.text,
    subtitle: "Procedure",
    date: procedure.performedDateTime,
    status: procedure.status,
  }));

  const patientReports = getPatientDiagnosticReports(patientId).map((report) => ({
    id: report.id,
    resourceType: "DiagnosticReport" as const,
    title: report.code.text,
    subtitle: "Diagnostic report",
    date: report.issued,
    status: report.status,
  }));

  return [
    ...patientEncounters,
    ...patientObservations,
    ...patientConditions,
    ...patientMedications,
    ...patientAllergies,
    ...patientProcedures,
    ...patientReports,
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}