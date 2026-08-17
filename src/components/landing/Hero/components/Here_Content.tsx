import Badge from "@/components/common/Badge/Badge";
import Cta_Primrary from "@/components/common/CTA/Cta_Primrary";
import Cta_Secondery from "@/components/common/CTA/Cta_Secondery";
import SocialMedia from "@/components/common/SocialMedai/SocialMedia";
import { ArrowRight, Mail } from "lucide-react";

export default function Here_Content() {
  return (
    <div
      className="
        flex
        w-full
        max-w-2xl
        flex-col
        items-center
        gap-7

        lg:w-1/2
        lg:max-w-none
        lg:items-start
      "
    >
      <Badge title="Available For Work" DotColor="--color-success" />

      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-5
          lg:items-start
        "
      >
        <h1
          className="
            max-w-xl
            text-center
            text-4xl
            font-bold
            leading-[1.15]
            tracking-tight
            text-[var(--color-text-primary)]

            sm:text-5xl

            lg:text-left
            lg:text-6xl
          "
        >
          I build digital experiences that make an
          <span className="text-[var(--color-primary)]"> impact.</span>
        </h1>

        <p
          className="
            max-w-xl
            text-center
            text-base
            leading-7
            text-[var(--color-text-secondary)]

            sm:text-lg

            lg:text-left
          "
        >
          Frontend Developer specializing in building exceptional web
          applications with React, Next.js and modern technologies.
        </p>
      </div>

      {/* CTA */}
      <div
        className="
          flex
          w-full
          flex-wrap
          items-center
          justify-center
          gap-4
          pt-1

          sm:w-auto

          lg:justify-start
        "
      >
        <Cta_Primrary
          title="View My Work"
          icon={<ArrowRight size={20} strokeWidth={1.8} />}
        />

        <Cta_Secondery
          title="Get In Touch"
          icon={<Mail size={20} strokeWidth={1.8} />}
        />
      </div>

      {/* Social */}
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          pt-1

          lg:justify-start
        "
      >
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">
          Follow me
        </span>

        <div className="h-5 w-[2px] bg-[var(--color-border)]" />

        <SocialMedia />
      </div>
    </div>
  );
}