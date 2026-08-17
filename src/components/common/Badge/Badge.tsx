type BadgeProps = {
  title: string;
  DotColor?: string;
};

export default function Badge({ title, DotColor }: BadgeProps) {
  return (
    <div
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[rgba(148,163,184,0.14)]
        bg-[rgba(10,17,31,0.45)]
        px-3
        py-1.5
        transition-all
        duration-200
        hover:border-[rgba(148,163,184,0.25)]
        hover:bg-[rgba(20,27,45,0.55)]
        hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]
      "
    >
      <span
        className="
          text-sm
          text-[var(--color-text-secondary)]
          transition-colors
          duration-200
          group-hover:text-[var(--color-text-primary)]
        "
      >
        {title}
      </span>

      <span
        aria-hidden="true"
        style={{
          backgroundColor: DotColor
            ? `var(${DotColor})`
            : "var(--color-success)",
        }}
        className="
          h-2
          w-2
          shrink-0
          rounded-full
          shadow-[0_0_10px_rgba(34,197,94,0.45)]
          transition-all
          duration-200
          group-hover:shadow-[0_0_14px_rgba(34,197,94,0.65)]
        "
      />
    </div>
  );
}