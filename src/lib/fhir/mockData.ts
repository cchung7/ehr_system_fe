import type {
    AllergyIntolerance,
    Condition,
    DiagnosticReport,
    Encounter,
    MedicationRequest,
    Observation,
    Patient,
    Procedure,
} from "./types";

export const patients: Patient[] = [
    {
        resourceType: "Patient",
        id: "patient-1001",
        identifier: [{ system: "urn:hospital:mrn", value: "MRN-1001" }],
        name: [{ given: ["Daniel"], family: "Kim" }],
        gender: "male",
        birthDate: "1984-04-12",
    },
    {
        resourceType: "Patient",
        id: "patient-1002",
        identifier: [{ system: "urn:hospital:mrn", value: "MRN-1002" }],
        name: [{ given: ["Sophia"], family: "Garcia" }],
        gender: "female",
        birthDate: "1991-09-03",
    },
    {
        resourceType: "Patient",
        id: "patient-1003",
        identifier: [{ system: "urn:hospital:mrn", value: "MRN-1003" }],
        name: [{ given: ["Michael"], family: "Patel" }],
        gender: "male",
        birthDate: "1976-11-21",
    },
]

export const encounters: Encounter[] = [
  {
    resourceType: "Encounter",
    id: "encounter-2001",
    status: "finished",
    class: { code: "AMB", display: "Ambulatory" },
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    period: {
      start: "2026-04-20T09:00:00.000Z",
      end: "2026-04-20T09:45:00.000Z",
    },
    reasonCode: [{ text: "Annual wellness visit" }],
  },
  {
    resourceType: "Encounter",
    id: "encounter-2002",
    status: "finished",
    class: { code: "AMB", display: "Ambulatory" },
    subject: { reference: "Patient/patient-1002", display: "Sophia Garcia" },
    period: {
      start: "2026-04-22T14:30:00.000Z",
      end: "2026-04-22T15:15:00.000Z",
    },
    reasonCode: [{ text: "Follow-up visit" }],
  },
]

export const observations: Observation[] = [
  {
    resourceType: "Observation",
    id: "observation-3001",
    status: "final",
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    encounter: { reference: "Encounter/encounter-2001" },
    code: { text: "Blood pressure" },
    effectiveDateTime: "2026-04-20T09:10:00.000Z",
    valueString: "132/84 mmHg",
  },
  {
    resourceType: "Observation",
    id: "observation-3002",
    status: "final",
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    encounter: { reference: "Encounter/encounter-2001" },
    code: { text: "Heart rate" },
    effectiveDateTime: "2026-04-20T09:12:00.000Z",
    valueQuantity: { value: 78, unit: "beats/min" },
  },
  {
    resourceType: "Observation",
    id: "observation-3003",
    status: "final",
    subject: { reference: "Patient/patient-1002", display: "Sophia Garcia" },
    encounter: { reference: "Encounter/encounter-2002" },
    code: { text: "Hemoglobin A1c" },
    effectiveDateTime: "2026-04-22T14:45:00.000Z",
    valueString: "6.1%",
  },
];

export const conditions: Condition[] = [
  {
    resourceType: "Condition",
    id: "condition-4001",
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    encounter: { reference: "Encounter/encounter-2001" },
    clinicalStatus: "active",
    code: { text: "Elevated blood pressure reading" },
    recordedDate: "2026-04-20T09:20:00.000Z",
  },
];

export const medicationRequests: MedicationRequest[] = [
  {
    resourceType: "MedicationRequest",
    id: "medication-5001",
    status: "active",
    intent: "order",
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    medicationCodeableConcept: { text: "Lisinopril 10 mg oral tablet" },
    authoredOn: "2026-04-20T09:30:00.000Z",
  },
];

export const allergies: AllergyIntolerance[] = [
  {
    resourceType: "AllergyIntolerance",
    id: "allergy-6001",
    patient: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    clinicalStatus: "active",
    code: { text: "Penicillin" },
    recordedDate: "2026-04-20T09:05:00.000Z",
  },
];

export const procedures: Procedure[] = [
  {
    resourceType: "Procedure",
    id: "procedure-7001",
    status: "completed",
    subject: { reference: "Patient/patient-1001", display: "Daniel Kim" },
    encounter: { reference: "Encounter/encounter-2001" },
    code: { text: "Routine physical examination" },
    performedDateTime: "2026-04-20T09:25:00.000Z",
  },
];

export const diagnosticReports: DiagnosticReport[] = [
  {
    resourceType: "DiagnosticReport",
    id: "report-8001",
    status: "final",
    subject: { reference: "Patient/patient-1002", display: "Sophia Garcia" },
    encounter: { reference: "Encounter/encounter-2002" },
    code: { text: "Basic metabolic panel" },
    issued: "2026-04-22T16:00:00.000Z",
  },
];