import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import {
  CodeButton,
  Content,
  Form,
  FormGroup,
  FormHeader,
  RegisterPartner,
  SearchPartner,
  SuccessModal,
  WithDrawCard,
} from "./styles";
import { AnalisingModal } from "@/components/Global/Modals/AnalisingModal";
import { AuthPostAPI } from "@/lib/axios";
import { maskPhone } from "@/utils/masks";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  getPartners: () => void;
}

export function RegisterPartnerModal({
  show,
  onHide,
  getPartners,
}: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [copy, setCopy] = useState(false);
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [partnerData, setPartnerData] = useState({
    name: "",
    mobilePhone: "",
  });
  const [code, setCode] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, [show]);
  function handleConfirm() {
    setShowLoading(false);
    setShowSuccess(true);
    setIsVisible(false);
  }

  function handleClose() {
    setShowSuccess(false);
    onHide();
    getPartners();
  }
  const handleCopyClick = () => {
    const codeButton = document.getElementById("copy-button");
    setCopy(true);
    if (codeButton) {
      const textToCopy = code;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setTimeout(() => {
            setCopy(false);
          }, 1000);
        })
        .catch((error) => {
          console.error("Erro ao copiar texto:", error);
        });
    }
  };

  async function handlePartners() {
    setPartnerLoading(true);
    const connect = await AuthPostAPI("/partnerInviteCode", {
      name: partnerData.name,
      mobilePhone: partnerData.mobilePhone,
    });
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      alert(connect.body);
      return setPartnerLoading(false);
    }
    setCode(connect.body.code);
    setPartnerLoading(false);
    setShowSuccess(true);
  }

  return (
    <>
      <Modal show={show} onHide={onHide}>
        {show && (
          <Content isVisible={isVisible}>
            <CloseButton onHide={onHide} />
            <FormHeader>
              <div>
                <img src="/userBlueCicle.svg" alt="" />
              </div>
              <h1>Cadastre um Parceiro </h1>
              <span style={{ textAlign: "center" }}>
                Digite o Nome e o Celular do Parceiro.
              </span>
            </FormHeader>
            <Form>
              <FormGroup>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={partnerData.name}
                  onChange={(e) =>
                    setPartnerData({
                      ...partnerData,
                      name: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="mobilePhone">Celular</label>
                <input
                  id="mobilePhone"
                  type="text"
                  value={partnerData.mobilePhone}
                  onChange={(e) =>
                    setPartnerData({
                      ...partnerData,
                      mobilePhone: maskPhone(e.target.value),
                    })
                  }
                  maxLength={14}
                />
              </FormGroup>
              <RegisterPartner
                disabled={partnerLoading}
                onClick={handlePartners}
              >
                {partnerLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  <>
                    <img src="/addIcon.svg" alt="" />
                    Cadastrar Parceiro
                  </>
                )}
              </RegisterPartner>
            </Form>
          </Content>
        )}
      </Modal>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <CloseButton onHide={handleClose} />
        <SuccessModal>
          <img className="first-image" src="./TruelifeLogo.svg" alt="" />
          <h2>Cadastro aprovado!</h2>

          <img src="/verify.svg" alt="" />
          <span>
            {" "}
            Clique aqui para copiar o código e envie <br />
            para seu parceiro se Registrar*
          </span>
          <CodeButton id="copy-button" onClick={handleCopyClick}>
            {" "}
            {copy ? "Copiado!" : code}
          </CodeButton>
          <GlobalButton
            variant="secondary"
            content="Retornar a Plataforma"
            className="button"
            onClick={handleClose}
          />
        </SuccessModal>
      </Modal>
      <AnalisingModal
        show={showLoading}
        onHide={onHide}
        closePreviousModal={handleClose}
      />
    </>
  );
}
