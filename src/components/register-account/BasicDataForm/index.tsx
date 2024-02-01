import { maskPhone } from "@/utils/masks";
import {
  FormGroup,
  RegisterForm,
  RegisterFormHeader,
  TermsContainer,
} from "./styles";
import { useState } from "react";

export function BasicDataForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados Básicos</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" placeholder="Seu nome" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Digite seu email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="phoneNumber">Telefone</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="Digite seu telefone"
          onChange={(e) => setPhoneNumber(maskPhone(e.target.value))}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Crie uma senha</label>
        <input type="password" placeholder="Crie uma senha segura" />
      </FormGroup>

      <TermsContainer>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          Ao informar meus dados, tenho ciência dos <span>Termos de Uso</span> e
          da <span>Política de Privacidade</span>.
        </label>
      </TermsContainer>
    </RegisterForm>
  );
}
