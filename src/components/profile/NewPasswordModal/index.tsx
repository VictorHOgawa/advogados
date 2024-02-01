import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Content, Form, FormGroup, FormHeader, SuccessModal } from "./styles";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function NewPasswordModal({ show, onHide }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [show]);

  function handleUpdatePassword() {
    setShowSuccess(true);
    setIsVisible(false);
  }

  function handleClose() {
    setShowSuccess(false);
    onHide();
  }

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        {show && (
          <Content isVisible={isVisible}>
            <CloseButton onHide={onHide} />
            <FormHeader>
              <div>
                <img src="/profile/security-safe.svg" alt="" />
              </div>
              <h1>Atualizar Senha</h1>
              <span>Preencha os campos abaixo para atualizar sua senha.</span>
            </FormHeader>
            <Form>
              <FormGroup>
                <label htmlFor="current-password">Senha Atual</label>
                <input type="password" placeholder="Digite sua senha atual" />
              </FormGroup>
              <div
                style={{
                  borderTop: "1px solid" + Theme.color.gray_20,
                  marginTop: "1rem",
                }}
              />
              <FormGroup>
                <label htmlFor="new-password">Nova Senha</label>
                <input type="password" placeholder="Digite sua nova senha" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm-password">Repetir Senha</label>
                <input type="password" placeholder="Confirme sua nova senha" />
              </FormGroup>
              <GlobalButton
                content="Atualizar Senha"
                padding="1rem"
                style={{ marginBottom: "4rem" }}
                onClick={handleUpdatePassword}
              />
            </Form>
          </Content>
        )}
      </Modal>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <CloseButton onHide={handleClose} />
        <SuccessModal>
          <img src="/verify.svg" alt="" />
          <h2>Senha Alterada!</h2>
          <span>Sua senha foi alterada com sucesso, parabéns!</span>
          <GlobalButton
            content="Finalizar"
            className="button"
            onClick={handleClose}
          />
        </SuccessModal>
      </Modal>
    </>
  );
}
