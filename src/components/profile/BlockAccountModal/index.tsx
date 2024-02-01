import { CloseButton } from "@/components/Global/Close";
import { Modal } from "react-bootstrap";
import { Content } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import { useEffect, useState } from "react";
import { ConfirmBlockAccountModal } from "./ConfirmBlockAccount";
import { DeleteAccountModal } from "./DeleteAccount";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function BlockAccountModal({ show, onHide }: ModalProps) {
  const [showBlockAccount, setShowBlockAccount] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [show]);

  function handleOpenBlockAccount() {
    setIsVisible(false);
    setShowBlockAccount(true);
  }

  function handleOpenDeleteAccount() {
    setIsVisible(false);
    setShowDeleteAccount(true);
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <CloseButton onHide={onHide} />
      <Content isVisible={isVisible}>
        <img src="/warning.svg" alt="" />
        <h2>Tem certeza que deseja excluir a sua conta?</h2>
        <span>
          Você pode apenas bloquear para deixar de receber atualizações e
          mensagens. <br /> Com a exclusão, todos seu histórico na plataforma e
          suas informações e conta serão totalmente apagadas.
        </span>
        <GlobalButton
          content="Bloquear Conta"
          className="button1"
          onClick={handleOpenBlockAccount}
        />

        <GlobalButton
          content="Excluir Conta"
          variant="secondary"
          className="button2"
          onClick={handleOpenDeleteAccount}
        />
      </Content>

      <ConfirmBlockAccountModal
        closePreviousModal={onHide}
        show={showBlockAccount}
        onHide={() => setShowBlockAccount(false)}
      />

      <DeleteAccountModal
        show={showDeleteAccount}
        onHide={() => setShowDeleteAccount(false)}
        closePreviousModal={onHide}
      />
    </Modal>
  );
}
