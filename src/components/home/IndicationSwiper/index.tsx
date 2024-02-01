import { SwiperVerticalComponent } from "@/components/Global/swiper/DualSwiperVertical";
import { useEffect, useState } from "react";
import { IndicationCard } from "./styles";

interface SwiperComponentProps {
  items: any[];
}
export default function IndicationSwiper({
  items,
}: SwiperComponentProps) {
    const [itemQuantity, setItemQuantity] = useState(0);
    const [arrayOdd, setArrayOdd] = useState(false);
    const Cards =[{
      id:1,
      name:"1maycon Vasconcellosss sssssssssss",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },{
      id:2,
      name:"2maycon Vasconcellos dsxxxxx dsd dsd ",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },{
      id:3,
      name:"3roberto Dias carlos oliveira machado",
      role:"desenvolvedor",
      img:"xx",
      city:"Sinop-MT"
    },{
      id:4,
      name:"4maycon Vasconcellos",
      role:"desenvolvedor",
      city:"Sinop-MT",
      img:"",
    },{
      id:5,
      name:"5maycon Vasconcellos",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },{
      id:6,
      name:"6maycon Vasconcellos",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },{
      id:7,
      name:"9maycon Vasconcellos",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },
    {
      id:8,
      name:"0maycon Vasconcellos",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },
    {
      id:9,
      name:"00maycon Vasconcellos",
      role:"desenvolvedor",
      img:"",
      city:"Sinop-MT"
    },
  ];
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
                      <div key={item} style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>                   
                        {item.id === itemQuantity && arrayOdd ? (
                        <IndicationCard style={{width: '46%'}}>
                          <div style={{ height:'100%'}}>
                            <img src="./inviolavel.svg" alt=""/>
                          </div>
                          <div>
                            <h3> {item.name}</h3>
                            <p> Sinop-Mt</p>
                            <button> Selecionar</button>
                          </div>
                      </IndicationCard>)
                      :
                      (<IndicationCard>
                        <div style={{ height:'100%'}}>
                          <img src="./inviolavel.svg" alt=""/>
                        </div>
                        <div>
                          <h3> {item.name}</h3>
                          <p> Sinop-Mt</p>
                          <button> Selecionar</button>
                        </div>
                    </IndicationCard>)}
                      
                    </div>
                  )}
                />
                </div>
    );
  }
  
  