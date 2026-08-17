import { ReactNode } from "react";

type PersonalInfoProps = {
  icon: ReactNode;
  label: string;
  value: string;
};
export default function PersonalInfo_Card({
  icon,
  label,
  value,
}: PersonalInfoProps) {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="
          flex
          size-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          text-[var(--color-primary-light)]
          font-bold
          text-lg
        "
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-[var(--color-text-muted)]">{label}</span>

        <span className="text-sm font-medium text-[var(--color-text-primary)]">
          {value}
        </span>
      </div>
    </div>
  );
}
