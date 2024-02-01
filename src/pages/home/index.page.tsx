import { useLayoutEffect, useRef, useState } from "react";
import {
  CardContainer,
  Content,
  HeaderTitle,
  Line,
  Main,
  NewsCard,
  PartnerCard,
  RegisterPartner,
  SearchPartner,
  Section,
  SwiperButton,
} from "./styles";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import 'swiper/swiper-bundle.css';
import { useRouter } from "next/router";
import SwiperComponent from "@/components/Global/swiper";
import SwiperVerticalComponent from "@/components/Global/swiper/swiperVertical";
import { RegisterPartnerModal } from "@/components/home/RegisterPartnerModal";
import { RegisterIndicationModal } from "@/components/home/RegisterIndicationModal";
import { HeaderCards } from "@/components/home/HeaderCards";
import { Quantity } from "@/utils/const";
import IndicationSwiper from "@/components/home/IndicationSwiper"; 
import { useWindowDimensions } from "@/utils/useWindowDimensions";
export default function Profile() {
  const router = useRouter();
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showIndicationModal, setShowIndicationModal] = useState(false);
  const Cards =[{
    id:1,
    name:"Maycon 1Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },{
    id:2,
    name:"Joao 2Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },{
    id:3,
    name:"Amanda 3Parceiro",
    role:"desenvolvedor",
    img:"xx",
    city:"Sinop-MT"
  },{
    id:4,
    name:"Lucas 4Parceiro",
    role:"desenvolvedor",
    city:"Sinop-MT",
    img:"",
  },{
    id:5,
    name:"Camila 5Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },{
    id:6,
    name:"Pedro 6Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },{
    id:7,
    name:"Isabela 7Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },
  {
    id:8,
    name:"Gabriel 8Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },
  {
    id:9,
    name:"Larissa 9Parceiro",
    role:"desenvolvedor",
    img:"",
    city:"Sinop-MT"
  },
];
const Noticias = [
  {
    id:1,
    name: "Noticia 1",
  },
  {
   id:2,
    name: "Noticia 2",
  },
  {
  id:3,
    name: "Noticia 3",
  },
  {
    id:4,
    name: "Noticia 4",
  },
  {
    id:5,
    name: "Noticia 5",
  }
]
const Indication = [
  {
    id:1,
    name: " 1- Inviolável",
  },
  {
   id:2,
    name: "2- InnovateX Dynamics",
  },
  {
  id:3,
    name: "3- MegaTech Solutions",
  },
  {
    id:4,
    name: "4- Stellar Synergies",
  },
  {
    id:5,
    name: "5- Apex Systems",
  },
  {
    id:5,
    name: "6- Virtuoso Ventures ",
  },
  {
    id:5,
    name: "7- Nexus Dynamics",
  }
]
const HeaderCardsArray =[
  {
    color:"#ccb200",
    title:"Sua Rede de Parceiros Conta com:",
    number:49,
    text:"Integrantes"
  },
  {
    color:"#5c71d6",
    title:"Negócios em Andamento:",
    number:18,
    text:"Ainda nao finalizado(s)"
  },
  {
    title:"Total de sua Receita:",
    number:"R$ 17.357,19",
    text:"Disponível para Saque"

  },
];
  const main = useRef(null);
  const content = useRef(null);
  const SliderQuantity = Quantity();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-100%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);
  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };
  const [nextSlide, setNextSlide] = useState(false);
  const [prevSlide, setPrevSlide] = useState(false);
  const handleNextClick = () => {
    setNextSlide(!nextSlide);
    console.log("Next Clicked");
  };
  const handlePrevClick = () => {
    setPrevSlide(!prevSlide);
    console.log("Prev Clicked");
  };
  const isWindowAbove700 = useWindowDimensions();
  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
        <HeaderTitle>
            <h2>Seu DashBoard</h2>
        </HeaderTitle>
        <CardContainer>
          {isWindowAbove700 === true?
          <>
            {HeaderCardsArray.map((item:any) => (
              <div key={item}>
                <HeaderCards color={item.color} title={item.title} number={item.number} text={item.text}/>
              </div>
          ))}
          </> 
            :
            <div style={{ display: 'flex', flexDirection: 'column', width:'100%', overflow:'hidden'}}>             
            <SwiperComponent
                slidePerView={1.7}
                items={HeaderCardsArray}
                renderItem={(item) => (
                  <div>
                    <HeaderCards color={item.color} title={item.title} number={item.number} text={item.text}/>
                  </div>
                )}
              />
              </div>
          }
          </CardContainer>
          <Main>
            <div style={{display:'flex',flexDirection: isWindowAbove700 ? "row" : "column", justifyContent:'space-between'}}>
              <h2>Parceiros Cadastrados</h2>
              <RegisterPartner onClick={()=> setShowPartnerModal(true)}>
                <img src="/addIcon.svg" alt="" />
                Cadastrar Parceiro
              </RegisterPartner>
            </div>
            <SearchPartner style={{display:"flex"}}>
              <img src="/searchIcon.svg" alt="" />
              <input type="text" placeholder="Pesquisar Parceiro" />
            </SearchPartner>
              <div style={{display:'flex', alignItems: 'center', justifyContent:"space-between"}}>
              <SwiperButton onClick={handlePrevClick} style={{marginLeft:'-0.5rem'}}>
                <img src="./swiperLeft.svg" alt=""/>
              </SwiperButton>
              <div style={{ display: 'flex', flexDirection: 'column', overflow:'hidden'}}>             
            <SwiperComponent
                items={Cards}
                slidePerView={SliderQuantity}
                renderItem={(item) => (
                  <div>
                  <PartnerCard key={item.name} onClick={() => router.push("partner-info")}>
                  <img src="./truePartner.svg" alt=""/>
                      {item.image !== "" ?
                        <img src="./partnerIcon.svg" alt=""/>
                       :
                        <img src="./partnerIcon.svg" alt=""/>         
                      }  
                    <span>{item.city}</span>
                    <h2 style={{ height: '2.6rem' }}>{item.name}</h2>
                    <h3>{item.role}</h3>
                  </PartnerCard>
                  </div>
                )}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
              />
              </div>
              <SwiperButton onClick={handleNextClick}style={{marginLeft:'-1rem'}}>
                <img src="./swiperRight.svg" alt=""/>
              </SwiperButton>
              </div>
          </Main>
          <div style={{display:'flex', flexDirection: isWindowAbove700 ? "row" : "column", width:'90%', justifyContent:'space-between'}}>
          <Section style={{overflow: 'hidden',marginBottom: '2rem' }} >
          <div style={{display:'flex', justifyContent:'space-between', flexDirection: isWindowAbove700 ? "row" : "column",}}>
              <h2>Indicações</h2>
              <RegisterPartner onClick={()=> setShowIndicationModal(true)}>
                <img src="/addIcon.svg" alt="" />
                Nova indicação
              </RegisterPartner>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Line/>
              <Line/>
            </div>
              <IndicationSwiper items={Cards}/>          
            
          </Section>
          <Section style={{ maxHeight: '70vh', }} >
          <div style={{display:'flex', justifyContent:'space-between'}}>
              <h2>Central de Novidades</h2>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Line/>
              <Line/>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'1rem', flexWrap: 'wrap'}}>    
            <SwiperVerticalComponent
                slidePerView={3}
                items={Noticias}
                renderItem={(item: any) => (
                    <div key={item} style={{ display: 'flex'}}>                   
                    <NewsCard key ={item.id}>
                      <img src="./trueLifeIconWhite.svg" alt=""/>
                      <div>
                        <h1>
                        {item.name}
                        </h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        </p>
                      </div>
                      <h3> 25/12</h3>
                  </NewsCard>
                  </div>
                )}
              />
            </div>
          </Section>
          </div>
        </Content>
        <RegisterPartnerModal
          show={showPartnerModal}
          onHide={() => setShowPartnerModal(false)}
        />
        <RegisterIndicationModal
          show={showIndicationModal}
          onHide={() => setShowIndicationModal(false)}
        />          
      </RootLayout>
    </main>
  );
}
