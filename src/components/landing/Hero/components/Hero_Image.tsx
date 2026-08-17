import Image from "next/image";

export default function Hero_Image() {
  return (
    <div
      className="
        relative
        w-full
        pb-14
        sm:pb-16
        lg:h-full
        lg:min-h-0
        lg:pb-0
      "
    >
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

          md:aspect-[16/11]

          lg:h-full
          lg:min-h-[500px]
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
            50vw
          "
          className="
            scale-[1.08]
            object-contain
            object-bottom
            transition-transform
            duration-500

            sm:scale-[1.1]

            md:scale-[1.12]

            lg:scale-[1.18]
            lg:object-right-bottom
          "
        />

        {/* Subtle dark fade */}
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

      {/* Overlay Image */}
      <div
        className="
        hidden
        lg:inline
          absolute
          bottom-0
          left-1/2
          z-20
          w-[72%]
          -translate-x-1/2
          overflow-hidden
          rounded-lg
          border
          border-[var(--color-glass-border)]
          bg-[var(--color-glass)]
          p-1
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          backdrop-blur-xl

          sm:w-[60%]

          md:left-6
          md:w-[48%]
          md:translate-x-0

          lg:bottom-[-50px]
          lg:left-[-55px]
          lg:w-[58%]
        "
      >
        <div
          className="
            relative
            aspect-[1.45/1]
            w-full
            overflow-hidden
            rounded-md
          "
        >
          <Image
            src="/images/about/about.png"
            alt="About Matin Roghani"
            fill
            sizes="
              (max-width: 640px) 72vw,
              (max-width: 768px) 60vw,
              (max-width: 1024px) 48vw,
              30vw
            "
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}