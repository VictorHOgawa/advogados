import Image from "next/image";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="Header absolute w-full z-10 lg:justify-around items-center bg-primary_color flex px-4 py-2 h-20">
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
            src="/Logo.svg"
            alt=""
            width={250}
            height={200}
          />
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-primary_color"></Offcanvas.Body>
      </Offcanvas>
      <Image
        className="Logo h-2/3"
        src="/Logo.svg"
        alt=""
        width={250}
        height={200}
      />
      <div className="hidden lg:flex h-20">
        <label
          htmlFor="search"
          className="bg-secondary_neutral_color opacity-50 flex gap-4 w-96 items-center justify-center rounded-3xl h-1/2 self-center"
        >
          <Image
            className="Icon"
            src="/Icons/magnifyingGlass.svg"
            alt=""
            width={15}
            height={15}
          />
          <input
            className="Input w-5/6 outline-none bg-secondary_neutral_color"
            type="text"
            name="search"
            placeholder="Pesquise Seu Interesse..."
          />
        </label>
      </div>

      <div className="lg:flex hidden gap-4 items-center">
        <button className="Instagram flex items-center justify-center bg-secondary_color p-2 w-10 h-10 rounded-xl">
          <Image
            className="Icon w-full h-full"
            src="/Icons/instagramIcon.svg"
            alt=""
            width={50}
            height={50}
          />
        </button>
        <button className="Button font font-semibold bg-secondary_color rounded-3xl h-2/3 flex items-center justify-center gap-2 p-2 w-48">
          <Image
            className="Icon"
            src="/Icons/magnifyingGlass.svg"
            alt=""
            width={15}
            height={15}
          />
          Default
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
