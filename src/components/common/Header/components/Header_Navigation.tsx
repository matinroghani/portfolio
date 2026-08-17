"use client"

import { navigationItems } from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header_Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-9">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`
                  relative
                  flex
                  flex-col
                  items-center
                  gap-1.5
                  py-2
                  text-base
                  font-normal
                  leading-none
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }
                `}
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className={`
                    h-1
                    w-1
                    rounded-full
                    bg-[var(--color-primary)]
                    shadow-[var(--glow-primary)]
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}