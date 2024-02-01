import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Content, Form, FormGroup, FormHeader, SuccessModal, WithDrawCard } from "./styles";
import { AnalisingModal } from "@/components/Global/Modals/AnalisingModal";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function WithdrawModal({ show, onHide }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);
  }, [show]);
  function handleConfirm() {
    setShowLoading(false);
    setShowSuccess(true);
    setIsVisible(false);
  }
  function handleLoading() {
    setShowLoading(true);
    setIsVisible(false);
     setTimeout(() => {
      handleConfirm();
      }
      , 3000);
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
                <img src="/CircleWithdraw1.svg" alt="" />
                <WithDrawCard>
                  <span>Saldo Atual</span>
                  <h2>R$ 17.357,19</h2>
                </WithDrawCard>
              </div>
              <h1>FAZER RETIRADA </h1>
              <span>Digite o PIX ou Busque pelos Salvos:</span>
            </FormHeader>
            <Form>
              <FormGroup>
                <label htmlFor="current-password">Seu PIX </label>
                <input type="password" />
              </FormGroup>
              <div
                style={{
                  borderTop: "1px solid" + Theme.color.gray_20,
                  marginTop: "1rem",
                }}
              />
              <FormGroup>
                <label htmlFor="new-password">Insira seu CPF</label>
                <input type="password"  />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm-password">Digite o valor da Retirada</label>
                <input type="password"  />
              </FormGroup>
              <GlobalButton
                content="Fazer Retirada"
                padding="1rem"
                style={{ marginBottom: "4rem" }}
                onClick={handleLoading}
              />
            </Form>
          </Content>
        )}
      </Modal>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <CloseButton onHide={handleClose} />
        <SuccessModal>
          <img  className="first-image" src="/TruelifeLogo.svg" alt="" />
          <h2>Retirada realizada!</h2>
          <img src="/verify.svg" alt="" />
          <GlobalButton
            content="Retornar a Plataforma"
            className="button"
            onClick={handleClose}
          />
        </SuccessModal>
      </Modal>
      <AnalisingModal show={showLoading} onHide={onHide} closePreviousModal={handleClose} />
    </>
  );
}
