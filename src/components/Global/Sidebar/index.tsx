import { Dashboard } from "../../../../public/sidebar/dashboard";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import { ProfileSVG } from "../../../../public/sidebar/profile";
import { HomeSVG } from "../../../../public/sidebar/home";
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
    <nav className="hidden position-sticky top-0 bg-black text-white w-72 lg:flex">
      <div className="position-fixed top-0 w-72">
        <div className="flex justify-center align-center">
          <img
            src="/sidebar/axion-white.svg"
            alt=""
            className="w-44 mt-12 mx-auto"
          />
        </div>
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
            imgSrc={<HomeSVG />}
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
        </div>
      </div>
    </nav>
  );
}
