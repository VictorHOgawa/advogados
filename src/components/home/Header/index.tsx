import Image from "next/image";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="Header absolute w-full z-10 lg:justify-between items-center bg-white flex px-4 py-2 h-20">
      <Image
        className="Icon lg:hidden"
        src="/Icons/offcanvasIcon.svg"
        alt=""
        width={30}
        height={30}
        onClick={() => setShow(!show)}
      />
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        style={{ width: "50%" }}
      >
        <Offcanvas.Header className="bg-primary_color flex">
          <button
            className="CloseButton text-secondary_neutral_color"
            onClick={() => setShow(false)}
          >
            X
          </button>
          <Image
            className="Logo h-5/6"
            src="/global/fullLogo.svg"
            alt=""
            width={250}
            height={200}
          />
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-primary_color"></Offcanvas.Body>
      </Offcanvas>
      <Image
        className="Logo h-2/3"
        src="/global/fullLogo.svg"
        alt=""
        width={250}
        height={200}
      />
      <div className="hidden lg:flex h-20 text-primary_color font-bold gap-4">
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/selectedIndicator.svg"
            alt=""
            width={30}
            height={15}
          />
          <span>INÍCIO</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>SOBRE</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>ÁREAS</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/unselectedIndicator.svg"
            alt=""
            width={10}
            height={10}
          />
          <span>CASES</span>
        </div>
      </div>

      <div className="lg:flex hidden gap-4 items-center">
        <button className="Instagram flex items-center justify-center bg-secondary_color p-2 w-10 h-10 rounded-sm">
          <Image
            className="Icon w-full h-full"
            src="/Icons/instagramIcon.svg"
            alt=""
            width={40}
            height={40}
          />
        </button>
        <button className="Button font font-semibold bg-secondary_color rounded-sm h-2/3 flex items-center justify-center gap-2 p-2 w-48">
          <Image
            className="Icon"
            src="/Icons/whatsappIcon.svg"
            alt=""
            width={15}
            height={15}
          />
          Fale Conosco
          <Image
            className="Icon"
            src="/Icons/arrowRight.svg"
            alt=""
            width={15}
            height={15}
          />
        </button>
      </div>
    </header>
  );
}
