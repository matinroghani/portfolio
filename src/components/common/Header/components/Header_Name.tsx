import Image from "next/image";

export default function Header_Name() {
  return (
    <div className="flex items-stretch gap-3 ">
      <div className="relative shrink-0">
        <Image
          src="/images/logos/logo_type.png"
          alt="Matin Roghani"
          width={50}
          height={50}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-center gap-0.5">
        <h1 className="text-base font-semibold leading-tight text-[var(--color-text-primary)]">
          Matin Roghani
        </h1>

        <p className="text-sm font-normal leading-tight text-[var(--color-text-tertiary)]">
          Front-End Developer
        </p>
      </div>
    </div>
  );
}