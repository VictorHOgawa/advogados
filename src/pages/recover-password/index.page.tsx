import { Messages } from "@/components/Global/Messages";
import { Footer } from "@/components/register-account/Footer";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import {
  ArtSection,
  AxionLogo,
  Container,
  FormGroup,
  Guide,
  IframeContainer,
  LoginForm,
  LoginFormHeader,
  Main,
  RecoveryButton,
} from "./styles";

export default function RecoverPassword() {
  const router = useRouter();
  return (
    <Container>
      <Main>
        <LoginForm>
          <AxionLogo>
            <img src="/truelifeLogo.svg" alt="" />
          </AxionLogo>
          <LoginFormHeader>
            <strong>Esqueceu sua senha?</strong>
            <span>Digite seu email e receba um novo acesso por email.</span>
          </LoginFormHeader>

          <FormGroup>
            <label htmlFor="email">Digite o e-mail cadastrado</label>
            <input type="email" />
          </FormGroup>

          <RecoveryButton>Recuperar Senha</RecoveryButton>

          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Lembrou a senha?{" "}
            <span
              onClick={() => {
                router.push("/login");
              }}
              style={{
                textDecoration: "none",
                color: Theme.color.brand_blue,
                cursor: "pointer",
              }}
            >
              Faça o login agora.
            </span>
          </p>

          <Guide>
            <strong>Veja o passo a passo:</strong>
            <span>
              O vídeo abaixo vai te ajudar a resolver em poucos minutos.
            </span>
          </Guide>

          <IframeContainer>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?si=aD2Nlsj93iw4cQgB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </IframeContainer>
        </LoginForm>
        <ArtSection>
          <div>
            <Messages />
          </div>
        </ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
