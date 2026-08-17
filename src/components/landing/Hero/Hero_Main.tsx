import Here_Content from "./components/Here_Content";
import Hero_Image from "./components/Hero_Image";

export default function Hero_Main() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        gap-12

        sm:gap-14

        lg:min-h-[550px]
        lg:flex-row
        lg:items-stretch
        lg:gap-12
      "
    >
      <Here_Content />

      <div
        className="
          w-full
          max-w-2xl

          lg:w-1/2
          lg:max-w-none
        "
      >
        <Hero_Image />
      </div>
    </div>
  );
}