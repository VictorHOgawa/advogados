import Image from "next/image";

export function Results() {
  const cards = [0, 1, 2, 3];

  return (
    <section className="Results flex flex-col sm:py-2 items-center bg-primary_color w-full h-full">
      <div className="w-full flex flex-col gap-2 mt-10 text-center relative">
        <Image
          src="/global/decorationLeft.svg"
          alt=""
          width={250}
          height={60}
          className=" absolute left-0"
        />
        <span className="text-secondary_color tracking-wide">
          NOSSO PASSADO & NOSSO FUTURO
        </span>
        <strong className="text-white text-2xl font-semibold">ADVOGADOS</strong>
      </div>
      <div className="flex w-full items-center justify-around gap-8 px-8 pb-10 mt-10">
        <div className="flex flex-col relative rounded-t-lg border-[1px] border-secondary_color">
          <Image
            src="/global/attorneyPhoto1.png"
            alt=""
            width={300}
            height={600}
            className="border-[1px] border-secondary_color rounded-t-lg"
          />
          <div className="absolute w-full h-full rounded-t-lg bg-gradient-to-b from-transparent from-35% to-black" />
          <div className="flex flex-col w-3/4 gap-4 z-20 absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
            <div className="w-1/4 bg-transparent mx-auto h-px border-2 border-secondary_color z-10 rounded" />
            <div className="flex flex-col gap-1">
              <span className="text-white bg-transparent text-2xl font-semibold">
                Dr. ABC
              </span>
              <span className="text-secondary_color text-lg">OAB XXX</span>
            </div>
            <button className="flex items-center gap-2 p-2 rounded-sm bg-secondary_color text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
          </div>
        </div>
        <div className="flex flex-col relative rounded-t-lg border-[1px] border-secondary_color">
          <Image
            src="/global/attorneyPhoto2.png"
            alt=""
            width={300}
            height={600}
            className="border-[1px] border-secondary_color rounded-t-lg"
          />
          <div className="absolute w-full h-full rounded-t-lg bg-gradient-to-b from-transparent from-35% to-black" />
          <div className="flex flex-col w-3/4 gap-4 z-20 absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
            <div className="w-1/4 bg-transparent mx-auto h-px border-2 border-secondary_color z-10 rounded" />
            <div className="flex flex-col gap-1">
              <span className="text-white bg-transparent text-2xl font-semibold">
                Dr. ABC
              </span>
              <span className="text-secondary_color text-lg">OAB XXX</span>
            </div>
            <button className="flex items-center gap-2 p-2 rounded-sm bg-secondary_color text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
          </div>
        </div>
        <div className="flex flex-col relative rounded-t-lg border-[1px] border-secondary_color">
          <Image
            src="/global/attorneyPhoto3.png"
            alt=""
            width={300}
            height={600}
            className="border-[1px] border-secondary_color rounded-t-lg"
          />
          <div className="absolute w-full h-full rounded-t-lg bg-gradient-to-b from-transparent from-35% to-black" />
          <div className="flex flex-col w-3/4 gap-4 z-20 absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
            <div className="w-1/4 bg-transparent mx-auto h-px border-2 border-secondary_color z-10 rounded" />
            <div className="flex flex-col gap-1">
              <span className="text-white bg-transparent text-2xl font-semibold">
                Dr. ABC
              </span>
              <span className="text-secondary_color text-lg">OAB XXX</span>
            </div>
            <button className="flex items-center gap-2 p-2 rounded-sm bg-secondary_color text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
          </div>
        </div>
        <div className="flex flex-col relative rounded-t-lg border-[1px] border-secondary_color">
          <Image
            src="/global/attorneyPhoto3.png"
            alt=""
            width={300}
            height={600}
            className="border-[1px] border-secondary_color rounded-t-lg"
          />
          <div className="absolute w-full h-full rounded-t-lg bg-gradient-to-b from-transparent from-35% to-black" />
          <div className="flex flex-col w-3/4 gap-4 z-20 absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
            <div className="w-1/4 bg-transparent mx-auto h-px border-2 border-secondary_color z-10 rounded" />
            <div className="flex flex-col gap-1">
              <span className="text-white bg-transparent text-2xl font-semibold">
                Dr. ABC
              </span>
              <span className="text-secondary_color text-lg">OAB XXX</span>
            </div>
            <button className="flex items-center gap-2 p-2 rounded-sm bg-secondary_color text-white">
              <Image
                src="/Icons/whatsappIconWhite.svg"
                alt=""
                width={20}
                height={20}
              />
              Falar com Advogado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
