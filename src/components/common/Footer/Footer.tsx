import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        flex
        w-full
        flex-col
        items-center
        justify-between
        gap-4
        py-8
        text-center
        text-sm
        text-[var(--color-text-muted)]
        sm:flex-row
        sm:gap-3
        sm:text-left
      "
    >
      <span>
        © 2026 Matin Roghani. All rights reserved.
      </span>

      <span className="flex items-center gap-2">
        Built with
        <Heart
          size={16}
          className="fill-[var(--color-primary)] text-[var(--color-primary)]"
        />
        by Matin Roghani
      </span>

      <a
        href="tel:09338921593"
        className="
          transition-colors
          duration-200
          hover:text-[var(--color-primary-light)]
        "
      >
        call me:
        09338921593
      </a>
    </footer>
  );
}