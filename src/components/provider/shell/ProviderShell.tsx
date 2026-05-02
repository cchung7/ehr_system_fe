import { ProviderHeader } from "./ProviderHeader";
import { ProviderSidebar } from "./ProviderSidebar";

type ProviderShellProps = {
  children: React.ReactNode;
};

export function ProviderShell({ children }: ProviderShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <ProviderSidebar />

        <main className="flex-1">
          <ProviderHeader />
          <div className="mx-auto max-w-7xl px-5 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}