import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Team2() {
  const team = [0, 1, 2, 3];
  return (
    <section className="Team2 bg-primary_color flex w-full pb-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop
        slidesPerGroup={2}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        centeredSlides
        className="bg-primary_color h-96"
      >
        {team.map((item) => (
          <>
            <SwiperSlide>
              <div className="flex flex-col bg-primary_light_color text-white justify-end w-64 lg:w-80 h-full">
                <Image
                  className="w-64 lg:w-80 h-full absolute opacity-[0.001] hover:opacity-80 transition duration-200 ease-in-out object-cover"
                  src="/Facade.svg"
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="flex z-10 flex-col gap-2 p-8">
                  <label className="text-lg font-semibold">Sophie Moore</label>
                  <label className="mt-2 text-smfont-light">
                    Pellentesque at dui vitae amet varius interdum pulvinar mi a
                    egestas ultricies ut diam eget tempor tortor feugiat.
                  </label>
                  <button className="Calendar mt-2 items-center w-max rounded-lg font-semibold text-xs bg-transparent flex gap-2">
                    Falar com Advogado
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-neutral_color w-64 lg:w-80 h-full" />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}
