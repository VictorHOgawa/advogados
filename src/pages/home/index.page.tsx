import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import "swiper/swiper-bundle.css";
import { useRouter } from "next/router";
import SwiperComponent from "@/components/Global/swiper";
import { RegisterPartnerModal } from "@/components/home/RegisterPartnerModal";
import { RegisterIndicationModal } from "@/components/home/RegisterIndicationModal";
import { HeaderCards } from "@/components/home/HeaderCards";
import { authGetAPI } from "@/lib/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Profile() {
  const router = useRouter();
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showIndicationModal, setShowIndicationModal] = useState(false);

  const [indications, setIndications] = useState([
    {
      id: "",
      name: "",
      agent_name: "",
      agent_phone_number: "",
      cpfCnpj: "",
      partner_id: "",
      city: {
        name: "",
        state: "",
      },
      city_id: "",
      photo_location: "",
      photo_key: "",
    },
  ]);
  const [partners, setPartners] = useState([
    {
      name: "",
      photo_location: "",
      photo_key: "",
      id: "",
      mobilePhone: "",
    },
  ]);

  const Noticias = [
    {
      id: 1,
      name: "Noticia 1",
    },
    {
      id: 2,
      name: "Noticia 2",
    },
    {
      id: 3,
      name: "Noticia 3",
    },
    {
      id: 4,
      name: "Noticia 4",
    },
    {
      id: 5,
      name: "Noticia 5",
    },
  ];

  const HeaderCardsArray = [
    {
      color: "#ccb200",
      title: "Sua Rede de Parceiros Conta com:",
      number: 49,
      text: "Integrantes",
    },
    {
      color: "#5c71d6",
      title: "Negócios em Andamento:",
      number: 18,
      text: "Ainda nao finalizado(s)",
    },
    {
      title: "Total de sua Receita:",
      number: "R$ 17.357,19",
      text: "Disponível para Saque",
    },
  ];
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
  const [nextSlide, setNextSlide] = useState(false);
  const [prevSlide, setPrevSlide] = useState(false);
  const handleNextClick = () => {
    setNextSlide(!nextSlide);
  };
  const handlePrevClick = () => {
    setPrevSlide(!prevSlide);
  };

  const [width, setWidth] = useState(100);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function getIndications() {
    const connect = await authGetAPI("/nominatedCompany");
    if (connect.status !== 200) {
      alert(connect.body);
      return;
    }
    return setIndications(connect.body.companies);
  }

  async function getPartners() {
    const connect = await authGetAPI("/partner");
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      alert(connect.body);
      return;
    }
    return setPartners(connect.body.partners);
  }

  useEffect(() => {
    getIndications();
    getPartners();
  }, []);

  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <div
          className="mainContent bg-grayBackground relative m-1 rounded-tl-2xl rounded-bl-2xl p-2 w-full left-full lg:w-[calc(100%-18rem)] lg:left-[calc(100%-18rem)]"
          ref={content}
          style={{ opacity: 1 }}
        >
          <header className="w-full flex flex-col p-1">
            <h2 className="text-2xl font-bold">Seu DashBoard</h2>
            <div className="headerMenu flex w-full lg:w-4/5 self-center py-1">
              <Swiper
                className="mySwiper p-1"
                slidesPerView={
                  width < 550
                    ? 1.5
                    : width >= 550 && width < 768
                      ? 2.5
                      : width >= 1024 && width < 1360
                        ? 2.7
                        : 3
                }
              >
                {HeaderCardsArray.map((item: any) => (
                  <SwiperSlide className="xxs:m-2 lg:m-8 xl:m-3">
                    <div key={item}>
                      <HeaderCards
                        color={item.color}
                        title={item.title}
                        number={item.number}
                        text={item.text}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <main className="flex flex-col w-full bg-white rounded-xl lg:rounded-2xl p-2">
            <div className="flex flex-col lg:flex-row justify-between gap-2">
              <h2 className="text-xl font-semibold">Parceiros Cadastrados</h2>
              <button
                className="RegisterPartner bg-green-70 rounded text-white self-end flex gap-1 p-2 items-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:bg-green-60 hover:scale-[1.01] transition duration-200 ease-in text-semibold"
                onClick={() => setShowPartnerModal(true)}
              >
                <img src="/addIcon.svg" alt="" />
                Cadastrar Parceiro
              </button>
            </div>
            <div className="searchPartner flex items-center mt-4 h-12 rounded-lg w-80 bg-gray-20">
              <img src="/searchIcon.svg" alt="" />
              <input
                className="bg-transparent ml-2 border-0 w-full h-full focus:outline-none"
                type="text"
                placeholder="Pesquisar Parceiro"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                className="SwiperButton w-6 h-10 -ml-2 border-0 bg-transparent transition duration-200 ease-in hover:scale-110"
                onClick={handlePrevClick}
              >
                <img src="./swiperLeft.svg" alt="" />
              </button>
              <div
                className="p-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <SwiperComponent
                  items={partners}
                  slidePerView={partners.length < 5 ? partners.length : 5}
                  renderItem={(item) => (
                    <div>
                      <div
                        className="Card flex flex-col mt-6 h-60 text-sm w-40 p-2 bg-gray-10 border-[1px] border-black rounded justify-around items-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]"
                        key={item.name}
                        onClick={() =>
                          router.push(`partner-info?id=${item.id}`)
                        }
                      >
                        <img className="w-full" src="/truePartner.svg" alt="" />
                        {item.photo_location !== null ? (
                          <img src={item.photo_location} alt="" />
                        ) : (
                          <img src="/partnerIcon.svg" alt="" />
                        )}
                        {/* <h3>
                          {item.city.name} - {item.city.state}
                        </h3> */}
                        <h2 className="font-semibold">{item.name}</h2>
                        <h3 className="text-sm">{item.mobilePhone}</h3>
                      </div>
                    </div>
                  )}
                  nextSlide={nextSlide}
                  prevSlide={prevSlide}
                />
              </div>
              <button
                className="SwiperButton w-6 h-10 mr-2 border-0 bg-transparent transition duration-200 ease-in hover:scale-110"
                onClick={handleNextClick}
              >
                <img src="./swiperRight.svg" alt="" />
              </button>
            </div>
          </main>
          <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
            {indications[0].name !== "" && (
              <div className="Section flex flex-col w-full lg:w-1/2 bg-white rounded-xl lg:rounded-2xl xxs:p-2 xs:p-4">
                <div className="flex flex-col lg:flex-row justify-between gap-2">
                  <h2 className="text-xl font-semibold">Indicações</h2>
                  <button
                    className="newIndication bg-green-70 rounded text-white self-end flex gap-1 p-2 items-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:bg-green-60 hover:scale-[1.01] transition duration-200 ease-in text-semibold"
                    onClick={() => setShowIndicationModal(true)}
                  >
                    <img src="/addIcon.svg" alt="" />
                    Nova indicação
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="w-[49%] h-0.5 mt-2 bg-black" />
                  <div className="w-[49%] h-0.5 mt-2 bg-black" />
                </div>
                <div className="flex flex-wrap justify-between h-48 lg:h-64 overflow-y-scroll">
                  {indications.map((item) => (
                    <div className="flex flex-col w-[45%] border-[1px] border-black rounded-lg m-1 items-center justify-center text-center">
                      <img src={item.photo_location} className="h-24" alt="" />
                      <strong> {item.name}</strong>
                      {item.city.name} - {item.city.state}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="Section flex flex-col w-full lg:w-1/2 bg-white rounded-xl lg:rounded-2xl xxs:p-2 xs:p-4">
              <h2 className="text-xl font-semibold">Central de Novidades</h2>
              <div className="flex gap-4">
                <div className="w-[49%] h-0.5 mt-2 bg-black" />
                <div className="w-[49%] h-0.5 mt-2 bg-black" />
              </div>
              <div>
                <div className="flex flex-wrap justify-between h-48 lg:h-64 overflow-y-scroll">
                  {Noticias.map((item) => (
                    <div
                      className="NewsCard flex w-full bg-[#86888A] m-1 gap-2 min-h-16 rounded-lg border-[1px] border-black p-2 text-white"
                      key={item.id}
                    >
                      <img src="./trueLifeIconWhite.svg" alt="" />
                      <div className="flex flex-col">
                        <h1 className="font-bold text-lg">{item.name}</h1>
                        <p className="text-xs md:text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's
                        </p>
                        <h3 className="self-end text-xs md:text-sm"> 25/12</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <RegisterPartnerModal
          show={showPartnerModal}
          onHide={() => setShowPartnerModal(false)}
          getPartners={getPartners}
        />
        <RegisterIndicationModal
          show={showIndicationModal}
          onHide={() => setShowIndicationModal(false)}
          getIndications={getIndications}
        />
      </RootLayout>
    </main>
  );
}
