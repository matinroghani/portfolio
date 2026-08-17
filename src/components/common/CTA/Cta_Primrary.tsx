import { ReactNode } from "react";

type PrimraryProps = {
  title: string;
  icon ?: ReactNode;
};

export default function Cta_Primrary({ title, icon }: PrimraryProps) {
  return (
    <button
      type="button"
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-4
        rounded-[10px]
        border
        border-purple-400/25
        bg-gradient-to-r
        from-[#5b3df5]
        via-[#7047ee]
        to-[#a45bea]
        px-7
        py-4
        text-base
        font-medium
        leading-none
        text-white
        shadow-[0_0_25px_rgba(124,58,237,0.32)]
        transition-all
        duration-200
        hover:brightness-110
        hover:shadow-[0_0_32px_rgba(124,58,237,0.42)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
      "
    >
      <span>{title}</span>

      <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
        {icon}
      </span>
    </button>
  );
}
