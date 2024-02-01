import { CloseButton } from "@/components/Global/Close";
import { Modal } from "react-bootstrap";
import { Content } from "./styles";
import { GlobalButton } from "@/components/Global/Button";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  closePreviousModal: () => void;
}

export function ConfirmBlockAccountModal({ show, onHide, closePreviousModal }: ModalProps) {
  function handleClose() {
    closePreviousModal();
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <CloseButton onHide={handleClose} />
      <Content>
        <img src="/profile/lock.svg" alt="" />
        <h2>Confirme o bloqueio da sua conta</h2>
        <span>
          Ao bloquear a conta você perde automaticamento o acesso a conta e para
          acessar a conta novamente você deve acionar o nosso email
          suporte@axion.com.br , tem certeza dessa decisão?
        </span>
        <GlobalButton content="Bloquear Conta" className="button1" />

        <GlobalButton
          content="Cancelar"
          variant="secondary"
          className="button2"
          onClick={handleClose}
        />
      </Content>
    </Modal>
  );
}
