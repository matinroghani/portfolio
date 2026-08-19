import { ExperienceType } from "@/types/experienceType";
import Timeline from "./components/Timeline";
import Journey from "./components/Journey";
import PeopleSays from "./components/PeopleSays";

async function getExperience(): Promise<ExperienceType[]> {
  const response = await fetch(
    "http://localhost:3000/jsonData/experience.json",
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }

  return response.json();
}

export default async function Career() {
  const experience = await getExperience();

  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
      <Timeline data={experience} />
      <Journey />
      <PeopleSays/>
    </div>
  );
}
