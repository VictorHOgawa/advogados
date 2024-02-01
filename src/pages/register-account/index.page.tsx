import { Messages } from "@/components/Global/Messages";
import { AnialiasingFormData } from "@/components/register-account/AnaliasingData";
import { RegisterForm1 } from "@/components/register-account/registerForm1";
import { Footer } from "@/components/register-account/Footer";
import { RegisterAccountHeader } from "@/components/register-account/Header";
import { RegisterForm2 } from "@/components/register-account/registerForm2";
import EnterCode from "@/components/register-account/inviteCode";
import { AuthPostAPI, PostAPI, refreshToken, token } from "@/lib/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { RegisterForm3 } from "@/components/register-account/registerForm3";

export default function RegisterAccount() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    addressNumber: "",
    province: "",
    postalCode: "",
    password: "",
    sex: "",
    mobilePhone: "",
    cpfCnpj: "",
    birth_date: "",
    inviteCode: "",
    companyType: "",
  });

  async function handleRegister() {
    setLoading(true);
    const birthDate = new Date(formData.birth_date).toISOString();
    const connect = await PostAPI("/partner/register", {
      ...formData,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    if (connect.status === 200) {
      localStorage.setItem(token, connect.body.token);
      localStorage.setItem(refreshToken, connect.body.refreshToken);
      router.push("/");
      return setLoading(false);
    }
  }

  const handleNext = () => {
    if (
      step === 1 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 14 &&
      formData.mobilePhone !== "" &&
      terms === true
    ) {
      return setStep(2);
    } else if (
      step === 1 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 18 &&
      formData.mobilePhone !== "" &&
      formData.companyType !== "" &&
      terms === true
    ) {
      return setStep(2);
    }
    if (
      (step === 1 && terms === true && formData.cpfCnpj.length === 14) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === ""
    ) {
      return alert("Preencha todos os campos");
    } else if (
      (step === 1 && terms === true && formData.cpfCnpj.length === 18) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === "" ||
      formData.companyType === ""
    ) {
      return alert("Preencha todos os campos");
    }
    if (step === 1 && terms === false) {
      return alert("Aceite os termos de uso");
    }
    if (
      step === 2 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 14 &&
      formData.mobilePhone !== "" &&
      terms === true &&
      formData.email !== "" &&
      formData.birth_date !== "" &&
      formData.password !== "" &&
      formData.sex !== ""
    ) {
      return setStep(3);
    } else if (
      step === 2 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 18 &&
      formData.companyType !== "" &&
      formData.mobilePhone !== "" &&
      terms === true &&
      formData.email !== "" &&
      formData.birth_date !== "" &&
      formData.password !== "" &&
      formData.sex !== ""
    ) {
      return setStep(3);
    }
    if (
      (step === 2 && terms === true && formData.cpfCnpj.length === 14) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === "" ||
      formData.email === "" ||
      formData.birth_date === "" ||
      formData.password === "" ||
      formData.sex === ""
    ) {
      return alert("Preencha todos os campos");
    } else if (
      (step === 2 && terms === true && formData.cpfCnpj.length === 18) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === "" ||
      formData.companyType === "" ||
      formData.email === "" ||
      formData.birth_date === "" ||
      formData.password === "" ||
      formData.sex === ""
    ) {
      return alert("Preencha todos os campos");
    }
    if (step === 2 && terms === false) {
      return alert("Aceite os termos de uso");
    }

    if (
      step === 3 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 14 &&
      formData.mobilePhone !== "" &&
      terms === true &&
      formData.email !== "" &&
      formData.birth_date !== "" &&
      formData.password !== "" &&
      formData.sex !== "" &&
      formData.address !== "" &&
      formData.addressNumber !== "" &&
      formData.province !== "" &&
      formData.postalCode !== ""
    ) {
      return handleRegister();
    } else if (
      step === 3 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.cpfCnpj.length === 18 &&
      formData.companyType !== "" &&
      formData.mobilePhone !== "" &&
      terms === true &&
      formData.email !== "" &&
      formData.birth_date !== "" &&
      formData.password !== "" &&
      formData.sex !== "" &&
      formData.address !== "" &&
      formData.addressNumber !== "" &&
      formData.province !== "" &&
      formData.postalCode !== ""
    ) {
      return handleRegister();
    }
    if (
      (step === 3 && terms === true && formData.cpfCnpj.length === 14) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === "" ||
      formData.email === "" ||
      formData.birth_date === "" ||
      formData.password === "" ||
      formData.sex === "" ||
      formData.address === "" ||
      formData.addressNumber === "" ||
      formData.province === "" ||
      formData.postalCode === ""
    ) {
      return alert("Preencha todos os campos");
    } else if (
      (step === 3 && terms === true && formData.cpfCnpj.length === 18) ||
      formData.name === "" ||
      formData.cpfCnpj === "" ||
      formData.mobilePhone === "" ||
      formData.companyType === "" ||
      formData.email === "" ||
      formData.birth_date === "" ||
      formData.password === "" ||
      formData.sex === "" ||
      formData.address === "" ||
      formData.addressNumber === "" ||
      formData.province === "" ||
      formData.postalCode === ""
    ) {
      return alert("Preencha todos os campos");
    }
    if (step === 3 && terms === false) {
      return alert("Aceite os termos de uso");
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  async function validateCode(code: string) {
    setIsLoading(true);
    if (code.length !== 8) {
      return setIsLoading(false);
    }
    const connect = await AuthPostAPI(
      `/partnerInviteCode/validate/${formData.inviteCode}`,
      {}
    );
    if (connect.status !== 200) {
      alert(connect.body);
      return setIsLoading(false);
    }
    setStep(1);
    setFormData({
      ...formData,
      mobilePhone: connect.body.data.mobilePhone,
      name: connect.body.data.name,
    });
    return setIsLoading(false);
  }

  return (
    <div className="Container min-h-screen relative pb-16">
      <RegisterAccountHeader type="light" />
      <div
        className={`progressBar absolute top-[3.7rem] bg-darkBlueAxion h-1 transition duration-500 ease-in-out ${step === 1 ? "w-[10%]" : step === 2 ? "w-1/2" : step === 3 ? "w-[90%]" : "w-full"}`}
      />
      <main className="mb-0 md:mb-24 flex flex-col w-full justify-around items-center lg:flex-row">
        <div className="formContainer w-[calc(100%-3vw)] lg:w-[50vw] px-[8%]">
          {step === 0 ? (
            <EnterCode
              isLoading={isLoading}
              callback={(code: string) => validateCode(code)}
              code={formData.inviteCode}
              setCode={(code: string) =>
                setFormData({ ...formData, inviteCode: code })
              }
            />
          ) : step === 1 ? (
            <>
              <RegisterForm1
                formData={formData}
                setFormData={setFormData}
                terms={terms}
                setTerms={setTerms}
              />
            </>
          ) : step === 2 ? (
            <RegisterForm2 formData={formData} setFormData={setFormData} />
          ) : (
            <RegisterForm3 formData={formData} setFormData={setFormData} />
          )}

          {step === 1 ? (
            <button
              className="w-full p-3 rounded my-[3vh] border-2 bg-darkBlueAxion border-darkBlueAxion text-white font-bold hover:opacity-85 transition duration-300"
              onClick={handleNext}
            >
              Proximo
            </button>
          ) : (
            <div className="flex gap-4 mt-4">
              <button
                className="w-full p-3 rounded my-[3vh] border-2 bg-transparent border-darkBlueAxion text-darkBlueAxion font-bold hover:opacity-85 transition duration-300"
                onClick={() => setStep(step - 1)}
              >
                Voltar
              </button>
              <button
                className="w-full p-3 rounded my-[3vh] border-2 bg-darkBlueAxion border-darkBlueAxion text-white font-bold hover:opacity-85 transition duration-300"
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" />
                ) : (
                  "Finalizar Cadastro"
                )}
              </button>
            </div>
          )}
        </div>

        <div className="relative self-start bg-[url('/foto.png')] min-h-screen h-full w-full lg:w-[50vw] bg-cover bg-no-repeat bg-top">
          <Messages />
        </div>
      </main>
      <Footer />
    </div>
  );
}
