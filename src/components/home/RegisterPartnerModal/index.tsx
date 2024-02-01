import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { CodeButton, Content, Form, FormGroup, FormHeader, RegisterPartner, SearchPartner, SuccessModal, WithDrawCard } from "./styles";
import { AnalisingModal } from "@/components/Global/Modals/AnalisingModal";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function RegisterPartnerModal({ show, onHide }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [copy, setCopy] = useState(false);

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
  const handleCopyClick = () => {
    const codeButton = document.getElementById('copy-button'); 
    setCopy(true);
    if (codeButton) {
      const textToCopy = codeButton.innerText;
  
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setTimeout(() => {
          setCopy(false);
        }, 1000);
      })
        .catch((error) => {
          console.error('Erro ao copiar texto:', error);
        });
    }
  };
  return (
    <>
      <Modal show={show} onHide={onHide} >
        {show && (
          <Content isVisible={isVisible}>
            <CloseButton onHide={onHide} />
            <FormHeader>
              <div>
                <img src="/userBlueCicle.svg" alt="" />
              
              </div>
              <h1>Cadastre um Parceiro </h1>
              <span style={{textAlign:'center'}}>Digite o CNPJ OU CPF.</span>
            </FormHeader>
            <Form>
                <SearchPartner style={{display:"flex"}}>
                <img src="/searchIcon.svg" alt="" />
                <input type="text" placeholder="Pesquisar Parceiro" />
              </SearchPartner>
              <RegisterPartner onClick={handleLoading}>
                <img src="/addIcon.svg" alt="" />
                Cadastrar Parceiro
              </RegisterPartner>
                
            </Form>
          </Content>
        )}
      </Modal>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <CloseButton onHide={handleClose} />
        <SuccessModal>
          <img  className="first-image" src="./TruelifeLogo.svg" alt="" />
          <h2>Cadastro aprovado!</h2>
          
          <img src="/verify.svg" alt="" />
          <span> Clique aqui para copiar o código e envie <br/>para seu parceiro se Registrar*</span>
          <CodeButton id="copy-button" onClick={handleCopyClick}> {copy? ('Copiado!'):('3423')}</CodeButton>
          <GlobalButton
            variant="secondary"
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
