import Image from "next/image";
import Main_Code from "./Code/Main_Code";
import Editor_Header from "./Code/Editor_Header";

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
        <Editor_Header />

        {/* Code */}
        <Main_Code />
      </div>
    </div>
  );
}
