import Skills from "../Skills/Skills";
import About_Me from "./components/About_Me";

export default function About() {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row" >
      <About_Me />
      <Skills />
    </div>
  );
}