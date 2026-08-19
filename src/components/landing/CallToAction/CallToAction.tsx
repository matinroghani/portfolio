import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import InfoItem from "@/components/common/InfoItem/InfoItem";
import { socialMedias } from "@/data/socialMedia";

export default function CallToAction() {
  return (
    <section
      className="
        flex
        w-full
        flex-col
        gap-6
        rounded-xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass)]
        p-5
        shadow-[var(--shadow-card)]
        backdrop-blur-xl
        transition-all
        duration-300
        sm:p-6
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-10
      "
    >
      <div className="min-w-0 lg:max-w-2xl">
        <SectionTitle title="Let's Work Together!" />

        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          I&apos;m always open to new ideas, exciting projects, and meaningful
          collaborations. Whether you have a project in mind, want to discuss an
          opportunity, or simply want to connect, feel free to reach out.
          Let&apos;s create something useful, creative, and impactful together.
        </p>
      </div>

      <div
        className="
          grid
          w-full
          shrink-0
          grid-cols-2
          gap-2
          sm:gap-3
          lg:w-auto
          lg:grid-cols-2
        "
      >
        {socialMedias.map((social) => {
          const Icon = social.icon;

          return (
            <InfoItem
              key={social.id}
              icon={<Icon className="text-lg" />}
              label={social.label}
              value={social.value}
              href={social.href}
            />
          );
        })}
      </div>
    </section>
  );
}
