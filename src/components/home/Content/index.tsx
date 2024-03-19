import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Content() {
  const team = [0, 1, 2, 3];
  return (
    <section className="Content flex flex-col pt-8 pb-20 items-center bg-primary_color w-full">
      <Image className="Logo" src="/Logo.svg" alt="" width={200} height={200} />
      {/* <div className="absolute top-[250vh] lg:top-[calc(250vh+33%)] left-0">
        <Image
          className="Decor w-28 lg:w-44"
          src="/Decor/Decor1.svg"
          alt=""
          width={200}
          height={20}
        />
      </div> */}
      <div className="flex flex-col px-8 font-main_font text-white items-center gap-2 mt-4">
        <label className="Title font-[550] text-3xl">
          Our results in Numbers
        </label>
        <label className="Subtitle text-light">
          Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
        </label>
      </div>
      <div className="Cards hidden lg:grid grid-cols-2 justify-center gap-8 mt-10">
        {team.map((item) => (
          <div className="Card flex flex-col justify-end w-96 h-96 rounded-3xl bg-white text-primary_light_color hover:text-white">
            <Image
              className="Photo w-96 h-96 opacity-[0.001] rounded-3xl absolute hover:opacity-80 object-cover transition duration-200 ease-in-out"
              src="/Facade.svg"
              alt=""
              width={200}
              height={200}
            />
            <div className="CardBody z-10 flex flex-col p-8">
              <div className="Title tracking-wide flex flex-col justify-end">
                <label className="text-lg font-semibold">Multiple users</label>
                <label className="mt-2 text-smfont-light">
                  Pellentesque at dui vitae amet varius interdum pulvinar mi a
                  egestas ultricies ut diam eget tempor tortor feugiat.
                </label>
                <button className="Calendar text-primary_light_color mt-2 items-center w-max rounded-lg font-semibold text-xs bg-transparent flex gap-2">
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
          </div>
        ))}
      </div>
      <div className="Cards lg:hidden w-full justify-center gap-8 mt-12 lg:mt-8">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides
          loop
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
          className="mySwiper"
        >
          {team.map((item) => (
            <SwiperSlide>
              <div className="Card flex flex-col justify-end w-64 h-64 rounded-3xl bg-white text-primary_light_color hover:text-white">
                <Image
                  className="Photo w-64 h-64 opacity-[0.001] rounded-3xl absolute hover:opacity-80 object-cover transition duration-200 ease-in-out"
                  src="/Facade.svg"
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="CardBody z-10 flex flex-col p-8">
                  <div className="Title tracking-wide flex flex-col justify-end">
                    <label className="text-lg font-semibold">
                      Multiple users
                    </label>
                    <label className="mt-2 text-smfont-light">
                      Pellentesque at dui vitae amet varius...
                    </label>
                    <button className="Calendar text-primary_light_color mt-2 items-center w-max rounded-lg font-semibold text-xs bg-transparent flex gap-2">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
