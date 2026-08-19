"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigationItems } from "@/data/navItems";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Downloader from "../../downloader/Downloader";

export default function Header_MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        type="button"
        aria-label="Open navigation"
        className="
          inline-flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          text-[var(--color-text-primary)]
          transition-colors
          duration-200
          hover:border-[var(--color-border-purple)]
          hover:bg-[var(--color-surface-hover)]
          hover:text-[var(--color-primary-light)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--color-background)]
        "
      >
        <Menu size={20} strokeWidth={1.8} aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-[min(85vw,360px)]
          border-[var(--color-border)]
          bg-[var(--color-background)]
          text-[var(--color-text-primary)]
        "
      >
        <nav aria-label="Mobile navigation" className="mt-8">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    px-4
                    py-3
                    text-base
                    text-[var(--color-text-secondary)]
                    transition-colors
                    duration-200
                    hover:bg-[var(--color-surface-hover)]
                    hover:text-[var(--color-text-primary)]
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="
            flex
            justify-center
              border-t
              border-[var(--color-border)]
              pt-6
            "
          >
            <Downloader title="Download CV" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
