import { Dashboard } from "../../../../public/sidebar/dashboard";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import { ProfileSVG } from "../../../../public/sidebar/profile";
import {HomeSVG} from "../../../../public/sidebar/home";
import { SettingsSVG } from "../../../../public/sidebar/settings";
import { UsersSVG } from "../../../../public/sidebar/users";
import { LinkComponent } from "./Link";
import { AxionLogoContainer, SidebarContainer } from "./styles";

interface SidebarProps {
  fadeOut: any;
}

export function Sidebar({ fadeOut }: SidebarProps) {
  // const isHeightAbove991 = useWindowDimensions();

  return (
    <SidebarContainer>
      <AxionLogoContainer>
        <img
          src="/sidebar/trueLife-white.svg"
          alt=""
          style={{ width: "11rem", margin: "3rem auto 0" }}
        />
      </AxionLogoContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          marginTop: "3rem",
          paddingLeft: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Home"
          imgSrc={<HomeSVG/>}
          href="/home"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Financeiro"
          imgSrc={<FinancialSVG />}
          href="/financeiro"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Novidades"
          imgSrc={<NotificationSVG />}
          href="/news-central"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Meu Perfil"
          imgSrc={<ProfileSVG />}
          href="/profile"
        />
        {/* <LinkComponent
          fadeOut={() => fadeOut()}
          name="Ajuda"
          imgSrc={<img src="/sidebar/HelpSVG.svg" alt="" />}
          href="/help"
        /> */}
        {/* <LinkComponent
          fadeOut={() => fadeOut()}
          name="Financeiro"
          imgSrc={<FinancialSVG />}
          href="/financial"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Usuários"
          imgSrc={<UsersSVG />}
          href="/users"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Configurações"
          imgSrc={<SettingsSVG />}
          href="/settings"
        /> */}
      </div>
    </SidebarContainer>
  );
}
