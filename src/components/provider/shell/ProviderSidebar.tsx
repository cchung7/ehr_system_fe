import Link from "next/link";
import {
  Activity,
  ClipboardList,
  LayoutDashboard,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/provider", icon: LayoutDashboard },
  { label: "Patients", href: "/provider/patients", icon: Users },
  { label: "Encounters", href: "/provider", icon: ClipboardList },
  { label: "Observations", href: "/provider", icon: Activity },
  { label: "Audit", href: "/provider", icon: ShieldCheck },
];

export function ProviderSidebar() {
  return (
    <aside className="hidden w-72 border-r border-white/10 bg-slate-950/95 px-5 py-6 lg:block">
      <Link href="/provider" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/30">
          <Stethoscope className="h-5 w-5 text-cyan-200" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Jay's Demo EHR
          </p>
          <p className="text-xs text-slate-400">Provider workspace</p>
        </div>
      </Link>

      <nav className="mt-10 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-sm font-semibold text-cyan-100">Protected workspace</p>
        <p className="mt-2 text-xs leading-5 text-slate-300">
          Patient chart access should be authenticated, authorized, and audit logged by
          the Java backend.
        </p>
      </div>
    </aside>
  );
}