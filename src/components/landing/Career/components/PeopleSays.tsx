import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";

export default function PeopleSays() {
  return (
    <section className="w-full rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-glass)] p-5 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <SectionTitle title="What People Say" />
        <FaQuoteLeft className="text-2xl text-[var(--color-secondary)]" />
      </div>

      <div className="mt-6 flex flex-col">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id}>
            <article className="py-2">
              <p className="border-l-2 border-[var(--color-border-purple)] pl-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                {testimonial.message}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full border border-[var(--color-border-purple)] object-cover"
                />

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </span>
                  <span className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </article>

            {index < testimonials.length - 1 && (
              <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border-purple)] to-transparent opacity-70" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}