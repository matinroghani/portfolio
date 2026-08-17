import Image from "next/image";

type SkillCardProps = {
  src: string;
  name: string;
};

export default function Skills_Card({
  src,
  name,
}: SkillCardProps) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3
        rounded-lg
        border
        border-[rgba(100,116,139,0.28)]
        bg-[rgba(3,8,20,0.35)]
        p-4
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-[var(--color-border-purple)]
        hover:bg-[var(--color-surface-hover)]
        hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]
      "
    >
      <Image
        src={src}
        alt={name}
        width={48}
        height={48}
        className="
          size-12
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span
        className="
          text-center
          text-sm
          text-[var(--color-text-primary)]
          transition-colors
          duration-300
          group-hover:text-[var(--color-primary-light)]
        "
      >
        {name}
      </span>
    </div>
  );
}