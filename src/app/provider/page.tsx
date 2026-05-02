import { Activity, AlertTriangle, CalendarClock, Users } from "lucide-react";

import { DashboardHero } from "@/components/provider/dashboard/DashboardHero";
import { ImplementationNote } from "@/components/provider/dashboard/ImplementationNote";
import { PatientReviewQueue } from "@/components/provider/dashboard/PatientReviewQueue";
import { SummaryMetricCard } from "@/components/provider/dashboard/SummaryMetricCard";
import { ProviderShell } from "@/components/provider/shell";
import { encounters, observations, patients } from "@/lib/fhir/mockData";

const summaryCards = [
  {
    label: "Active patients",
    value: patients.length,
    description: "Synthetic patient records",
    icon: Users,
  },
  {
    label: "Recent encounters",
    value: encounters.length,
    description: "FHIR Encounter resources",
    icon: CalendarClock,
  },
  {
    label: "Observations",
    value: observations.length,
    description: "Vitals and lab-like results",
    icon: Activity,
  },
  {
    label: "Needs review",
    value: 1,
    description: "Mock clinical review queue",
    icon: AlertTriangle,
  },
];

export default function ProviderDashboardPage() {
  return (
    <ProviderShell>
      <div className="space-y-8">
        <DashboardHero />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryMetricCard key={card.label} {...card} />
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <PatientReviewQueue patients={patients} />
          <ImplementationNote />
        </section>
      </div>
    </ProviderShell>
  );
}