import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="Header font-archivo absolute w-full z-10 sm:justify-between items-center bg-white/80 flex px-4 py-2 h-20">
      <Image
        className="Logo h-2/5 sm:h-2/3"
        src="/global/fullLogo.svg"
        alt=""
        width={250}
        height={200}
      />
      <div className="hidden lg:flex h-20 text-primary_color font-bold gap-4">
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/selectedIndicator.svg"
            alt=""
            width={30}
            height={15}
          />
          <span>INÍCIO</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>SOBRE</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>ÁREAS</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>CASES</span>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button className="Instagram flex items-center justify-center bg-secondary_color p-2 w-10 h-10 rounded-sm hover:bg-[#94624c] hover:scale-105 transition duration-300">
          <Image
            className="Icon w-full h-full"
            src="/Icons/instagramIcon.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
        <button className="Button font-semibold bg-secondary_color rounded-sm h-10 w-10 md:w-max flex items-center gap-1 p-2 hover:bg-[#94624c] hover:scale-105 transition duration-300">
          <Image
            src="/Icons/whatsappIcon.svg"
            alt=""
            width={30}
            height={30}
            className="h-full"
          />
          <span className="w-full hidden md:block text-xs md:text-base">
            Fale Conosco
          </span>
          <Image
            src="/Icons/arrowRight.svg"
            alt=""
            width={30}
            height={30}
            className="h-full hidden md:block"
          />
        </button>
      </div>
    </header>
  );
}
