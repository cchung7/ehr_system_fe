import {
  Activity,
  AlertTriangle,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Pill,
  Stethoscope,
} from "lucide-react";

import { formatDateTime } from "@/lib/fhir/formatters";
import type { ClinicalTimelineItem } from "@/lib/fhir/types";

type ClinicalTimelineProps = {
  items: ClinicalTimelineItem[];
};

function getTimelineIcon(resourceType: ClinicalTimelineItem["resourceType"]) {
  switch (resourceType) {
    case "Encounter":
      return CalendarClock;
    case "Observation":
      return Activity;
    case "Condition":
      return AlertTriangle;
    case "MedicationRequest":
      return Pill;
    case "AllergyIntolerance":
      return AlertTriangle;
    case "Procedure":
      return ClipboardCheck;
    case "DiagnosticReport":
      return FileText;
    default:
      return Stethoscope;
  }
}

export function ClinicalTimeline({ items }: ClinicalTimelineProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400">
        No clinical timeline records found for this patient.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Timeline
        </p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          Patient clinical timeline
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Combined view of FHIR resources connected to this patient.
        </p>
      </div>

      <ol className="relative space-y-4 border-l border-white/10 pl-5">
        {items.map((item) => {
          const Icon = getTimelineIcon(item.resourceType);

          return (
            <li key={`${item.resourceType}-${item.id}`} className="relative">
              <div className="absolute -left-[31px] flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-cyan-200">
                <Icon className="h-4 w-4" />
              </div>

              <article className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">
                        {item.resourceType}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs text-slate-500">
                      {formatDateTime(item.date)}
                    </p>
                    {item.status ? (
                      <p className="mt-1 text-xs font-medium text-cyan-200">
                        {item.status}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}