import { BackIconSvg } from "../../../../public/BackIcon";
import { ModalTitle } from "../ModalTitle";
import {
  BackButton,
  CloseButton,
  Contact,
  Content,
  DislikeButton,
  Feedback,
  FeedbackAndContact,
  IframeContainer,
  LikeButton,
  StyledModal,
} from "./styles";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  videoUrl: string;
  videoTitle: string;
}

export function TutorialModal({ show, onHide, videoUrl, videoTitle}: ModalProps) {
  return (
    <StyledModal show={show} onHide={onHide} size="lg">
      <Content>
      <ModalTitle
              content={videoTitle}
              priority="secondary"
            />
        <IframeContainer>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{aspectRatio: "16/9"}}
          ></iframe>
        </IframeContainer>

        <FeedbackAndContact>
          <Contact>
            <div style={{display:'flex', flexDirection:"column", alignItems: 'center'}}>
            <h1>Ficou com alguma duvida?</h1>
            <button>
              <img src="/whatsLogo.svg" alt="" />
              <strong>Fale com nosso Time</strong>
            </button>
            </div>
          </Contact>
        </FeedbackAndContact>
        <BackButton onClick={onHide}>
          <button>Voltar</button>
        </BackButton>
      </Content>
    </StyledModal>
  );
}
