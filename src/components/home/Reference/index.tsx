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
    <section className="Reference overflow-x-hidden flex flex-col bg-white">
      {/* <div className="panel absolute z-10 -ml-[100vw] w-screen h-screen bg-primary_color" /> */}
      <div className="flex flex-col p-4 lg:py-10 lg:px-20 text-2xl xs:text-4xl lg:text-7xl xl:text-9xl font-main_font italic gap-2 w-full ">
        <label className="label1 -ml-[80vw]">RESPONSABILIDADE</label>
        <label
          className="label3 z-20 -ml-[80vw] flex tracking-widest items-center text-secondary_color gap-4 transition duration-200 ease-in-out"
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <div className="label4 flex items-center gap-4 lg:w-20 w-10 h-10 lg:h-20">
            <Image
              className="Icon"
              src="/Icons/secondaryArrowRight.svg"
              alt=""
              width={80}
              height={80}
            />
            REFERÊNCIA
          </div>
        </label>
        <label className="flex justify-between">
          <label className="label2 -ml-[80vw]">PERFORMANCE</label>
          <Image
            className="Logo -mt-10 self-end w-12 h-12 lg:w-32 lg:h-32 xl:w-48 xl:h-48"
            src="/Logomark.svg"
            alt=""
            width={200}
            height={200}
          />
        </label>
      </div>
    </section>
  );
}
