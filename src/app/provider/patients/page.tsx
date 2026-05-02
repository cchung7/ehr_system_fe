import { PatientDirectoryCard } from "@/components/provider/patients/PatientDirectoryCard";
import { PatientDirectoryHeader } from "@/components/provider/patients/PatientDirectoryHeader";
import { ProviderShell } from "@/components/provider/shell";
import { patients } from "@/lib/fhir/mockData";

export default function ProviderPatientsPage() {
  return (
    <ProviderShell>
      <div className="space-y-6">
        <PatientDirectoryHeader />

        <section className="grid gap-4">
          {patients.map((patient) => (
            <PatientDirectoryCard key={patient.id} patient={patient} />
          ))}
        </section>
      </div>
    </ProviderShell>
  );
}