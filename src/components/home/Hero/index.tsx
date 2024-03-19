import Image from "next/image";
import { HeroText } from "./HeroText";

export function Hero() {
  return (
    <div className="Hero bg-[url('/Facade.svg')] w-full h-screen bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-primary_color opacity-80" />
      <div className="absolute top-1/3 w-full">
        <Image
          className="Decor w-28 lg:w-44"
          src="/Decor/Decor1.svg"
          alt=""
          width={200}
          height={20}
        />
        <HeroText />
      </div>
    </div>
  );
}
