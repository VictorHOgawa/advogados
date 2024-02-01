import { CloseButton } from "@/components/Global/Close";
import { Modal } from "react-bootstrap";
import { Content } from "./styles";
import { GlobalButton } from "@/components/Global/Button";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  closePreviousModal: () => void;
}

export function DeleteAccountModal({
  show,
  onHide,
  closePreviousModal,
}: ModalProps) {
  function handleClose() {
    closePreviousModal();
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <CloseButton onHide={handleClose} />
      <Content>
        <img src="/profile/trashcan.svg" alt="" />
        <h2>Confirme a exclusão da sua conta</h2>
        <span>
          Ao excluir sua conta você perde automaticamento o acesso a conta, e
          para acessa a plataforma novamente você deve realizar uma nova
          assinatura. <br /> <strong>Tem certeza dessa decisão?</strong>
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
