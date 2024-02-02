import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Content, Form, FormGroup, FormHeader, SuccessModal } from "./styles";
import { AuthPutAPI } from "@/lib/axios";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function NewPasswordModal({ show, onHide }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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

  async function updatePassword() {
    setUpdateLoading(true);
    if (!oldPassword || !newPassword) {
      alert("Preencha todos os campos");
      return setUpdateLoading(false);
    } else if (oldPassword === newPassword) {
      alert("A nova senha deve ser diferente da atual");
      return setUpdateLoading(false);
    } else if (newPassword !== repeatPassword) {
      alert("As senhas devem ser iguais");
      return setUpdateLoading(false);
    }
    const connect = await AuthPutAPI("/partner/password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setUpdateLoading(false);
    }
    alert("Senha atualizada");
    setOldPassword("");
    setNewPassword("");
    setRepeatPassword("");
    onHide();
    return setUpdateLoading(false);
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
                <label htmlFor="oldPassword">Senha Atual</label>
                <input
                  id="oldPassword"
                  type="password"
                  placeholder="Digite sua senha atual"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </FormGroup>
              <div
                style={{
                  borderTop: "1px solid" + Theme.color.gray_20,
                  marginTop: "1rem",
                }}
              />
              <FormGroup>
                <label htmlFor="newPassword">Nova Senha</label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="Digite sua nova senha"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="repeatPassword">Repetir Senha</label>
                <input
                  id="repeatPassword"
                  type="password"
                  placeholder="Confirme sua nova senha"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </FormGroup>
              <GlobalButton
                content="Atualizar Senha"
                padding="1rem"
                style={{ marginBottom: "4rem" }}
                onClick={updatePassword}
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
