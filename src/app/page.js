import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Trait from "@/components/Trait";
import Utility from "@/components/Utility";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Utility/>
    <Trait/>
    <Partners/>
    <Team/>
    <Roadmap/>
    <Gallery/>
    </>
  );
}
