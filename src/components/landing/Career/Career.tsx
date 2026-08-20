import { promises as fs } from "fs";
import path from "path";

import { ExperienceType } from "@/types/experienceType";
import Timeline from "./components/Timeline";
import Journey from "./components/Journey";
import PeopleSays from "./components/PeopleSays";

async function getExperience(): Promise<ExperienceType[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "jsonData",
    "experience.json",
  );

  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
}

export default async function Career() {
  const experience = await getExperience();

  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3" id="experience">
      <Timeline data={experience} />
      <Journey />
      <PeopleSays />
    </div>
  );
}