import { WithdrawModal } from "@/components/financeiro/WithdrawModal";
import { useEffect, useRef, useState } from "react";
import { useSwiper } from "swiper/react";
import {
  BackButton,
  CardContainer,
  Content,
  HeaderPartnerCard,
  HeaderPartnerCardDiv,
  HeaderPartnerInfo,
  HeadersCardDiv,
  IndicationCard,
  Main,
  PartnerCard,
  SwiperButton,
} from "./styles";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { useRouter } from "next/router";
import SwiperComponent from "@/components/Global/swiper";
import { useWindowDimensions } from "@/utils/useWindowDimensions";
import { HeaderCards } from "@/components/home/HeaderCards";
import { Quantity } from "../../utils/const";
import { authGetAPI } from "@/lib/axios";

export default function Profile() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const swiperControls = useSwiper();
  const swiperRef = useRef<any>(null);
  const router = useRouter();
  const query: any = router.query;
  const Cards = [
    {
      id: 1,
      name: "Maycon 1Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 2,
      name: "Joao 2Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 3,
      name: "Amanda 3Parceiro",
      role: "desenvolvedor",
      img: "xx",
      city: "Sinop-MT",
    },
    {
      id: 4,
      name: "Lucas 4Parceiro",
      role: "desenvolvedor",
      city: "Sinop-MT",
      img: "",
    },
    {
      id: 5,
      name: "Camila 5Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 6,
      name: "Pedro 6Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 7,
      name: "Isabela 7Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 8,
      name: "Gabriel 8Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
    {
      id: 9,
      name: "Larissa 9Parceiro",
      role: "desenvolvedor",
      img: "",
      city: "Sinop-MT",
    },
  ];
  const Indication = [
    {
      id: 1,
      name: " 1- Inviolável",
    },
    {
      id: 2,
      name: "2- InnovateX Dynamics",
    },
    {
      id: 3,
      name: "3- MegaTech Solutions",
    },
    {
      id: 4,
      name: "4- Stellar Synergies",
    },
    {
      id: 5,
      name: "5- Apex Systems",
    },
    {
      id: 5,
      name: "6- Virtuoso Ventures ",
    },
    {
      id: 5,
      name: "7- Nexus Dynamics",
    },
  ];

  const [partnerDetails, setPartnerDetails] = useState({
    name: "",
    email: "",
    mobilePhone: "",
    photo_location: "",
    photo_key: "",
    partners: [
      {
        name: "",
        mobilePhone: "",
        photo_location: "",
        photo_key: "",
      },
    ],
    companies: [
      {
        name: "",
        city: {
          name: "",
          state: "",
        },
        photo_location: "",
        photo_key: "",
      },
    ],
  });

  const main = useRef(null);
  const content = useRef(null);
  useEffect(() => {
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
  const [nextPartnerSlide, setNextPartnerSlide] = useState(false);
  const [prevPartnerSlide, setPrevPartnerSlide] = useState(false);
  const handleNextPartnerClick = () => {
    setNextPartnerSlide(!nextPartnerSlide);
  };
  const handlePrevPartnerClick = () => {
    setPrevPartnerSlide(!prevPartnerSlide);
  };
  const [nextIndicationSlide, setNextIndicationSlide] = useState(false);
  const [prevIndicationSlide, setPrevIndicationSlide] = useState(false);
  const handleNextIndicationClick = () => {
    setNextIndicationSlide(!nextIndicationSlide);
  };
  const handlePrevIndicationClick = () => {
    setPrevIndicationSlide(!prevIndicationSlide);
  };
  const isWidthGreaterThan700 = useWindowDimensions();
  const SliderQuantity = Quantity();

  async function getPartnerDetails() {
    const connect = await authGetAPI(`/partner/${query.id}`);
    if (connect.status !== 200) {
      alert(connect.body);
      return;
    }
    return setPartnerDetails(connect.body.partner);
  }

  useEffect(() => {
    getPartnerDetails();
  }, []);

  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <div style={{ display: "flex", width: "90%" }}>
            <h2>Detalhes do Parceiro</h2>
            <div style={{ borderTop: "2px solid black" }} />
          </div>
          <CardContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: isWidthGreaterThan700 ? "row" : "column",
              }}
            >
              <HeaderPartnerCardDiv>
                <HeaderPartnerCard>
                  <img src="./truePartner.svg" alt="" />
                  <img
                    src={
                      partnerDetails.photo_location !== null
                        ? partnerDetails.photo_location
                        : "./partnerIcon.svg"
                    }
                    alt=""
                  />
                  <span>Sinop-Mt</span>
                </HeaderPartnerCard>
                <HeaderPartnerInfo>
                  <h3>{partnerDetails.name}</h3>
                  <span>{partnerDetails.email}</span>
                  <span>{partnerDetails.mobilePhone}</span>
                </HeaderPartnerInfo>
              </HeaderPartnerCardDiv>
              <HeadersCardDiv>
                <HeaderCards
                  color="#5c71d6"
                  title="Negócios em Andamento:"
                  number="18"
                  text="Ainda nao finalizado(s)"
                />
                <HeaderCards
                  title="Total de sua Receita:"
                  number="R$ 17.357,19"
                  text="Disponível para Saque"
                />
              </HeadersCardDiv>
            </div>
          </CardContainer>
          <Main>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Parceiros Cadastrados</h2>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SwiperButton
                onClick={handlePrevPartnerClick}
                style={{ marginLeft: "-0.5rem" }}
              >
                <img src="./swiperLeft.svg" alt="" />
              </SwiperButton>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <SwiperComponent
                  items={partnerDetails.partners}
                  slidePerView={SliderQuantity}
                  renderItem={(item) => (
                    <div style={{}}>
                      <PartnerCard
                        key={item.name}
                        onClick={() => router.push("partner-info")}
                      >
                        <img src="./truePartner.svg" alt="" />
                        {item.photo_location !== null ? (
                          <img src={item.photo_location} alt="" />
                        ) : (
                          <img src="./partnerIcon.svg" alt="" />
                        )}
                        <h2 style={{ height: "2.6rem" }}>{item.name}</h2>
                        <h3>{item.mobilePhone}</h3>
                      </PartnerCard>
                    </div>
                  )}
                  nextSlide={nextPartnerSlide}
                  prevSlide={prevPartnerSlide}
                />
              </div>
              <SwiperButton
                onClick={handleNextPartnerClick}
                style={{ marginLeft: "-1rem" }}
              >
                <img src="./swiperRight.svg" alt="" />
              </SwiperButton>
            </div>
          </Main>
          <Main>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Indicações</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SwiperButton
                onClick={handlePrevIndicationClick}
                style={{ marginRight: "0.3rem" }}
              >
                <img src="./swiperLeft.svg" alt="" />
              </SwiperButton>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <SwiperComponent
                  items={partnerDetails.companies}
                  slidePerView={
                    partnerDetails.companies.length < 5
                      ? partnerDetails.companies.length
                      : 5
                  }
                  renderItem={(item) => (
                    <IndicationCard className="w-40" key={item.id}>
                      <div className="w-40 h-24">
                        <img
                          src={
                            item.photo_location !== null
                              ? item.photo_location
                              : "./partnerIcon.svg"
                          }
                          className="h-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3> {item.name}</h3>
                        <p>
                          {item.city.name} - {item.city.state}
                        </p>
                        <button> Selecionar</button>
                      </div>
                    </IndicationCard>
                  )}
                  nextSlide={nextIndicationSlide}
                  prevSlide={prevIndicationSlide}
                />
              </div>
              <SwiperButton
                onClick={handleNextIndicationClick}
                style={{ marginLeft: "0.3rem" }}
              >
                <img src="./swiperRight.svg" alt="" />
              </SwiperButton>
            </div>
          </Main>
          <BackButton onClick={() => router.push("home")}>Voltar</BackButton>
        </Content>
        <WithdrawModal
          show={showWithdrawModal}
          onHide={() => setShowWithdrawModal(false)}
        />
      </RootLayout>
    </main>
  );
}
