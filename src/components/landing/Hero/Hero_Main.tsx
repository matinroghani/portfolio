import Here_Content from "./components/Here_Content";
import Hero_Image from "./components/Hero_Image";

export default function Hero_Main() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-stretch
        gap-12

        sm:gap-14

        lg:flex-row
        lg:items-stretch
        lg:gap-12
      "
    >
      <div className="flex w-full lg:w-1/2">
        <Here_Content />
      </div>

      <div className="flex w-full lg:w-1/2">
        <Hero_Image />
      </div>
    </div>
  );
}