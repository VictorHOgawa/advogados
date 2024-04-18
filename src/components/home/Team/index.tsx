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
      <div className="flex flex-col bg-primary_color/90 w-full h-full z-10 p-12 gap-5 items-center text-center">
        <Image
          src="/global/fullLogoWhite.svg"
          alt=""
          width={1000}
          height={300}
          className="w-1/3 mx-auto"
        />
        <div className="flex flex-col gap-2">
          <span className="text-secondary_color tracking-wider">
            AS FRENTES DE TRABALHO DE
          </span>
          <strong className="text-white text-5xl">NOSSA ATUAÇÃO</strong>
        </div>
        <div className="flex w-full gap-20 items-center">
          <div className="w-1/2 h-[70vh] grid grid-cols-9 grid-rows-9 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className={`col-span-3 row-span-3 rounded-lg flex flex-col bg-white p-4 ${index % 3 === 0 ? "items-start" : index % 3 === 1 ? "items-center" : "items-end"} justify-between`}
              >
                <div className="w-14 h-14 rounded-sm bg-primary_color p-2 flex items-center justify-center">
                  <Image
                    src={`/Icons/${item.icon}`}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xl font-semibold leading-5 tracking-wider text-primary_color">
                  {item.name}
                </span>
                <button className="flex items-center gap-2 text-white bg-primary_color rounded-sm px-3 py-2">
                  <Image
                    src="/Icons/whatsappIconWhite.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Falar com Advogado
                </button>
              </div>
            ))}
          </div>
          <div className="relative w-1/2 h-[60vh] bg-red-500 flex items-center justify-center">
            <Image
              src="/global/art3.png"
              alt=""
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute w-full bg-white/70 backdrop-blur-sm flex flex-col items-center justify-between text-center text-primary_color gap-2 py-4">
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
