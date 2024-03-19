import Image from "next/image";

export function Topics() {
  return (
    <section className="Topics flex flex-col bg-white">
      <div className="flex flex-col lg:tracking-wide p-4 lg:py-10 lg:px-20 text-2xl xs:text-4xl lg:text-7xl xl:text-9xl font-main_font gap-2 w-full">
        <label>RESPONSABILIDADE</label>
        <label className="flex items-center text-secondary_color gap-4">
          REFERÊNCIA
        </label>
        <label className="flex justify-between">
          PERFORMANCE
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
