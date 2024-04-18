import Image from "next/image";

export function Footer() {
  return (
    <footer className="Footer relative w-full h-80 flex items-center justify-center bg-primary_color">
      <Image
        src="/global/footerTexture.png"
        alt=""
        width={1920}
        height={400}
        className="w-full h-full object-cover absolute opacity-10"
      />
      <Image
        className="Logo h-full"
        src="/global/fullLogoWhite.svg"
        alt=""
        width={500}
        height={200}
      />
    </footer>
  );
}
