import Hero_Main from "@/components/landing/Hero/Hero_Main";

export default function Home() {
  return (
    <div
      className="
        min-h-[calc(100vh-80px)]
        rounded-2xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass-light)]
        backdrop-blur-xl
        p-10
        lg:p-20
      "
    >
      <Hero_Main />
    </div>
  );
}
