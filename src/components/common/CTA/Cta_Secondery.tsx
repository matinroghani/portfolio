import Link from "next/link";
import { ReactNode } from "react";

type SeconderyProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

export default function Cta_Secondery({
  title,
  href,
  icon,
}: SeconderyProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-4
        rounded-[10px]
        border
        border-[rgba(100,116,139,0.28)]
        bg-[rgba(3,8,20,0.35)]
        px-9
        py-4.5
        text-base
        font-medium
        leading-none
        text-[var(--color-text-primary)]
        transition-all
        duration-200
        hover:border-[rgba(148,163,184,0.42)]
        hover:bg-[rgba(15,23,42,0.5)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
      "
    >
      <span>{title}</span>

      <span
        className="
          flex
          shrink-0
          items-center
          justify-center
          transition-transform
          duration-200
          group-hover:-translate-y-0.5
        "
      >
        {icon}
      </span>
    </Link>
  );
}