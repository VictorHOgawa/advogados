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

  console.log("enter: ", enter);

  return (
    <section className="flex flex-col w-full h-full bg-[url('/global/texturedBackground1.png')] bg-cover bg-no-repeat bg-center">
      <div className="Results relative flex sm:py-2 p-0 w-full">
        <Image
          src="/global/logo.svg"
          width={400}
          height={600}
          alt=""
          quality={100}
          className="absolute opacity-10 right-0 top-5"
        />
        <div className="flex flex-col w-max absolute -mt-2">
          <Image src="/global/art1.png" alt="" width={450} height={250} />
          <Image src="/global/art2.png" alt="" width={450} height={250} />
        </div>
        <div className="flex flex-col w-[calc(100%-450px)] ml-[450px] mt-10 p-16 gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-secondary_color tracking-widest">
              DIREITO AGRÁRIO E DO AGRONEGÓCIO
            </span>
            <h1 className="text-4xl tracking-wide font-semibold text-primary_color">
              Protegendo Seu Direito à Terra <br /> e o Legado Rural
            </h1>
          </div>
          <span className="text-black tracking-wide text-lg w-4/5">
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
            <span className="text-primary_color text-2xl">
              Dr. Walmir Machiaveli
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 bg-secondary_color rounded-sm px-3 py-2 text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
            <button className="flex items-center gap-2 bg-primary_color rounded-sm px-3 py-2 text-white">
              <Image src="/Icons/gavelIcon.svg" alt="" width={20} height={20} />
              Ver as áreas de Atuação
            </button>
          </div>
        </div>
      </div>
      <div className="Results relative flex sm:py-2 p-0 w-full">
        <div className="flex flex-col w-[calc(100%-450px)] items-end text-end mt-10 px-16 gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-secondary_color tracking-widest">
              DIREITO AGRÁRIO E DO AGRONEGÓCIO
            </span>
            <h1 className="text-4xl tracking-wide font-semibold text-primary_color">
              Protegendo Seu Direito à Terra <br /> e o Legado Rural
            </h1>
          </div>
          <span className="text-black tracking-wide text-lg w-4/5">
            Confrontada com uma disputa de terras que ameaçava sua herança
            familiar, uma família pode procurar nossa ajuda. Especialistas em
            Direito Agrário, agimos rapidamente para defender sua propriedade e
            seus direitos, assegurando que sua terra e legado permanecessem
            seguros. Com determinação e conhecimento, convertemos situações
            desafiadora para o seu interesse.
          </span>
          <div className="flex items-center gap-2">
            <span className="text-primary_color text-2xl">
              Dr. Walmir Machiaveli
            </span>
            <Image
              src="/global/avatarPhoto.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 bg-secondary_color rounded-sm px-3 py-2 text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
            <button className="flex items-center gap-2 bg-primary_color rounded-sm px-3 py-2 text-white">
              <Image src="/Icons/gavelIcon.svg" alt="" width={20} height={20} />
              Ver as áreas de Atuação
            </button>
          </div>
        </div>
        <div className="flex flex-col w-max right-0">
          <Image src="/global/art1.png" alt="" width={450} height={250} />
          <Image src="/global/art2.png" alt="" width={450} height={250} />
        </div>
      </div>
    </section>
  );
}
