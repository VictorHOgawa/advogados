import { ReactNode, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

interface SwiperComponentProps {
  items: any[];
  renderItem: (item: any) => ReactNode;
}

export function SwiperVerticalComponent({
  items,
  renderItem,
}: SwiperComponentProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper>();
  useEffect(() => {
    const mySwiper = new Swiper(domRef.current!, {
      initialSlide: 0,
      slidesPerView: 1.3,
      slidesPerGroupSkip: 0,
      //loop: true,
      direction: "vertical",
      spaceBetween: 10,
    });
    swiperRef.current = mySwiper;
    return () => swiperRef.current!.destroy(true, true);
  }, []);
  return (
    <div>
      <div className="swiper-container-vertical" ref={domRef}>
        <div className="swiper-wrapper">
          {items.map((item, index) => {
            const isEvenIndex = index % 2 === 0;
            const isLastItem = index === items.length - 1;

            if (isEvenIndex) {
              return (
                <div className="swiper-slide" key={item.id}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {renderItem(item)}
                    {!isLastItem && renderItem(items[index + 1])}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
