import { SwiperVerticalComponent } from "@/components/Global/swiper/DualSwiperVertical";
import { useEffect, useState } from "react";
import { IndicationCard } from "./styles";

interface SwiperComponentProps {
  items: any[];
}
export default function IndicationSwiper({ items }: SwiperComponentProps) {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [arrayOdd, setArrayOdd] = useState(false);

  useEffect(() => {
    const quantity = items.length;
    setItemQuantity(quantity);
    setArrayOdd(quantity % 2 !== 0);
  }, [items]);
  return (
    <div>
      <SwiperVerticalComponent
        items={items}
        renderItem={(item: any) => (
          <div
            key={item}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {item.id === itemQuantity && arrayOdd ? (
              <IndicationCard style={{ width: "46%" }}>
                <div className="w-40 h-24">
                  <img src={item.photo_location} className="h-full" alt="" />
                </div>
                <div>
                  <h3> {item.name}</h3>
                  <p>
                    {item.city.name} - {item.city.state}
                  </p>
                  {/* <button> Selecionar</button> */}
                </div>
              </IndicationCard>
            ) : (
              <IndicationCard>
                <div className="w-40 h-24">
                  <img src={item.photo_location} className="h-full" alt="" />
                </div>
                <div>
                  <h3> {item.name}</h3>
                  <p>
                    {item.city.name} - {item.city.state}
                  </p>
                  {/* <button> Selecionar</button> */}
                </div>
              </IndicationCard>
            )}
          </div>
        )}
      />
    </div>
  );
}
