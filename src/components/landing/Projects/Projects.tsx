import { promises as fs } from "fs";
import path from "path";

import { GitHubRepoType } from "@/types/gitHubRepo";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import Cta_Primrary from "@/components/common/CTA/Cta_Primrary";
import { ArrowRight } from "lucide-react";
import Projects_Carousel from "./components/Projects_Carousel";

async function getRepos(): Promise<GitHubRepoType[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "jsonData",
    "projects.json",
  );

  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
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
      id="projects"
    >
      {/* Header */}
        <SectionTitle title="Featured Projects" />

      {/* Projects */}
      <Projects_Carousel projects={repos} />
    </section>
  );
}