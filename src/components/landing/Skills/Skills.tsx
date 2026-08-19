import Cta_Primrary from "@/components/common/CTA/Cta_Primrary";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { technologies } from "@/data/skills";
import { ArrowRight } from "lucide-react";
import Skills_Card from "./components/Skills_Card";
import { TechnologyType } from "@/types/skills";

export default function Skills() {
  return (
    <section
      className="
        w-full
        rounded-xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass)]
        p-5
        sm:p-6
        lg:w-2/3
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <SectionTitle title="Skills & Technologies" />

        <Cta_Primrary
          title="View All Skills"
          pastIcon={<ArrowRight size={20} strokeWidth={1.8} />}
        />
      </div>

      {/* Skills */}
      <div
        className="
          mt-6
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {technologies.slice(0, 12).map((tech: TechnologyType) => (
          <Skills_Card
            key={tech.id}
            name={tech.name}
            src={tech.image}
          />
        ))}
      </div>
    </section>
  );
}