import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  Content,
  Form,
  FormGroup,
  FormHeader,
  SuccessModal,
  WithDrawCard,
} from "./styles";
import { AnalisingModal } from "@/components/Global/Modals/AnalisingModal";
import Select from "react-select";
import { AuthPostAPI } from "@/lib/axios";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  balance: number;
}

export function WithdrawModal({ show, onHide, balance }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [withdrawData, setWithdrawData] = useState({
    password: "",
    pixAddressKey: "",
    value: 0,
    pixAddressKeyType: {
      value: "",
      label: "",
    },
  });

  const pixAddressKeyType = [
    {
      value: "CPF",
      label: "CPF",
    },
    {
      value: "CNPJ",
      label: "CNPJ",
    },
    {
      value: "EMAIL",
      label: "Email",
    },
    {
      value: "PHONE",
      label: "Telefone",
    },
    {
      value: "EVP",
      label: "Chave aleatória",
    },
  ];

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
    handleWithdraw();
    setIsVisible(false);
    setTimeout(() => {
      handleConfirm();
    }, 3000);
  }
  function handleClose() {
    setShowSuccess(false);
    onHide();
  }

  async function handleWithdraw() {
    const connect = await AuthPostAPI("/partner/financial/pix", {
      password: withdrawData.password,
      pixAddressKey: withdrawData.pixAddressKey,
      value: withdrawData.value,
      pixAddressKeyType: withdrawData.pixAddressKeyType.value,
    });
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
                  <h2>
                    {balance.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h2>
                </WithDrawCard>
              </div>
              <h1>FAZER RETIRADA </h1>
              <span>Digite o PIX ou Busque pelos Salvos:</span>
            </FormHeader>
            <Form>
              <FormGroup style={{ display: "flex", width: "100%" }}>
                <label htmlFor="password">Sua Senha</label>
                <input
                  id="password"
                  type="password"
                  value={withdrawData.password}
                  onChange={(e) =>
                    setWithdrawData({
                      ...withdrawData,
                      password: e.target.value,
                    })
                  }
                  style={{ width: "20rem", marginRight: "3rem" }}
                />
              </FormGroup>
              <FormGroup style={{ display: "flex", width: "100%" }}>
                <label htmlFor="pixAddressKey">Chave PIX</label>
                <input
                  id="pixAddressKey"
                  type="text"
                  value={withdrawData.pixAddressKey}
                  onChange={(e) =>
                    setWithdrawData({
                      ...withdrawData,
                      pixAddressKey: e.target.value,
                    })
                  }
                  style={{ width: "20rem", marginRight: "3rem" }}
                />
              </FormGroup>
              <FormGroup style={{ display: "flex", width: "100%" }}>
                <label htmlFor="value">Valor</label>
                <input
                  id="value"
                  type="number"
                  value={withdrawData.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  onChange={(e) =>
                    setWithdrawData({
                      ...withdrawData,
                      value: Number(e.target.value),
                    })
                  }
                  style={{ width: "20rem", marginRight: "3rem" }}
                />
              </FormGroup>
              <div className="flex w-full justify-evenly">
                <Select
                  name="state"
                  options={pixAddressKeyType}
                  onChange={(e: any) =>
                    setWithdrawData({ ...withdrawData, pixAddressKeyType: e })
                  }
                  placeholder="Tipo de Chave"
                  menuPlacement="auto"
                  styles={{
                    control: (base) => ({
                      ...base,
                      height: 53,
                      width: 220,
                    }),
                    indicatorSeparator: (base) => ({
                      ...base,
                      display: "none",
                    }),
                    input: (base) => ({
                      ...base,
                      height: 53,
                      width: 220,
                    }),
                  }}
                />
              </div>
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
          <img className="first-image" src="/TruelifeLogo.svg" alt="" />
          <h2>Retirada realizada!</h2>
          <img src="/verify.svg" alt="" />
          <GlobalButton
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
