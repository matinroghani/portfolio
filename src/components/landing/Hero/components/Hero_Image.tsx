import Image from "next/image";

export default function Hero_Image() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
      {/* Main Image */}
      <div
        className="
          relative
          aspect-[4/5]
          w-full
          overflow-hidden
          rounded-xl
          border
          border-[var(--color-glass-border)]
          bg-[var(--color-glass)]
          sm:aspect-[5/4]
          lg:aspect-auto
        "
      >
        <Image
          src="/images/about/matin.png"
          alt="About Matin Roghani"
          fill
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 90vw,
            60vw
          "
          className="
            object-contain
            object-bottom
            scale-[1.08]
            transition-transform
            duration-500
            sm:scale-[1.1]
            md:scale-[1.12]
            lg:scale-[1.16]
            lg:object-center
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Developer Code Card */}
      <div
        className="
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-[var(--color-glass-border)]
          bg-[var(--color-glass)]
          shadow-[0_20px_50px_rgba(0,0,0,0.2)]
        "
      >
        {/* Editor Header */}
        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-[var(--color-border)]
            px-4
            py-3
          "
        >
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-yellow-400/70" />
          <span className="size-2.5 rounded-full bg-green-400/70" />

          <span
            className="
              ml-2
              text-xs
              text-[var(--color-text-muted)]
            "
          >
            developer.ts
          </span>
        </div>

        {/* Code */}
        <div className="flex-1 overflow-auto p-5 sm:p-6">
          <pre
            className="
              font-mono
              text-[11px]
              leading-6
              text-[var(--color-text-primary)]
              sm:text-xs
            "
          >
            <code>
              <span className="text-[var(--color-primary-light)]">const</span>{" "}
              <span className="text-[var(--color-secondary-light)]">
                developer
              </span>{" "}
              = {"{"}
              {"\n"}
              {"  "}
              <span className="text-[var(--color-primary-lighter)]">
                name
              </span>: <span className="text-emerald-300">{"Matin Roghani"}</span>,{"\n"}
              {"  "}
              <span className="text-[var(--color-primary-lighter)]">
                role
              </span>:{" "}
              <span className="text-emerald-300">{"Frontend Developer"}</span>,
              {"\n\n"}
              {"  "}
              <span className="text-[var(--color-primary-lighter)]">
                philosophy
              </span>
              : {"{"}
              {"\n"}
              {"    "}
              <span className="text-[var(--color-primary-lighter)]">focus</span>
              : <span className="text-emerald-300">{"Clean Code"}</span>,{"\n"}
              {"    "}
              <span className="text-[var(--color-primary-lighter)]">
                mindset
              </span>
              :{" "}
              <span className="text-emerald-300">{"Build. Learn. Improve."}</span>
              ,{"\n"}
              {"  "}
              {"},"}
              {"\n\n"}
              {"  "}
              <span className="text-[var(--color-primary-lighter)]">stack</span>
              : [{"\n"}
              {"    "}
              <span className="text-emerald-300">{"React"}</span>,{"\n"}
              {"    "}
              <span className="text-emerald-300">{"Next.js"}</span>,{"\n"}
              {"    "}
              <span className="text-emerald-300">{"TypeScript"}</span>,{"\n"}
              {"  "}] ,{"\n\n"}
              {"  "}
              <span className="text-[var(--color-primary-lighter)]">
                currentlyBuilding
              </span>
              :{" "}
              <span className="text-emerald-300">
                {"Digital experiences that matter."}
              </span>
              ,{"\n"}
              {"};"}
              {"\n\n"}
              <span className="text-[var(--color-text-muted)]">
                 {"// Always Learning. Always building."}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
