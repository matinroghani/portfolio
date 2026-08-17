type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden="true"
        className="
          h-8
          w-1
          shrink-0
          rounded-full
          bg-[var(--color-primary)]
        "
      />

      <h2
        className="
          text-2xl
          font-semibold
          tracking-tight
          text-[var(--color-text-primary)]
          sm:text-3xl
        "
      >
        {title}
      </h2>
    </div>
  );
}