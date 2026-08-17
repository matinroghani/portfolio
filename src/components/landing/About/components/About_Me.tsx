import Cta_Primrary from "@/components/common/CTA/Cta_Primrary";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { ArrowRight, UserRound } from "lucide-react";

export default function About_Me() {
  return (
    <div
      className="
        w-full
        rounded-xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass)]
        p-5
        sm:p-6
        lg:w-1/3
      "
    >
      <SectionTitle title="About Me" />

      <div
        className="
          mt-5
          max-w-xl
          text-base
          leading-7
          text-[var(--color-text-secondary)]
          sm:mt-6
          sm:text-lg
          sm:leading-8
        "
      >
        <p>
          {"I'm"} a passionate frontend developer who loves turning ideas into
          beautiful, functional, and user-friendly web applications. I enjoy
          solving problems, learning new technologies, and crafting clean,
          maintainable code.
        </p>

        <p className="mt-5">
          Currently, {"I'm"} working as a Next.js intern and constantly
          improving my skills in modern web development.
        </p>
      </div>

      <div className="mt-5">

      <Cta_Primrary
        title="More About Me"
        pastIcon={<ArrowRight size={20} strokeWidth={1.8} />}
        preIcon={<UserRound size={20} strokeWidth={1.8} />}
        />
        </div>
    </div>
  );
}
