import { GlobalButton } from "@/components/Global/Button";
import { BlockAccountModal } from "@/components/profile/BlockAccountModal";
import { NewPasswordModal } from "@/components/profile/NewPasswordModal";
import { useLayoutEffect, useRef, useState } from "react";
import { UserEditSVG } from "../../../public/UserEdit";
import {
  AvatarContainer,
  ChangeAvatarButton,
  Content,
  FormGroup,
  FormSection,
  Line,
  Main,
  PassWordButton,
  PersonalInfo,
  RadioContainer,
  RadioGroup,
  RadioSelector,
} from "./styles";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { NewUserModal } from "@/components/profile/NewUserModal";
import { useWindowDimensions } from "@/utils/useWindowDimensions";

export default function Profile() {
  const [selectedGender, setSelectedGender] = useState("male");
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showBlockAccountModal, setShowBlockAccountModal] = useState(false);
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
  };
  const main = useRef(null);
  const content = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-100%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);
  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };
  const isWidthGreaterThan700 = useWindowDimensions();
  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <Main>
            <header>
              <h2>Meu Perfil</h2>
              {isWidthGreaterThan700 ? (
                  <button onClick={() => setShowNewPasswordModal(true)}>
                    Trocar Senha
                  </button>
                ) : (
                  <div/>
                )}      
            </header>
            <PersonalInfo>
            {isWidthGreaterThan700 ? (
                  <AvatarContainer>
                  <img src="/sidebar/user.png" alt="" />
                  <ChangeAvatarButton>
                    <UserEditSVG />
                    Substituir
                  </ChangeAvatarButton>
                </AvatarContainer>
                ) : (
                  <AvatarContainer style={{ width:'100%', display:'flex', justifyContent:'space-between', flexDirection: 'row'}}>
                    <div style={{ display: 'flex', flexDirection:'column'}}>
                      <img src="/sidebar/user.png" alt="" />
                      <ChangeAvatarButton>
                        <UserEditSVG />
                        Substituir
                      </ChangeAvatarButton>
                    </div>
                    <div>
                <PassWordButton onClick={() => setShowNewPasswordModal(true)}>
                    Trocar Senha
                  </PassWordButton>
                  </div>
              </AvatarContainer>
                )}
              <FormSection>
                <FormGroup>
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" value={"Robert Martins"} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={"rober@axion.com.br"} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" value={"(11) 99999-999"} />
                </FormGroup>
              </FormSection>           
              <FormSection>
                <FormGroup>
                  <label htmlFor="CPF">Seu CPF</label>
                  <input type="text" id="CPF" value={"111.111.111-11"} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="birthDate">Data de Nascimento</label>
                  <input type="date" id="birthDate" />
                </FormGroup>
                <div>
                  <label htmlFor="gender" style={{ marginBottom: "0.75rem" }}>
                    Sexo
                  </label>
                  <RadioContainer>
                    <RadioGroup>
                      <RadioSelector
                        htmlFor="male"
                        checked={selectedGender === "male"}
                      >
                        <div />
                      </RadioSelector>
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={selectedGender === "male"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="male">Masculino</label>
                    </RadioGroup>
                    <RadioGroup>
                      <RadioSelector
                        htmlFor="female"
                        checked={selectedGender === "female"}
                      >
                        <div />
                      </RadioSelector>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={selectedGender === "female"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="female">Feminino</label>                    
                    </RadioGroup>
                  </RadioContainer>
                </div>
              </FormSection>
            </PersonalInfo>
            <Line/>
            <PersonalInfo style={{marginTop:'2rem'}}>
                    <div/>
                      <FormSection>
                        <FormGroup>
                          <label htmlFor="name">Nome da Empresa (Opcional)</label>
                          <input type="text" id="enterprise-name" value={"Axion"} />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="cnpj">Seu Cargo (Opcional)</label>
                          <input type="email" id="email" value={"Funcionário"} />
                        </FormGroup>
                        
                      </FormSection>
                      <FormSection>
                        <div style={{}}/>
                        <FormGroup>
                          <label htmlFor="name">CNPJ (Opcional)</label>
                          <input type="text" id="name" value={"00.000.000/0001-00"} />
                        </FormGroup>
                        <GlobalButton
                          content="Atualizar Cadastro"
                          style={{ width: "100%", marginTop: "2rem" }}
                        />
                      </FormSection>
            </PersonalInfo>
          </Main>
        </Content>
        <NewPasswordModal
          show={showNewPasswordModal}
          onHide={() => setShowNewPasswordModal(false)}
        />
        <BlockAccountModal
          show={showBlockAccountModal}
          onHide={() => setShowBlockAccountModal(false)}
        />
        <NewUserModal
          show={showNewUserModal}
          onHide={() => setShowNewUserModal(false)}
        />
      </RootLayout>
    </main>
  );
}
