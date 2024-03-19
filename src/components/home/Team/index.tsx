import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Team() {
  const team = [0, 1, 2, 3, 4, 5];
  return (
    <section className="Team flex flex-col py-8 items-center bg-primary_color w-full">
      <Image className="Logo" src="/Logo.svg" alt="" width={200} height={200} />
      <div className="absolute top-[calc(250vh+15%)] xs:top-[250vh] sm:top-[calc(250vh+10%)] lg:top-[calc(250vh+20%)] xl:top-[calc(250vh+33%)] left-0">
        <Image
          className="Decor w-28 lg:w-44"
          src="/Decor/Decor1.svg"
          alt=""
          width={200}
          height={20}
        />
      </div>
      <div className="flex flex-col px-8 font-main_font text-white items-center gap-2 mt-4">
        <label className="Title font-[550] text-3xl">
          Our results in Numbers
        </label>
        <label className="Subtitle text-light">
          Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
        </label>
      </div>
      <div className="Cards hidden lg:grid grid-cols-3 justify-center gap-8 mt-10">
        {team.map((item) => (
          <div className="Card flex flex-col w-64 h-80 rounded-3xl bg-white">
            <Image
              className="Photo w-full h-40 rounded-t-3xl object-cover"
              src="/Facade.svg"
              alt=""
              width={200}
              height={200}
            />
            <div className="CardBody flex flex-col p-4">
              <div className="Name flex flex-col">
                <label className="Position text-secondary_color">Dr.</label>
                <label className="Name font-semibold text-primary_color">
                  Carlos A. de Paula
                </label>
                <label className="mt-2 text-xs text-primary_color font-light">
                  CEO & CO-FOUNDER
                </label>
                <button className="Calendar mt-2 text-primary_color items-center w-max rounded-lg font-semibold text-xs bg-secondary_color flex gap-2 px-2 py-1">
                  <Image
                    className="Icon"
                    src="/Icons/phoneIcon.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                  Falar com Advogado
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Cards lg:hidden w-full justify-center gap-8 mt-12 lg:mt-8">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides
          loop
          className="mySwiper"
          breakpoints={{
            420: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2.4,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {team.map((item) => (
            <SwiperSlide>
              <div className="Card flex flex-col w-64 h-80 rounded-3xl bg-white">
                <Image
                  className="Photo w-full h-40 rounded-t-3xl object-cover"
                  src="/Facade.svg"
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="CardBody flex flex-col p-4">
                  <div className="Name flex flex-col">
                    <label className="Position text-secondary_color">Dr.</label>
                    <label className="Name font-semibold text-primary_color">
                      Carlos A. de Paula
                    </label>
                    <label className="mt-2 text-xs text-primary_color font-light">
                      CEO & CO-FOUNDER
                    </label>
                    <button className="Calendar mt-2 text-primary_color items-center w-max rounded-lg font-semibold text-xs bg-secondary_color flex gap-2 px-2 py-1">
                      <Image
                        className="Icon"
                        src="/Icons/phoneIcon.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                      Falar com Advogado
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
