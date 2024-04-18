import Image from "next/image";
import { HeroText } from "./HeroText";

export function Hero() {
  return (
    <div className="Hero w-full h-screen">
      <div className="w-full max-w-screen h-full bg-primary_color overflow-x-hidden" />
      <Image
        src="/global/logo.svg"
        width={500}
        height={800}
        alt=""
        quality={100}
        className="absolute opacity-10 right-0 top-20 "
      />
      <div className="absolute top-1/3 w-full">
        <HeroText />
      </div>
    </div>
  );
}
