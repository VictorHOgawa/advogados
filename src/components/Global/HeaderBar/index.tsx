import { useRouter } from "next/router";
import { Content, LogoImg, MenuIcon, NavToggle, StyledOffcanvas } from "./styles";
import {  useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { LinkComponent } from "../Sidebar/Link";
import { HomeSVG } from "../../../../public/sidebar/home";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import { ProfileSVG } from "../../../../public/sidebar/profile";

export function HeaderBar(){
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
     setShow(!show);
  }
    return (
        <Content>
            <div>
        <NavToggle
          className="d-lg-none"
          onClick={handleClick}
        >
          <MenuIcon src={"/menuIcon.svg"} width={50} height={50} alt="" />
        </NavToggle>
      </div>
      <LogoImg src="/truelifeLogoWhite.svg" width={1000} height={1000} alt="" />
      <div/>
      <StyledOffcanvas show={show} onHide={() => setShow(!show)} responsive="lg">
        <Offcanvas.Body style={{backgroundColor: 'black'}}>
      <div
        style={{
            display: "flex",
          flexDirection: "column",
          gap: "2vh",
          marginTop: "3rem",
          paddingLeft: "2rem",
          paddingBottom: "5rem",
          backgroundColor: 'black'
        }}
      >
        <div>
            <LinkComponent
          name="Home"
          imgSrc={<HomeSVG/>}
          href="/home"
          />
          </div>
        <div>
            <LinkComponent
          name="Financeiro"
          imgSrc={<FinancialSVG />}
          href="/financeiro"
          />
          </div>
        <div>
            <LinkComponent
          name="Novidades"
          imgSrc={<NotificationSVG />}
          href="/news-central"
          />
          </div>
        <div>
            <LinkComponent
          name="Meu Perfil"
          imgSrc={<ProfileSVG />}
          href="/profile"
          />
          </div>
        </div>
          </Offcanvas.Body>
              </StyledOffcanvas>
        </Content>
    )
}