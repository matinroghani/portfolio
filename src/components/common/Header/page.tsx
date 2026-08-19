import { Moon } from "lucide-react";
import Header_Name from "./components/Header_Name";
import Header_Navigation from "./components/Header_Navigation";
import Header_MobileMenu from "./components/Header_MobileMenu";
import Downloader from "../downloader/Downloader";

export default function Header() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        py-5
        lg:grid
        lg:grid-cols-3
      "
    >
      {/* Logo */}
      <div className="lg:justify-self-start">
        <Header_Name />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block lg:justify-self-center">
        <Header_Navigation />
      </div>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
        <Downloader title="Download CV" />

        <button
          type="button"
          aria-label="Toggle theme"
          className="
            inline-flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            text-[var(--color-text-primary)]
            transition-colors
            hover:border-[var(--color-border-strong)]
            hover:bg-[var(--color-surface-hover)]
            hover:text-[var(--color-text-secondary)]
          "
        >
          <Moon size={17} strokeWidth={1.8} />
        </button>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Header_MobileMenu />
      </div>
    </header>
  );
}
