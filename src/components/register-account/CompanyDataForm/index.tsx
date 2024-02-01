import { useState } from "react";
import { FormGroup, RegisterForm, RegisterFormHeader } from "./styles";
import { maskCnpj } from "@/utils/masks";
import { Dropdown } from "react-bootstrap";
import Theme from "@/styles/themes";
import { Value } from "sass";

export function CompanyDataForm() {
  const [Cnpj, setCnpj] = useState("");
  const [selectedRole, setSelectedRole] = useState("Seu cargo");

  function handleCpfChange(cnpj: string) {
    let cleanedCnpj = Cnpj.replace(/\D/g, "");
    if (cleanedCnpj.length >= 14) {
      return setCnpj(maskCnpj(cleanedCnpj.slice(0, 14)));
    }
    setCnpj(maskCnpj(cnpj));
  }

  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados da Empresa</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="companyName">Nome da Empresa</label>
        <input
          type="text"
          id="companyName"
          placeholder="Digite o nome da empresa"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="cnpj">CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          value={Cnpj}
          onChange={(e) => handleCpfChange(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="role">Seu Cargo</label>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#fff",
              border: "1px solid lightgray",
              color: Theme.color.gray_100,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {selectedRole}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: '100%' }}>
            <Dropdown.Item onClick={() => setSelectedRole("Administrador")}>Administrador</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedRole("Administrador")}>Administrador</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedRole("Administrador")}>Administrador</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </FormGroup>
    </RegisterForm>
  );
}
