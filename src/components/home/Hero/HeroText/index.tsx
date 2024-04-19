import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export function HeroText() {
  useGSAP(() => {
    gsap
      .timeline({})
      .fromTo(
        ".Title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        ".Subtitle",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
      );
  });

  return (
    <div className="main flex absolute w-full px-2 md:px-4 lg:w-[40vw] lg:left-40 flex-col gap-1 font-main_font text-2xl lg:text-5xl">
      <span className="Title text-secondary_color text-2xl font-marcellus">
        Lei, Ordem e Justiça
      </span>
      <label className="Title text-white text-4xl lg:text-3xl xl:text-5xl font-semibold font-bigShouldersText">
        Assessoria Personalizada para
      </label>
      {/* <label className="heroText bg-gradient-to-r from-white from-10% bg-[length:0%] via-secondary_color via-50% to-primary_color to-60% opacity-[0.001] text-[rgba(255,255,255,0)] bg-clip-text transition-[background-size_cubic-bezier(0.1,0.5,0.5,0.1)_0.5s]"> */}
      <label className="Title text-white text-4xl lg:text-3xl xl:text-5xl font-semibold font-bigShouldersText">
        Empresas e Pessoas
      </label>
      {/* </label> */}
      <label className="Subtitle text-white text-base md:text-lg lg:text-base xl:text-xl mt-2 font-bigShouldersText">
        Com uma abordagem personalizada, oferecemos assessoria completa para
        proteger seus interesses e alcançar soluções eficazes. Estamos pronto
        para atender tanto demandas corporativas quanto individuais com
        excelência e dedicação
      </label>

      <div className="flex w-full items-center justify-around lg:justify-start gap-2 lg:gap-4 mt-4 font-archivo">
        <button className="Button font-main_font text-white text-xs md:text-base lg:text-sm xl:text-lg bg-secondary_color rounded-sm flex items-center justify-center gap-0.5 md:gap-2 p-2 hover:bg-[#94624c] hover:scale-105 transition duration-300">
          <Image
            className="Icon"
            src="/Icons/whatsappIconWhite.svg"
            alt=""
            width={15}
            height={15}
          />
          Falar com Advogado
        </button>
        <button className="Button font-main_font font-light text-white text-xs md:text-base lg:text-sm xl:text-lg bg-primary_color border-[1px] border-secondary_color rounded-sm flex items-center justify-center gap-0.5 md:gap-2 p-2 hover:bg-[#1b2139] hover:scale-105 transition duration-300">
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
