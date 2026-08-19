import { socialMedias } from "@/data/socialMedia";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      {socialMedias.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              size-10
              items-center
              justify-center
              rounded-lg
              border
              border-[rgba(100,116,139,0.28)]
              bg-[rgba(3,8,20,0.35)]
              text-[var(--color-text-secondary)]
              transition-all
              duration-200
              hover:border-[rgba(148,163,184,0.42)]
              hover:bg-[rgba(15,23,42,0.5)]
              hover:text-[var(--color-text-primary)]
            "
          >
            <Icon size={19} />
          </Link>
        );
      })}
    </div>
  );
}