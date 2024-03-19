import Image from "next/image";

export function Footer() {
  return (
    <footer className="Footer px-10 lg:px-20 pt-2 flex flex-col w-full bg-primary_color">
      <div className="w-full h-64 flex justify-between items-center text-white">
        <Image
          className="Logo w-40 lg:w-64"
          src="/fullLogo.svg"
          alt=""
          width={150}
          height={150}
        />
        <div className="Quote flex flex-col text-base lg:text-4xl">
          <div className="lg:w-12 lg:h-12 w-8 h-8">
            <Image
              className="Icon w-full h-full"
              src="/Icons/openQuotes.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <label>+16 Anos Sendo Seu Aliado</label>
          <label>+16 Anos Sendo Seu Aliado</label>
          <div className="lg:w-12 lg:h-12 w-8 h-8 self-end">
            <Image
              className="Icon"
              src="/Icons/closeQuotes.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="lg:flex hidden flex-col gap-1 pb-8 self-center text-primary_color">
          <button className="Button font font-semibold bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-48">
            <Image
              className="Icon"
              src="/Icons/magnifyingGlass.svg"
              alt=""
              width={15}
              height={15}
            />
            Default
            <Image
              className="Icon"
              src="/Icons/arrowRight.svg"
              alt=""
              width={15}
              height={15}
            />
          </button>
          <button className="Button font font-semibold bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-48">
            <Image
              className="Icon"
              src="/Icons/magnifyingGlass.svg"
              alt=""
              width={15}
              height={15}
            />
            Default
            <Image
              className="Icon"
              src="/Icons/arrowRight.svg"
              alt=""
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-1 pb-8 self-center text-primary_color">
        <button className="Button font font-semibold bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-48">
          <Image
            className="Icon"
            src="/Icons/magnifyingGlass.svg"
            alt=""
            width={15}
            height={15}
          />
          Default
          <Image
            className="Icon"
            src="/Icons/arrowRight.svg"
            alt=""
            width={15}
            height={15}
          />
        </button>
        <button className="Button font font-semibold bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-48">
          <Image
            className="Icon"
            src="/Icons/magnifyingGlass.svg"
            alt=""
            width={15}
            height={15}
          />
          Default
          <Image
            className="Icon"
            src="/Icons/arrowRight.svg"
            alt=""
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className="flex justify-between text-xs w-full gap-1 h-20 border-t-[1px] items-center text-white border-white opacity-50">
        Todos os Direitos Reservados © 2024 <br className="lg:hidden" />
        Pereira & Machiaveli Adv. Associados
        <span className="underline">Desenvolvido pela Executivo's Digital</span>
      </div>
    </footer>
  );
}
