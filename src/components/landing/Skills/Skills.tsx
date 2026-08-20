"use client";

import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { technologies } from "@/data/skills";
import Skills_Card from "./components/Skills_Card";
import { TechnologyType } from "@/types/skills";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

export default function Skills() {
  const middle = Math.ceil(technologies.length / 2);

  const firstRow = technologies.slice(0, middle);
  const secondRow = technologies.slice(middle);

  return (
    <section className="w-full rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-glass)] p-5 sm:p-6 lg:w-2/3" id="skills">
      <div className="flex items-center justify-between gap-4">
        <SectionTitle title="Skills & Technologies" />
      </div>

      <div className="mt-6 flex flex-col gap-10">
        {/* First Row */}
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {firstRow.map((tech: TechnologyType) => (
              <CarouselItem
                key={tech.id}
                className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/6"
              >
                <Skills_Card name={tech.name} src={tech.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Second Row */}
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              direction: "backward"
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {secondRow.map((tech: TechnologyType) => (
              <CarouselItem
                key={tech.id}
                className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/6"
              >
                <Skills_Card name={tech.name} src={tech.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}