import { maskCep, maskCpfCnpj, maskPhone } from "@/utils/masks";

interface FormDataProps {
  formData: {
    address: string;
    addressNumber: string;
    province: string;
    postalCode: string;
  };
  setFormData: any;
}

export function RegisterForm3({ formData, setFormData }: FormDataProps) {
  return (
    <div>
      <div className="registerFormHeader flex flex-col items-center mb-8">
        <strong className="text-2xl">Dados Pessoais</strong>
        <span className="text-sm text-gray-80">
          Preencha os campos logo abaixo
        </span>
      </div>

      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="address">
          Endereço
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="text"
          id="address"
          placeholder="Digite seu endereço"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>

      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="addressNumber">
          Número
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          type="number"
          placeholder="Número do seu endereço"
          value={formData.addressNumber}
          onChange={(e) =>
            setFormData({ ...formData, addressNumber: e.target.value })
          }
        />
      </div>
      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="province">
          Bairo
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          id="province"
          type="text"
          placeholder="Bairro"
          value={formData.province}
          onChange={(e) =>
            setFormData({ ...formData, province: e.target.value })
          }
        />
      </div>
      <div className="formGroup flex flex-col mb-4">
        <label className="text-sm font-bold" htmlFor="postalCode">
          Bairo
        </label>
        <input
          className="p-2 border border-gray-40 rounded transition duration-300"
          id="postalCode"
          type="text"
          placeholder="CEP"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData({ ...formData, postalCode: maskCep(e.target.value) })
          }
          maxLength={9}
        />
      </div>
    </div>
  );
}
