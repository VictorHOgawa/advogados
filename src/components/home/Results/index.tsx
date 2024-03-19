import Image from "next/image";

export function Results() {
  const cards = [0, 1, 2, 3];

  return (
    <section className="Results flex flex-col p-8 sm:py-2 items-center bg-primary_color w-full h-screen">
      <Image className="Logo" src="/Logo.svg" alt="" width={200} height={200} />
      <div className="absolute top-[calc(100vh+33%)] xs:top-[calc(100vh+25%)] md:top-[calc(100vh+20%)] right-0">
        <Image
          className="Decor w-28 lg:w-44"
          src="/Decor/Decor2.svg"
          alt=""
          width={200}
          height={20}
        />
      </div>
      <div className="absolute top-[calc(100vh+90%)] sm:top-[calc(100vh+95%)] left-0">
        <Image
          className="Decor w-28 lg:w-44"
          src="/Decor/Decor1.svg"
          alt=""
          width={200}
          height={20}
        />
      </div>
      <div className="flex flex-col font-main_font text-white items-center gap-2 xxs:mt-4 sm:mt-0">
        <label className="Title font-[550] text-lg xs:text-xl lg:text-3xl">
          Our results in Numbers
        </label>
        <label className="Subtitle text-sm xs:text-base text-light">
          Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
        </label>
      </div>
      <div className="Cards flex flex-col lg:flex-row lg:items-center lg:w-2/3 lg:h-1/2 xxs:mt-12 sm:mt-8 lg:mt-8 gap-3">
        <div className="MainCard bg-secondary_color w-full md:w-1/2 md:self-center h-48 xs:h-60 sm:h-48 lg:h-full rounded-3xl"></div>
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:h-full justify-center items-center justify-items-center self-center w-full md:w-1/2 gap-2">
          {cards.map((item) => (
            <div className="SecondaryCards bg-white w-[100%] h-[100%] lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-3xl">
              <Image
                className="Background z-10 w-full h-full object-cover opacity-[0.001] hover:opacity-80 rounded-3xl transition duration-200 ease-in-out"
                src="/Facade.svg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
