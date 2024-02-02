import { GlobalButton } from "@/components/Global/Button";
import { BlockAccountModal } from "@/components/profile/BlockAccountModal";
import { NewPasswordModal } from "@/components/profile/NewPasswordModal";
import { useEffect, useRef, useState } from "react";
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
import { AuthPutAPI, authGetAPI } from "@/lib/axios";
import { maskCpfCnpj, maskPhone } from "@/utils/masks";

export default function Profile() {
  const [selectedGender, setSelectedGender] = useState("male");
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showBlockAccountModal, setShowBlockAccountModal] = useState(false);
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    mobilePhone: "",
    cpfCnpj: "",
    birth_date: "",
    sex: "",
    photo_location: "",
    photo_key: "",
  });
  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
  };
  const main = useRef(null);
  const content = useRef(null);
  useEffect(() => {
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

  async function getProfile() {
    const connect = await authGetAPI("/partner/profile");
    if (connect.status !== 200) {
      alert(connect.body);
      return;
    }
    return setProfileData(connect.body.profile);
  }

  async function updateProfile() {
    setUpdateLoading(true);
    const connect = await AuthPutAPI("/partner/profile", {
      ...profileData,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setUpdateLoading(false);
    }
    alert("Alterações salvas");
    getProfile();
    return setUpdateLoading(false);
  }

  useEffect(() => {
    getProfile();
  }, []);

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
                <div />
              )}
            </header>
            <PersonalInfo>
              {isWidthGreaterThan700 ? (
                <AvatarContainer>
                  <img
                    src={
                      profileData.photo_location !== null
                        ? profileData.photo_location
                        : "/partnerIcon.svg"
                    }
                    alt=""
                  />
                  <ChangeAvatarButton>
                    <UserEditSVG />
                    Substituir
                  </ChangeAvatarButton>
                </AvatarContainer>
              ) : (
                <AvatarContainer
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={
                        profileData.photo_location !== null
                          ? profileData.photo_location
                          : "/partnerIcon.svg"
                      }
                      alt=""
                    />
                    <ChangeAvatarButton>
                      <UserEditSVG />
                      Substituir
                    </ChangeAvatarButton>
                  </div>
                  <div>
                    <PassWordButton
                      onClick={() => setShowNewPasswordModal(true)}
                    >
                      Trocar Senha
                    </PassWordButton>
                  </div>
                </AvatarContainer>
              )}
              <FormSection>
                <FormGroup>
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={profileData.mobilePhone}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        mobilePhone: maskPhone(e.target.value),
                      })
                    }
                    maxLength={15}
                  />
                </FormGroup>
              </FormSection>
              <FormSection>
                <FormGroup>
                  <label htmlFor="CPF">Seu CPF/CNPJ</label>
                  <input
                    type="text"
                    id="CPF"
                    value={profileData.cpfCnpj}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        cpfCnpj: maskCpfCnpj(e.target.value),
                      })
                    }
                    maxLength={18}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="birthDate">Data de Nascimento</label>
                  <input
                    type="date"
                    id="birthDate"
                    value={profileData.birth_date}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        birth_date: e.target.value,
                      })
                    }
                  />
                </FormGroup>
                <div>
                  <label htmlFor="gender" style={{ marginBottom: "0.75rem" }}>
                    Sexo
                  </label>
                  <RadioContainer>
                    <RadioGroup>
                      <RadioSelector
                        htmlFor="MALE"
                        checked={profileData.sex === "MALE"}
                      >
                        <div />
                      </RadioSelector>
                      <input
                        type="radio"
                        name="gender"
                        id="MALE"
                        value="MALE"
                        checked={profileData.sex === "MALE"}
                        onChange={() => {
                          setProfileData({
                            ...profileData,
                            sex: "MALE",
                          });
                        }}
                      />
                      <label htmlFor="MALE">Masculino</label>
                    </RadioGroup>
                    <RadioGroup>
                      <RadioSelector
                        htmlFor="FEMALE"
                        checked={profileData.sex === "FEMALE"}
                      >
                        <div />
                      </RadioSelector>
                      <input
                        type="radio"
                        name="gender"
                        id="FEMALE"
                        value="FEMALE"
                        checked={profileData.sex === "FEMALE"}
                        onChange={() => {
                          setProfileData({
                            ...profileData,
                            sex: "FEMALE",
                          });
                        }}
                      />
                      <label htmlFor="FEMALE">Feminino</label>
                    </RadioGroup>
                  </RadioContainer>
                </div>
                <GlobalButton
                  content={updateLoading ? "Atualizando..." : "Atualizar"}
                  style={{ width: "100%", marginTop: "2rem" }}
                  onClick={updateProfile}
                  disabled={updateLoading}
                />
              </FormSection>
            </PersonalInfo>
            <Line />
            {/* <PersonalInfo style={{ marginTop: "2rem" }}>
              <div />
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
                <div style={{}} />
                <FormGroup>
                  <label htmlFor="name">CNPJ (Opcional)</label>
                  <input type="text" id="name" value={"00.000.000/0001-00"} />
                </FormGroup>
              </FormSection>
            </PersonalInfo> */}
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
