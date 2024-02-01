import { ReactNode, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

interface SwiperComponentProps {
  items: any[];
  renderItem: (item: any) => ReactNode;
  nextSlide?: boolean;
  prevSlide?: boolean;
  slidePerView?: number;
}

export default function SwiperComponent({
  items,
  renderItem,
  nextSlide,
  prevSlide,
  slidePerView,
}: SwiperComponentProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper>();

  useEffect(() => {
    const mySwiper = new Swiper(domRef.current!, {
      initialSlide: 0,
      slidesPerView: slidePerView || 3.1,
      spaceBetween: 2,
      //loop: true,
    });
    swiperRef.current = mySwiper;
    return () => swiperRef.current!.destroy(true, true);
  }, [slidePerView]);
  useEffect(() => {
    handleNextSlide();
  }, [nextSlide]);

  useEffect(() => {
    handlePrevSlide();
  }, [prevSlide]);

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div>
      <div className="swiper-container" ref={domRef}>
        <ul className="swiper-wrapper">
          {items.map((item, index) => (
            <div
              className="swiper-slide"
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {renderItem(item)}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
