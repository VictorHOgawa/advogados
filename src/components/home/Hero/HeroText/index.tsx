import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect } from "react";

export function HeroText() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".heroText", {
        backgroundSize: "400%",
        color: "transparent",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".heroText",
          start: "center 45%",
          end: "center 40%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="main flex absolute w-full px-4 lg:w-[50vw] lg:left-40 flex-col gap-1 font-main_font text-2xl lg:text-5xl">
      <label className="text-white">+16 Anos Sendo Seu Aliado </label>
      <label className="heroText bg-gradient-to-r from-white from-10% bg-[length:0%] via-secondary_color via-50% to-primary_color to-60% opacity-[0.001] text-[rgba(255,255,255,0)] bg-clip-text transition-[background-size_cubic-bezier(0.1,0.5,0.5,0.1)_0.5s]">
        pela Justiça em Sinop e Região
      </label>
      <label className="text-white text-base lg:text-lg mt-2">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam neque ultrices.
      </label>

      <div className="flex gap-2 mt-4">
        <button className="Button font-main_font text-primary_color font-semibold text-base bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-40">
          Default
          <Image
            className="Icon"
            src="/Icons/arrowRight.svg"
            alt=""
            width={15}
            height={15}
          />
        </button>
        <button className="Button font-main_font font-light text-white text-base bg-transparent border-[1px] border-white rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-40">
          Talk to sales
        </button>
      </div>
    </div>
  );
}
