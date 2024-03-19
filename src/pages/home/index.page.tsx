import { Content } from "@/components/home/Content";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Reference } from "@/components/home/Reference";
import { Results } from "@/components/home/Results";
import { Team } from "@/components/home/Team";
import { Team2 } from "@/components/home/Team2";
import { Topics } from "@/components/home/Topics";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Results />
      <Reference />
      <Team />
      <Topics />
      <Content />
      <Team2 />
      <Footer />
    </main>
  );
}
