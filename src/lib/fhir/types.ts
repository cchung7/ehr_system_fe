export type FhirReference = {
  reference: string;
  display?: string;
};

export type Patient = {
  resourceType: "Patient";
  id: string;
  identifier: {
    system: string;
    value: string;
  }[];
  name: {
    given: string[];
    family: string;
  }[];
  gender: "male" | "female" | "other" | "unknown";
  birthDate: string;
};

export type Encounter = {
  resourceType: "Encounter";
  id: string;
  status: "planned" | "in-progress" | "finished" | "cancelled";
  class: {
    code: string;
    display: string;
  };
  subject: FhirReference;
  period: {
    start: string;
    end?: string;
  };
  reasonCode?: {
    text: string;
  }[];
};

export type Observation = {
  resourceType: "Observation";
  id: string;
  status: "registered" | "preliminary" | "final" | "amended";
  subject: FhirReference;
  encounter?: FhirReference;
  code: {
    text: string;
  };
  effectiveDateTime: string;
  valueString?: string;
  valueQuantity?: {
    value: number;
    unit: string;
  };
};

export type Condition = {
  resourceType: "Condition";
  id: string;
  subject: FhirReference;
  encounter?: FhirReference;
  clinicalStatus: string;
  code: {
    text: string;
  };
  recordedDate: string;
};

export type MedicationRequest = {
  resourceType: "MedicationRequest";
  id: string;
  status: "active" | "completed" | "stopped" | "unknown";
  intent: "order" | "plan" | "proposal";
  subject: FhirReference;
  medicationCodeableConcept: {
    text: string;
  };
  authoredOn: string;
};

export type AllergyIntolerance = {
  resourceType: "AllergyIntolerance";
  id: string;
  patient: FhirReference;
  clinicalStatus: string;
  code: {
    text: string;
  };
  recordedDate: string;
};

export type Procedure = {
  resourceType: "Procedure";
  id: string;
  status: "preparation" | "in-progress" | "completed" | "stopped" | "unknown";
  subject: FhirReference;
  encounter?: FhirReference;
  code: {
    text: string;
  };
  performedDateTime: string;
};

export type DiagnosticReport = {
  resourceType: "DiagnosticReport";
  id: string;
  status: "registered" | "partial" | "preliminary" | "final" | "amended";
  subject: FhirReference;
  encounter?: FhirReference;
  code: {
    text: string;
  };
  issued: string;
};

export type ClinicalTimelineItem = {
  id: string;
  resourceType:
    | "Encounter"
    | "Observation"
    | "Condition"
    | "MedicationRequest"
    | "AllergyIntolerance"
    | "Procedure"
    | "DiagnosticReport";
  title: string;
  subtitle: string;
  date: string;
  status?: string;
};