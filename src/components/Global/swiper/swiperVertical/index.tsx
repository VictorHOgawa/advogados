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

export default function SwiperVerticalComponent({
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
      slidesPerView: slidePerView || 1.2,
      slidesPerGroupSkip: 0,
      //loop: true,
      effect: "slide",
      direction: "vertical",
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
      <div className="swiper-container-vertical grid-container" ref={domRef}>
        <div className="swiper-wrapper">
          {items.map((item, index) => (
            <div
              className="swiper-slide"
              key={index}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
