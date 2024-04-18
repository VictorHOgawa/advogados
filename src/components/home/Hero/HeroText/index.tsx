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
    <div className="main flex absolute w-full px-4 lg:w-[40vw] lg:left-40 flex-col gap-1 font-main_font text-2xl lg:text-5xl">
      <span className="text-secondary_color text-2xl">
        Lei, Ordem e Justiça
      </span>
      <label className="text-white">Assessoria Personalizada para</label>
      <label className="heroText bg-gradient-to-r from-white from-10% bg-[length:0%] via-secondary_color via-50% to-primary_color to-60% opacity-[0.001] text-[rgba(255,255,255,0)] bg-clip-text transition-[background-size_cubic-bezier(0.1,0.5,0.5,0.1)_0.5s]">
        Empresas e Pessoas
      </label>
      <label className="text-white text-base lg:text-lg mt-2">
        Com uma abordagem personalizada, oferecemos assessoria completa para
        proteger seus interesses e alcançar soluções eficazes. Estamos pronto
        para atender tanto demandas corporativas quanto individuais com
        excelência e dedicação
      </label>

      <div className="flex gap-4 mt-4">
        <button className="Button font-main_font text-white text-base bg-secondary_color rounded-sm flex items-center justify-center gap-2 p-2">
          <Image
            className="Icon"
            src="/Icons/whatsappIconWhite.svg"
            alt=""
            width={15}
            height={15}
          />
          Falar com Advogado
        </button>
        <button className="Button font-main_font font-light text-white text-base bg-transparent border-[1px] border-secondary_color rounded-sm flex items-center justify-center gap-2 p-2">
          <Image
            className="Icon"
            src="/Icons/gavelIcon.svg"
            alt=""
            width={15}
            height={15}
          />
          Ver as áreas de Atuação
        </button>
      </div>
    </div>
  );
}
