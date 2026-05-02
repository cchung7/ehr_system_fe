import type { Observation, Patient } from "./types";

export function getPatientDisplayName(patient: Patient) {
    const name = patient.name[0];
    if (!name) {
      return "Unknown Patient";
    }
    return [...name.given, name.family].join(" ");
  }

  export function getPatientMrn(patient: Patient) {
    return patient.identifier[0]?.value ?? "No MRN";
  }

  // Return JS Date Object - YYYY-MM-DD (Note: JS months are zero-based)
  function toDate(value: string) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
    return new Date(value);
  }

  // Transforms "2026-05-01" into "May 1, 2026"
  export function formatDate(value: string) {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium", 
    }).format(toDate(value));
  }

  // Transforms "2026-05-01T14:30:00" into "May 1, 2026, 2:30 PM"
  export function formatDateTime(value: string) {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  }

  export function formatObservationValue(observation: Observation) {
    if (observation.valueString) {
      return observation.valueString;
    }
    if (observation.valueQuantity) {
      return `${observation.valueQuantity.value} ${observation.valueQuantity.unit}`;
    }
    return "No value recorded"
  }