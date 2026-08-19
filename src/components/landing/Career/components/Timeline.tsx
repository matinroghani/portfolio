"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { ExperienceType } from "@/types/experienceType";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

type TimelineProps = {
  data: ExperienceType[];
};

export default function Timeline({ data }: TimelineProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState<number | null>(null);

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Newest -> Oldest
  const sortedData = useMemo(() => {
    return [...data].reverse();
  }, [data]);

  // Every 3 experiences = 1 slide
  const slides = useMemo(() => {
    return Array.from(
      { length: Math.ceil(sortedData.length / 3) },
      (_, index) => sortedData.slice(index * 3, index * 3 + 3),
    );
  }, [sortedData]);

  /*
   * Find the tallest slide and use that height
   * for the viewport permanently.
   */
  useLayoutEffect(() => {
    if (!slidesRef.current.length) return;

    const heights = slidesRef.current
      .map((slide) => slide?.scrollHeight ?? 0)
      .filter(Boolean);

    if (!heights.length) return;

    const maxHeight = Math.max(...heights);

    setSliderHeight(maxHeight);
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (!slides.length) {
    return null;
  }

  return (
    <section
      className="
    w-full
    rounded-xl
    border
    border-[var(--color-glass-border)]
    bg-[var(--color-glass)]
    p-5
    shadow-[var(--shadow-card)]
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-[var(--color-border-purple)]
    sm:p-6
  "
    >
      <SectionTitle title="Experience" />

      {/* =========================================
          FIXED HEIGHT VIEWPORT
      ========================================= */}
      <div
        className="
          relative
          mt-8
          overflow-hidden
        "
        style={{
          height: sliderHeight ? `${sliderHeight}px` : "auto",
        }}
      >
        {/* =========================================
            SLIDES
        ========================================= */}
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            ref={(element) => {
              slidesRef.current[slideIndex] = element;
            }}
            className="
              absolute
              left-0
              top-0
              w-full
              transition-all
              duration-500
              ease-out
            "
            style={{
              transform: `translateY(${(slideIndex - currentSlide) * 100}%)`,
              opacity: slideIndex === currentSlide ? 1 : 0,
              pointerEvents: slideIndex === currentSlide ? "auto" : "none",
            }}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="
                  absolute
                  left-[7px]
                  top-2
                  h-[calc(100%-0.5rem)]
                  w-px
                  bg-gradient-to-b
                  from-[var(--color-primary)]
                  via-[var(--color-border-purple)]
                  to-transparent
                "
              />

              {/* Exactly 3 experiences */}
              <div className="flex flex-col gap-10">
                {slide.map((experience) => (
                  <div key={experience.id} className="relative pl-8">
                    {/* Company Logo */}
                    <div
                      className="
                        absolute
                        left-0
                        top-1.5
                        flex
                        size-4
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border-4
                        border-[var(--color-background)]
                        bg-[var(--color-primary)]
                        shadow-[0_0_0_4px_rgba(139,92,246,0.12),var(--glow-primary)]
                      "
                    >
                      {experience.companyImage ? (
                        <Image
                          src={experience.companyImage}
                          alt={experience.company}
                          fill
                          sizes="16px"
                          className="object-cover"
                        />
                      ) : (
                        <span
                          className="
                            size-full
                            rounded-full
                            bg-[var(--color-primary)]
                          "
                        />
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* Role + Date */}
                      <div
                        className="
                          flex
                          flex-col
                          items-start
                          gap-3
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <h3
                          className="
                            text-base
                            font-semibold
                            text-[var(--color-text-primary)]
                            sm:text-lg
                          "
                        >
                          {experience.role}
                        </h3>

                        <span
                          className="
                            inline-flex
                            shrink-0
                            items-center
                            rounded-full
                            border
                            border-[var(--color-border-purple)]
                            bg-[var(--color-overlay-purple)]
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-[var(--color-primary-light)]
                            backdrop-blur-sm
                            transition-all
                            duration-200
                            hover:border-[var(--color-border-purple-strong)]
                            hover:bg-[var(--color-primary-dark)]
                            hover:text-[var(--color-primary-lighter)]
                            sm:text-sm
                          "
                        >
                          {experience.startDate} — {experience.endDate}
                        </span>
                      </div>

                      {/* Company + Location */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="
                            text-sm
                            font-medium
                            text-[var(--color-primary-light)]
                          "
                        >
                          {experience.company}
                        </span>

                        <span className="text-[var(--color-text-disabled)]">
                          •
                        </span>

                        <span
                          className="
                            text-sm
                            text-[var(--color-text-tertiary)]
                          "
                        >
                          {experience.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          max-w-2xl
                          text-sm
                          leading-7
                          text-[var(--color-text-secondary)]
                        "
                      >
                        {experience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="
            rounded-lg
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            px-4
            py-2
            text-sm
            text-[var(--color-text-secondary)]
            transition-all
            duration-200
            hover:border-[var(--color-border-purple)]
            hover:text-[var(--color-primary-light)]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Previous
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to experience slide ${index + 1}`}
              className={`
                size-2
                rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "scale-125 bg-[var(--color-primary)]"
                    : "bg-[var(--color-border-strong)]"
                }
              `}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="
            rounded-lg
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            px-4
            py-2
            text-sm
            text-[var(--color-text-secondary)]
            transition-all
            duration-200
            hover:border-[var(--color-border-purple)]
            hover:text-[var(--color-primary-light)]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Next
        </button>
      </div>
    </section>
  );
}
