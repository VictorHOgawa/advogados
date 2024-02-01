import { GlobalButton } from "@/components/Global/Button";
import { Messages } from "@/components/Global/Messages";
import { Footer } from "@/components/register-account/Footer";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ArtSection,
  AxionLogo,
  Container,
  FormGroup,
  GoogleLogin,
  LoginForm,
  LoginFormHeader,
  Main,
  PasswordRecovery,
} from "./styles";
import { PostAPI, refreshToken, token } from "@/lib/axios";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  async function handleLogin() {
    setLoginLoading(true);
    const connect = await PostAPI("/partner/login", {
      email: loginData.email,
      password: loginData.password,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoginLoading(false);
    }
    localStorage.setItem(token, connect.body.token);
    localStorage.setItem(refreshToken, connect.body.refreshToken);
    router.push("/");
    return setLoginLoading(false);
  }

  return (
    <Container>
      <Main>
        <LoginForm>
          <AxionLogo>
            <img src="/truelifeLogo.svg" alt="" />
          </AxionLogo>
          <LoginFormHeader>
            <strong>Faça seu login para utilizar a plataforma.</strong>
            <span>Acesse aqui todas as suas contas pelo painel principal.</span>
          </LoginFormHeader>

          <div
            style={{
              position: "relative",
              margin: "5vh 0",
            }}
          >
            <div style={{ border: "1px solid lightgray" }} />
          </div>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup style={{ position: "relative" }}>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <img src="/eye-slash.svg" alt="" onClick={toggleShowPassword} />
          </FormGroup>
          <PasswordRecovery>
            <button onClick={() => router.push("/recover-password")}>
              Esqueceu sua senha?
            </button>
          </PasswordRecovery>
          <GlobalButton
            content={loginLoading ? "..." : "Entrar"}
            className="loginButton"
            onClick={handleLogin}
            disabled={loginLoading}
          />
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Não tem uma conta?
            <span
              style={{ color: Theme.color.brand_blue, cursor: "pointer" }}
              onClick={() => router.push("/register-account")}
            >
              Cadastre-se
            </span>
          </p>
        </LoginForm>
        <ArtSection>
          <Messages />
        </ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
