import Image from "next/image";
import "swiper/css";

export function Team() {
  const data = [
    {
      icon: "businessAdvice.svg",
      name: "Assessoria Empresarial",
    },
    {
      icon: "agroAdvice.svg",
      name: "Assessoria para Agronegócio",
    },
    {
      icon: "financialSolutions.svg",
      name: "Soluções Financeiras",
    },
    {
      icon: "civilLaw.svg",
      name: "Direito Civil",
    },
    {
      icon: "environmentalLaw.svg",
      name: "Direito Ambiental",
    },
    {
      icon: "realEstateAdvice.svg",
      name: "Assessoria Imobiliária",
    },
    {
      icon: "corporateConsultancy.svg",
      name: "Consultoria Corporativa",
    },
    {
      icon: "holding.svg",
      name: "Constituição de Holding",
    },
    {
      icon: "lgpdAdvice.svg",
      name: "Assessoria em LGPD",
    },
  ];
  return (
    <section className="Team flex flex-col items-center w-full">
      <Image
        src="/global/texturedBackground2.png"
        alt=""
        width={2000}
        height={5000}
        className="w-full h-full object-cover absolute"
      />
      <div className="flex flex-col bg-primary_color/90 w-full h-full z-10 p-2 lg:p-12 gap-2 items-center text-center">
        <Image
          src="/global/fullLogoWhite.svg"
          alt=""
          width={1000}
          height={300}
          className="w-full sm:w-2/3 lg:w-1/3 mx-auto"
        />
        <div className="flex flex-col gap-2">
          <span className="text-secondary_color tracking-wider leading-3 font-archivo text-sm md:text-base lg:text-sm">
            AS FRENTES DE TRABALHO DE
          </span>
          <strong className="text-white text-2xl md:text-5xl lg:text-3xl font-marcellus leading-3">
            NOSSA ATUAÇÃO
          </strong>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-4 p-2 sm:p-4 md:w-2/3 lg:w-full lg:max-w-[1200px] lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 lg:h-[65vh] grid grid-cols-9 grid-rows-9 gap-2 lg:gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative col-span-3 row-span-3 rounded-lg flex flex-col gap-1 p-1 lg:p-4 ${index % 3 === 0 ? "items-start text-start" : index % 3 === 1 ? "items-center text-center" : "items-end text-end"} justify-between group cursor-pointer bg-white`}
              >
                <Image
                  src="/global/art1.png"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-lg top-0 left-0 absolute opacity-5 group-hover:opacity-90 transition duration-300"
                  alt=""
                />
                <div className="z-10 w-10 lg:w-14 h-10 lg:h-14 rounded-sm bg-primary_color p-2 flex items-center justify-center">
                  <Image
                    src={`/Icons/${item.icon}`}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <span className="z-10 text-sm lg:text-xl font-semibold leading-3 lg:leading-5 tracking-wider text-primary_color font-bigShouldersText group-hover:text-white">
                  {item.name}
                </span>
                <button className="z-10 flex items-center gap-1 text-white text-xs xl:text-sm 2xl:text-base bg-primary_color rounded-sm px-1 lg:px-3 py-1 font-archivo group-hover:bg-[#1b2139] group-hover:scale-105 transition duration-300">
                  <Image
                    src="/Icons/whatsappIconWhite.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                  Falar com Advogado
                </button>
              </div>
            ))}
          </div>
          <div className="relative hidden lg:flex w-full lg:w-1/2 h-[60vh] bg-red-500 items-center justify-center">
            <Image
              src="/global/art3.png"
              alt=""
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute w-full bg-white/70 backdrop-blur-sm flex flex-col items-center justify-between text-center text-primary_color font-archivo gap-2 py-4">
              <Image src="/Icons/suitcase.svg" alt="" width={50} height={50} />
              <strong className="text-2xl tracking-wider font-semibold">
                ESPECIALIDADES E EXPERIÊNCIAS
              </strong>
              <div className="flex items-center gap-2">
                <Image src="/Icons/mouse.svg" alt="" width={20} height={20} />
                <span className="tracking-wide">(PASSE O MOUSE POR CIMA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
