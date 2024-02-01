import { maskCnpj, maskCpf, maskCpfCnpj, maskPhone } from "@/utils/masks";
import Select from "react-select";
interface FormDataProps {
  formData: {
    name: string;
    cpfCnpj: string;
    mobilePhone: string;
    companyType: string;
  };
  setFormData: any;
  terms: boolean;
  setTerms: any;
}

export function RegisterForm1({
  formData,
  setFormData,
  terms,
  setTerms,
}: FormDataProps) {
  const options = [
    {
      label: "MEI",
      value: "MEI",
    },
    {
      label: "LTDA",
      value: "LIMITED",
    },
    {
      label: "Individual",
      value: "INDIVIDUAL",
    },
    {
      label: "Associação",
      value: "ASSOCIATION",
    },
  ];

  return (
    <div>
      <div className="registerFormHeader flex flex-col items-center mb-8">
        <strong className="text-2xl">Dados Básicos</strong>
        <span className="text-sm text-gray-80">
          Preencha os campos logo abaixo
        </span>
      </div>

      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="name">
          Nome Completo
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="text"
          id="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="cpf">
          Seu CPF/CNPJ
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="text"
          id="cpfCnpj"
          placeholder="Digite seu CPF/CNPJ"
          maxLength={18}
          value={formData.cpfCnpj}
          onChange={(e) =>
            setFormData({ ...formData, cpfCnpj: maskCpfCnpj(e.target.value) })
          }
        />
      </div>
      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="mobilePhone">
          Celular
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="text"
          id="mobilePhone"
          placeholder="Digite seu número"
          maxLength={14}
          value={formData.mobilePhone}
          onChange={(e) =>
            setFormData({ ...formData, mobilePhone: maskPhone(e.target.value) })
          }
        />
      </div>
      {formData.cpfCnpj.length > 14 && (
        <div className="formGroup flex flex-col mb-4">
          <label className="text-sm font-bold" htmlFor="email">
            Tipo de CNPJ
          </label>
          <Select
            name="CnpjType"
            options={options}
            onChange={(e) =>
              setFormData({ ...formData, companyType: e?.value })
            }
            placeholder="Selecione..."
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
      )}
      {/* <div className="formGroup flex flex-col mb-4">
      <label className="text-sm font-bold" htmlFor="phoneNumber">
          Telefone
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="text"
          id="phoneNumber"
          maxLength={14}
          value={formData.mobilePhone}
          placeholder="Digite seu telefone"
          onChange={(e) =>
            setFormData({ ...formData, mobilePhone: maskPhone(e.target.value) })
          }
        />
      </div>
      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="password">
          Crie uma senha
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="password"
          placeholder="Crie uma senha segura"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div> */}

      <div className="termsContainer flex gap-1 items-center text-sm">
        <input
          type="checkbox"
          id="terms"
          checked={terms}
          onChange={() => setTerms(!terms)}
        />
        <label htmlFor="terms">
          Ao informar meus dados, tenho ciência dos{" "}
          <span className="text-darkBlueAxion cursor-pointer transition duration-300 hover:text-purpleAxion">
            Termos de Uso
          </span>{" "}
          e da{" "}
          <span className="text-darkBlueAxion cursor-pointer transition duration-300 hover:text-purpleAxion">
            Política de Privacidade
          </span>
          .
        </label>
      </div>
    </div>
  );
}
