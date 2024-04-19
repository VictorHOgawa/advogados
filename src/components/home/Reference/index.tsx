import { ScrollTrigger, gsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Reference() {
  const [enter, setEnter] = useState(false);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({});
      gsap.to(".label1", {
        x: "85vw",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".label3",
          start: "center bottom",
          end: "center 50%",
          scrub: 1,
        },
      });
      gsap.to(".label2", {
        x: "85vw",
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".label3",
          start: "center bottom",
          end: "center 55%",
          scrub: 1,
        },
      });
      gsap.to(".label4", {
        x: "90vw",
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".label3",
          start: "center bottom",
          end: "center 65%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (enter) {
      gsap.to(".panel", {
        x: "100vw",
        duration: 0.5,
        ease: "none",
      });
      gsap.to(".label3", {
        color: "white",
        duration: 0.2,
      });
    } else {
      gsap.to(".panel", {
        x: "-100vw",
        duration: 0.5,
        ease: "none",
      });
      gsap.to(".label3", {
        color: "#A66E55",
        duration: 0.2,
      });
    }
  }, [enter]);

  return (
    <section className="flex flex-col w-full h-full bg-[url('/global/texturedBackground1.png')] bg-cover bg-no-repeat bg-center">
      <div className="Results relative flex flex-col sm:py-2 p-0 w-full">
        <Image
          src="/global/logo.svg"
          width={400}
          height={600}
          alt=""
          quality={100}
          className="absolute hidden md:block opacity-10 right-0 top-5"
        />
        <div className="flex flex-col w-full lg:w-max absolute -mt-2">
          <Image
            src="/global/art1.png"
            alt=""
            width={450}
            height={250}
            className="w-full max-w-[400px] lg:w-[450px]"
          />
          <Image
            src="/global/art2.png"
            alt=""
            width={450}
            height={250}
            className="w-full max-w-[400px] lg:w-[450px]"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[calc(100%-450px)] lg:ml-[450px] mt-[500px] lg:mt-10 p-4 lg:p-16 gap-4 lg:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-secondary_color tracking-widest text-sm font-archivo">
              DIREITO AGRÁRIO E DO AGRONEGÓCIO
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-3xl tracking-wide font-semibold font-bigShouldersText text-primary_color">
              Protegendo Seu Direito à Terra <br /> e o Legado Rural
            </h1>
          </div>
          <span className="text-black tracking-wide text-sm md:text-lg lg:text-base w-full leading-5 md:w-4/5">
            Confrontada com uma disputa de terras que ameaçava sua herança
            familiar, uma família pode procurar nossa ajuda. Especialistas em
            Direito Agrário, agimos rapidamente para defender sua propriedade e
            seus direitos, assegurando que sua terra e legado permanecessem
            seguros. Com determinação e conhecimento, convertemos situações
            desafiadora para o seu interesse.
          </span>
          <div className="flex items-center gap-2">
            <Image
              src="/global/avatarPhoto.png"
              alt=""
              width={40}
              height={40}
            />
            <span className="text-primary_color text-2xl font-marcellus">
              Dr. Walmir Machiaveli
            </span>
          </div>
          <div className="flex items-center w-full gap-2 lg:gap-8 font-archivo">
            <button className="flex items-center gap-2 bg-secondary_color rounded-sm px-2 lg:px-3 py-2 text-white text-xs hover:bg-[#94624c] hover:scale-105 transition duration-300">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
            <button className="flex items-center gap-2 bg-primary_color rounded-sm px-2 lg:px-3 py-2 text-white text-xs hover:bg-[#1b2139] hover:scale-105 transition duration-300">
              <Image src="/Icons/gavelIcon.svg" alt="" width={20} height={20} />
              Ver as áreas de Atuação
            </button>
          </div>
        </div>
      </div>
      <div className="Results relative flex flex-col lg:justify-between lg:flex-row lg:self-end sm:py-2 p-0 w-full">
        <div className="flex flex-col w-full lg:w-[calc(100%-450px)] items-end text-end mt-10 p-4 lg:px-16 gap-4 lg:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-secondary_color tracking-widest text-sm font-archivo">
              DIREITO AGRÁRIO E DO AGRONEGÓCIO
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-3xl tracking-wide font-semibold font-bigShouldersText text-primary_color">
              Protegendo Seu Direito à Terra <br /> e o Legado Rural
            </h1>
          </div>
          <span className="text-black tracking-wide text-sm md:text-lg lg:text-base w-full leading-5 md:w-4/5">
            Confrontada com uma disputa de terras que ameaçava sua herança
            familiar, uma família pode procurar nossa ajuda. Especialistas em
            Direito Agrário, agimos rapidamente para defender sua propriedade e
            seus direitos, assegurando que sua terra e legado permanecessem
            seguros. Com determinação e conhecimento, convertemos situações
            desafiadora para o seu interesse.
          </span>
          <div className="flex items-center gap-2">
            <span className="text-primary_color text-2xl font-marcellus">
              Dr. Walmir Machiaveli
            </span>
            <Image
              src="/global/avatarPhoto.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-center w-full md:w-max gap-2 lg:gap-8 font-archivo">
            <button className="flex items-center gap-2 bg-secondary_color rounded-sm px-2 lg:px-3 py-2 text-white text-xs hover:bg-[#94624c] hover:scale-105 transition duration-300">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
            <button className="flex items-center gap-2 bg-primary_color rounded-sm px-2 lg:px-3 py-2 text-white text-xs hover:bg-[#1b2139] hover:scale-105 transition duration-300">
              <Image src="/Icons/gavelIcon.svg" alt="" width={20} height={20} />
              Ver as áreas de Atuação
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-max right-0">
          <Image
            src="/global/art1.png"
            alt=""
            width={450}
            height={250}
            className="w-full max-w-[400px] self-end lg:w-[450px]"
          />
          <Image
            src="/global/art2.png"
            alt=""
            width={450}
            height={250}
            className="w-full max-w-[400px] self-end lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
