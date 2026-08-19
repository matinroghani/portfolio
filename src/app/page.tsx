import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import ExperienceTimeline from "@/components/landing/Career/components/Timeline";
import About from "@/components/landing/About/About";
import Career from "@/components/landing/Career/Career";
import Hero_Main from "@/components/landing/Hero/Hero_Main";
import PersonalInfos from "@/components/landing/PersonalInfos/PersonalInfos";
import Projects from "@/components/landing/Projects/Projects";

export default function Home() {
  return (
    <div
      className="
        min-h-[calc(100vh-80px)]
        rounded-2xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass-light)]
        backdrop-blur-xl
        p-5
        flex
        flex-col
        gap-10
        sm:p-8
        lg:p-12
        xl:p-16
      "
    >
      <Hero_Main />
      <PersonalInfos />
      <About />
      <Projects />
      <Career />
    </div>
  );
}
