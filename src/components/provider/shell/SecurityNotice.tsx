import { ShieldCheck } from "lucide-react";

type SecurityNoticeProps = {
  title?: string;
  description: string;
};

export function SecurityNotice({
  title = "Audit-sensitive chart",
  description,
}: SecurityNoticeProps) {
  return (
    <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-4">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 text-amber-200" />
        <div>
          <p className="text-sm font-semibold text-amber-100">{title}</p>
          <p className="mt-1 text-xs leading-5 text-amber-100/80">{description}</p>
        </div>
      </div>
    </div>
  );
}