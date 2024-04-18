import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Reference } from "@/components/home/Reference";
import { Results } from "@/components/home/Results";
import { Team } from "@/components/home/Team";
import { Topics } from "@/components/home/Topics";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="w-full h-28 bg-red-500 relative">
        <Image
          src="/global/texturedDivider.svg"
          fill
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <Image
          src="/global/brandName.svg"
          alt=""
          width={300}
          height={80}
          className="h-2/3 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <Results />
      <Reference />
      <Team />
      <Topics />

      <Footer />
    </main>
  );
}
