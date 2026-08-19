import { ReactNode } from "react";

type InfoItemProps = {
  icon?: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  className?: string;
};

export default function InfoItem({
  icon,
  label,
  value,
  href,
  className = "",
}: InfoItemProps) {
  const content = (
    <>
      {icon && (
        <div
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-[var(--color-primary)]/10
            text-[var(--color-primary-light)]
            transition-all
            duration-200
            group-hover:bg-[var(--color-primary)]/15
            group-hover:text-[var(--color-primary-lighter)]
          "
        >
          {icon}
        </div>
      )}

      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-sm text-[var(--color-text-muted)]">
          {label}
        </span>

        <span
          className="
            truncate
            text-sm
            font-medium
            text-[var(--color-text-primary)]
            transition-colors
            duration-200
            group-hover:text-[var(--color-primary-lighter)]
          "
        >
          {value}
        </span>
      </div>
    </>
  );

  const classes = `
    group
    flex
    min-w-0
    items-center
    gap-3
    rounded-lg
    border
    border-[var(--color-border)]
    bg-[var(--color-surface-soft)]
    px-3
    py-2.5
    transition-all
    duration-200
    hover:border-[var(--color-border-purple)]
    hover:bg-[var(--color-surface-hover)]
    hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
    sm:px-4
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}