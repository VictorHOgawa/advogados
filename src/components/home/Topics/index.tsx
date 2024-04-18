import Image from "next/image";

export function Topics() {
  return (
    <section className="Topics relative flex flex-col bg-[url('/global/texturedBackground1.png')] bg-cover bg-no-repeat bg-center w-full p-20 h-[60vh]">
      <Image
        src="/global/logo.svg"
        width={300}
        height={500}
        alt=""
        quality={100}
        className="absolute opacity-10 left-0 top-0"
      />
      <div className="absolute w-4/5 h-40 top-0 left-0 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Image
            src="/global/decorationLeft.svg"
            alt=""
            width={250}
            height={60}
          />
          <div className="flex flex-col gap-1">
            <span className="text-secondary_color text-sm tracking-wider">
              ONDE FICA O ESCRITÓRIO
            </span>
            <strong className="text-primary_color text-3xl">
              SEJA BEM VINDO
            </strong>
          </div>
        </div>
        <Image
          src="/global/decorationRight.svg"
          alt=""
          width={250}
          height={60}
          className="z-10"
        />
      </div>
      <div className="absolute flex self-end w-1/2 gap-2 items-end justify-end">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.284958739607!2d-55.50930597442668!3d-11.857965449930113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77ff3ed3e0d7d%3A0x530e3c00891026f9!2sPereira%20%26%20Machiaveli%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1713380518988!5m2!1spt-BR!2sbr"
          width="600"
          height="300"
          loading="lazy"
          className="self-end rounded-lg"
        ></iframe>
        <Image
          src="/global/buildingFacade.png"
          alt=""
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
