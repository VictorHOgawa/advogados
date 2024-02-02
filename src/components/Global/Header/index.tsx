import Theme from "@/styles/themes";
import { Header } from "./styles";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import Image from "next/image";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { LinkComponent } from "../Sidebar/Link";
import { Dashboard } from "../../../../public/sidebar/dashboard";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { HomeSVG } from "../../../../public/sidebar/home";
import { ProfileSVG } from "../../../../public/sidebar/profile";

interface SidebarProps {
  fadeOut: any;
}

export function HeaderComponent({ fadeOut }: SidebarProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="flex w-full items-center justify-center relative h-16 lg:hidden">
        <button className="absolute left-4 top-1/4 bg-transparent border-0">
          <Image
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            width={40}
            height={40}
            src={"/menuIcon.svg"}
            alt=""
          />
        </button>

        <Image
          width={250}
          height={46}
          src={"/trueLifeLogoWhite.svg"}
          alt={""}
          className="w-52 h-auto self-center"
        />
      </header>

      <Offcanvas
        style={{ backgroundColor: "#111", maxWidth: "15rem" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header
          style={{ marginTop: "1rem" }}
          closeButton
          closeVariant="white"
        >
          <div>
            <Image
              width={250}
              height={46}
              src={"/trueLifeLogoWhite.svg"}
              alt={""}
              className="w-52 h-auto self-center"
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              marginTop: "1em",
              // paddingLeft: "2rem",
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
