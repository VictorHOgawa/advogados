import Image from "next/image";
import { HeroText } from "./HeroText";

export function Hero() {
  return (
    <div className="Hero w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
        preload="auto"
        playsInline
        poster="/thumbnail.png"
        style={{ objectFit: "cover" }}
      >
        <source src="/global/heroBackground.mp4" type="video/mp4" />
      </video>
      <Image
        src="/global/logo.svg"
        width={500}
        height={800}
        alt=""
        quality={100}
        className="absolute hidden md:block opacity-10 right-0 top-20"
      />
      <div className="absolute top-1/4 md:top-1/3 w-full">
        <HeroText />
      </div>
    </div>
  );
}
