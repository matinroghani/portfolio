import { Download } from "lucide-react";
import { ReactNode } from "react";

type DownloaderProps = {
  title: string;
  icon?: ReactNode;
};

export default function Downloader({
  title,
  icon,
}: DownloaderProps) {
  return (
    <a
      href="/matin_roghani_frontend.pdf"
      download="matin_roghani_frontend.pdf"
      className="
        inline-flex
        h-9
        items-center
        gap-2
        rounded-md
        border
        border-[var(--color-border-purple)]
        bg-[var(--color-surface)]
        px-4
        text-sm
        font-medium
        text-[var(--color-primary-light)]
        transition-all
        duration-200
        hover:border-[var(--color-border-purple-strong)]
        hover:bg-[var(--color-surface-hover)]
        hover:text-[var(--color-primary-lighter)]
        hover:shadow-[var(--glow-primary)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--color-background)]
      "
    >
      <span>{title}</span>

      {icon ?? (
        <Download
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}
    </a>
  );
}