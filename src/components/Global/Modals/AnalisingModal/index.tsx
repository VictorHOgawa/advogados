import { CloseButton } from "@/components/Global/Close";
import { Modal } from "react-bootstrap";
import { Content } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import { useEffect, useState } from "react";
import Theme from "@/styles/themes";
import { windowWidth } from "@/utils/mobile";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  closePreviousModal: () => void;
}

export function AnalisingModal({ show, onHide, closePreviousModal }: ModalProps) {
  function handleClose() {
    closePreviousModal();
    onHide();
  }
  const [pontos, setPontos] = useState('.');
  function AlternarPontos() {
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (pontos === '.') {
          setPontos('..');
        } else if (pontos === '..') {
          setPontos('...');
        } else {
          setPontos('.');
        }
      }, 500); // Altere o intervalo de tempo conforme desejado (em milissegundos)
      
      return () => clearInterval(interval);
    }, [pontos]);}

  AlternarPontos();

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <CloseButton onHide={handleClose} />
      <Content>
      <strong>Estamos analisando!</strong>
          <span
            style={{
              color: Theme.color.gray_80,
              maxWidth: "400px",
              textAlign: "center",
            }}
            className="mt-3 mb-5"
          >
            Isso leva menos de 1 minuto, aguarde aqui mesmo.
          </span>
          {windowWidth(768) ? (
            <div className="custom-loader-small mt-3 mb-5" />
          ) : (
            <div className="custom-loader-big mt-3 mb-5" />
          )}
          <span style={{ color: Theme.color.darkBlueAxion, position: "relative" }}>
            CARREGANDO<span style={{ position: "absolute", right: "-20px", width: '20px' }}>{pontos}</span>
          </span>
      </Content>
    </Modal>
  );
}