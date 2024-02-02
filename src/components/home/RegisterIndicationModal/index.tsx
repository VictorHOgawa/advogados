import {
  CodeButton,
  Content,
  Form,
  FormGroup,
  FormHeader,
  Line,
  RegisterPartner,
  SearchPartner,
  SuccessModal,
  WithDrawCard,
} from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import { CloseButton } from "@/components/Global/Close";
import { AnalisingModal } from "@/components/Global/Modals/AnalisingModal";
import { AuthPostAPI, IBGEAPI, PostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import { maskCnpj, maskCpfCnpj, maskPhone } from "@/utils/masks";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Select from "react-select";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  getIndications: () => void;
}

export function RegisterIndicationModal({
  show,
  onHide,
  getIndications,
}: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [photoLoading, setPhotoLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [stateList, setStateList] = useState<any>([]);
  const [cityList, setCityList] = useState<any>([]);
  const [newPhoto, setNewPhoto] = useState({
    key: "",
    location: "",
  });
  const [indicationData, setIndicationData] = useState({
    name: "",
    agent_name: "",
    agent_phone_number: "",
    cpfCnpj: "",
    city: {
      id: 0,
      label: "",
      value: "",
    },
    state: {
      id: 0,
      label: "",
      value: "",
    },
    photo_location: "",
    photo_key: "",
  });

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
  }

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setPhotoLoading(true);
    const file = e.target.files?.[0];
    const reader = new FileReader();

    const formData = new FormData();
    if (!file) return;
    formData.append("file", file);
    const uploading = await PostAPI("/upload", formData);
    setNewPhoto(uploading.body.image);

    reader.onload = () => {
      setPhotoLoading(false);
      return setPreviewImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  async function handleIBGEState() {
    const connect = await IBGEAPI(`/estados/?orderBy=nome`);
    const states: any = [];
    for (const key in connect.body) {
      states.push({
        label: connect.body[key].nome,
        value: connect.body[key].sigla,
        id: connect.body[key].id,
      });
    }
    setStateList(states);
  }

  const selectState = (e: any) => {
    setIndicationData({ ...indicationData, state: e });
    handleIBGECity();
  };

  async function handleIBGECity() {
    const connect = await IBGEAPI(
      `/estados/${indicationData.state.id}/municipios?orderBy=name`
    );
    const cities: any = [];
    for (const key in connect.body) {
      cities.push({
        label: connect.body[key].nome,
        value: connect.body[key].nome,
      });
    }
    setCityList(cities);
  }

  async function newIndication() {
    setRegisterLoading(true);
    const connect = await AuthPostAPI("/nominatedCompany", {
      ...indicationData,
      photo_location: newPhoto.location
        ? newPhoto.location
        : "/partnerIcon.svg",
      photo_key: newPhoto.key,
      city: {
        name: indicationData.city.value,
        state: indicationData.state.value,
      },
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setRegisterLoading(false);
    }
    setRegisterLoading(false);
    getIndications();
    return onHide();
  }

  useEffect(() => {
    handleIBGEState();
  }, []);

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        {show && (
          <Content isVisible={isVisible}>
            <CloseButton onHide={onHide} />
            <h1>Cadastre uma Indicação </h1>
            <Line />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FormHeader>
                <div id="imagePreview">
                  {!previewImage &&
                    (photoLoading ? (
                      <div
                        className="d-flex justify-content-center mt-5"
                        style={{
                          backgroundColor: Theme.color.primary_60,
                          padding: "1rem",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="spinner" />
                      </div>
                    ) : (
                      <p>
                        <strong>Nenhuma imagem selecionada</strong>
                      </p>
                    ))}
                  {previewImage &&
                    (photoLoading ? (
                      <div
                        className="d-flex justify-content-center mt-5"
                        style={{
                          backgroundColor: Theme.color.primary_60,
                          padding: "1rem",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="spinner" />
                      </div>
                    ) : (
                      <Image
                        src={previewImage}
                        width={500}
                        height={500}
                        alt="Imagem Preview"
                        className="object-cover rounded"
                      />
                    ))}
                </div>
                <label
                  htmlFor="toolImage"
                  className="fileLoader border-[1px] rounded p-2 cursor-pointer"
                >
                  Alterar Foto
                </label>
                <input
                  type="file"
                  name="toolImage"
                  id="toolImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                {/* <h1>Cadastre um Parceiro </h1> */}
              </FormHeader>
              <Form style={{ marginTop: "2rem" }}>
                <FormGroup>
                  <label htmlFor="name">Nome da Empresa</label>
                  <input
                    id="name"
                    type="text"
                    value={indicationData.name}
                    onChange={(e) =>
                      setIndicationData({
                        ...indicationData,
                        name: e.target.value,
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="agent_name">Nome do Representante</label>
                  <input
                    id="agent_name"
                    type="text"
                    value={indicationData.agent_name}
                    onChange={(e) =>
                      setIndicationData({
                        ...indicationData,
                        agent_name: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </Form>
            </div>
            <Form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <FormGroup style={{ display: "flex", width: "100%" }}>
                  <label htmlFor="agent_phone_number">
                    Telefone de contato
                  </label>
                  <input
                    id="agent_phone_number"
                    type="text"
                    value={indicationData.agent_phone_number}
                    onChange={(e) =>
                      setIndicationData({
                        ...indicationData,
                        agent_phone_number: maskPhone(e.target.value),
                      })
                    }
                    maxLength={14}
                    style={{ width: "20rem" }}
                  />
                </FormGroup>
                <FormGroup style={{ display: "flex", width: "100%" }}>
                  <label htmlFor="cpfCnpj">CNPJ da Empresa</label>
                  <input
                    id="cpfCnpj"
                    type="text"
                    value={indicationData.cpfCnpj}
                    onChange={(e) =>
                      setIndicationData({
                        ...indicationData,
                        cpfCnpj: maskCnpj(e.target.value),
                      })
                    }
                    maxLength={18}
                    style={{ width: "20rem", marginRight: "3rem" }}
                  />
                </FormGroup>
              </div>
              <div className="flex w-full justify-evenly">
                <Select
                  name="state"
                  options={stateList}
                  onChange={(e) => selectState(e)}
                  placeholder="Estado"
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
                <Select
                  name="city"
                  onFocus={() => handleIBGECity()}
                  options={cityList}
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
                  onChange={(e: any) =>
                    setIndicationData({ ...indicationData, city: e })
                  }
                  placeholder="Cidade"
                />
              </div>
              <RegisterPartner
                disabled={registerLoading}
                onClick={newIndication}
              >
                {registerLoading ? (
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
