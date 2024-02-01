import { useLayoutEffect, useRef, useState } from "react";
import {
  Content,
  Line,
  Main,
  VideoCard,
} from "./styles";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { TutorialModal } from "@/components/news-central/VideoModal";
import { useWindowDimensions } from "@/utils/useWindowDimensions";
export default function Profile() {
  const [showTutorialModal, setShowTutorialModal] = useState(false);
  const main = useRef(null);
  const content = useRef(null);

  const isWindowAbove700 = useWindowDimensions();

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
const [modalVideoUrl, setModalVideoUrl] = useState("");
const [modalVideoTitle, setModalVideoTitle] = useState("");
const handleOpenVideoModal = (url: string, title: string) => {
    setModalVideoUrl(url);
    setModalVideoTitle(title);
    setShowTutorialModal(true);
}
 const Videos = [
    {
        id: 1,
        title: "Como Usar a Plataforma da Truelife?",
        description: "Assista o vídeo ao lado para que possa ter o conhecimento necessário da plataforma e absorver 100% do que precisar.",
        url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
        id: 2,
        title: "Como Usar a Plataforma da Truelife?",
        description: "Assista o vídeo ao lado para que possa ter o conhecimento necessário da plataforma e absorver 100% do que precisar.",
        url: "https://www.youtube.com/embed/2Vv-BfVoq4g",

    },
    {
        id: 3,
        title: "Como Usar a Plataforma da Truelife?",
        description: "Assista o vídeo ao lado para que possa ter o conhecimento necessário da plataforma e absorver 100% do que precisar.",
        url: "https://www.youtube.com/embed/2Vv-BfVoq4g",

    }
 ]
  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <Main>
            <h2>Central de Informações</h2>
            <div style={{display:"flex", justifyContent:"space-between", flexDirection:'column'}}>
                {Videos.map((item: any) => (
                <div key={item.id}>
                    <Line/>
                    <VideoCard>
                      {!isWindowAbove700 ?
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                      <h1>{item.title}</h1>
                        <iframe src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div>                       
                        <p>
                            {item.description}
                        </p>
                        <div style={{flexDirection: 'row', width:'90%', justifyContent:'space-around', alignSelf:"center"}}>
                            <button onClick={()=> handleOpenVideoModal(item.url, item.title)}>
                                Abrir Video
                            </button>
                            <button>
                                Tutorial    
                            </button>   
                        </div>                    
                    </div>
                    </div>
                    :
                    <>
                    <iframe src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div>
                    <h1>
                        {item.title}
                    </h1>
                    <p>
                        {item.description}
                    </p>
                    <div style={{flexDirection: 'row', width:'70%', justifyContent:'space-around', alignSelf:"center"}}>
                        <button onClick={()=> handleOpenVideoModal(item.url, item.title)}>
                            Abrir Video
                        </button>
                        <button>
                            Tutorial    
                        </button>   
                    </div>                    
                </div>
                </>
                    }
                    </VideoCard>
                </div>
                ))}
            </div>
          </Main>
          <TutorialModal
            show={showTutorialModal}
            onHide={() => setShowTutorialModal(false)}
            videoUrl={modalVideoUrl}
            videoTitle={modalVideoTitle}
        />
        </Content>
      </RootLayout>
    </main>
  );
}
