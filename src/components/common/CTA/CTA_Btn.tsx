import { ArrowRight, Mail } from "lucide-react";
import Cta_Primrary from "./Cta_Primrary";
import Cta_Secondery from "./Cta_Secondery";

export default function CTA_Btn() {
  return (
    <div className="flex items-center gap-7">

      <Cta_Primrary title="View My Work" pastIcon={<ArrowRight  size={20} strokeWidth={1.8} />}/>

      <Cta_Secondery title="Get In Touch" icon={<Mail size={20} strokeWidth={1.8} />} />

    </div>
  );
}