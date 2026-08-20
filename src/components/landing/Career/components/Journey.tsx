import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { journeyItems } from "@/data/journery";

export default function Journey() {
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
        sm:p-6
      "
    >
        <SectionTitle title="My Journery" />
      <div className="relative flex flex-col mt-8">
        {journeyItems.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === journeyItems.length - 1;

          return (
            <div
              key={item.id}
              className="
                relative
                flex
                gap-4
                pb-8
                last:pb-0
                sm:gap-5
              "
            >
              {!isLast && (
                <div
                  className="
                    absolute
                    left-[1.125rem]
                    top-9
                    bottom-0
                    w-px
                    bg-gradient-to-b
                    from-[var(--color-border-purple)]
                    via-[var(--color-border-purple)]
                    to-[var(--color-border-soft)]
                  "
                />
              )}

              
              <div
                className="
                  group
                  relative
                  z-10
                  flex
                  size-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--color-border-purple)]
                  bg-[var(--color-overlay-purple)]
                  text-[var(--color-primary-light)]
                  shadow-[var(--glow-primary)]
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-110
                  hover:border-[var(--color-primary)]
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                  hover:shadow-[0_0_22px_rgba(139,92,246,0.55)]
                "
              >
                <Icon
                  className="
                    size-4
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-0
                    blur-md
                    transition-opacity
                    duration-300
                    group-hover:opacity-30
                  "
                />
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <span
                  className="
                    block
                    text-sm
                    font-semibold
                    tracking-wide
                    text-[var(--color-primary-light)]
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-1
                    text-base
                    font-semibold
                    text-[var(--color-text-primary)]
                    sm:text-lg
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[var(--color-text-secondary)]
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}