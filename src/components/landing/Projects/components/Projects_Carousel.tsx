"use client";

import { GitHubRepoType } from "@/types/gitHubRepo";
import Project_Card from "./Project_Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type ProjectsCarouselProps = {
  projects: GitHubRepoType[];
};

export default function Projects_Carousel({
  projects,
}: ProjectsCarouselProps) {
  return (
    <div className="relative mt-5">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-5">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="
                basis-full
                pl-5
                sm:basis-1/2
                lg:basis-1/4
              "
            >
              <Project_Card project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}