import Link from "next/link";
import { ReactNode } from "react";

type PrimraryProps = {
  title: string;
  href: string;
  pastIcon?: ReactNode;
  preIcon?: ReactNode;
};

export default function Cta_Primrary({
  title,
  href,
  pastIcon,
  preIcon,
}: PrimraryProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-[12px]
        border
        border-purple-500/20
        bg-purple-900/10
        backdrop-blur-sm
        px-6
        py-3.5
        text-base
        font-medium
        text-purple-300
        transition-all
        duration-200
        hover:bg-purple-900/20
        hover:text-purple-200
        hover:border-purple-500/40
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-purple-500/50
      "
    >
      <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
        {preIcon}
      </span>

      <span>{title}</span>

      <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
        {pastIcon}
      </span>
    </Link>
  );
}