import { useRouter } from "next/router";
import { RegisterHeader } from "./styles";

export function RegisterAccountHeader() {
  const router = useRouter();

  return (
    <RegisterHeader>
      <img src="/truelifeLogo.svg" alt="" />
      <button onClick={() => router.push("/login")}>
        Já é cliente? Acessar
      </button>
    </RegisterHeader>
  );
}
