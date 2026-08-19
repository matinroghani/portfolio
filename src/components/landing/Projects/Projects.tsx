import { GitHubRepoType } from "@/types/gitHubRepo";
import Project_Card from "./components/Project_Card";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import Cta_Primrary from "@/components/common/CTA/Cta_Primrary";
import { ArrowRight } from "lucide-react";

async function getRepos(): Promise<GitHubRepoType[]> {
  const response = await fetch("http://localhost:3000/jsonData/projects.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export default async function Projects() {
  const repos = await getRepos();

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
      "
    >
      <div className="flex justify-between items-center">
        <SectionTitle title="Featured Projects" />
        <Cta_Primrary
          title="View All Projects"
          pastIcon={<ArrowRight size={20} strokeWidth={1.8} />}
        />
      </div>
      <div
        className="
        mt-5
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {repos.slice(0, 4).map((project) => (
          <Project_Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
