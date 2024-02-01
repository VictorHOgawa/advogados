import { CloseSVG } from "../../../../public/Close";
import { Close } from "./styles";

interface CloseProps {
  onHide: () => void;
}

export function CloseButton({ onHide }: CloseProps) {
  return (
    <Close onClick={onHide}>
      <CloseSVG />
    </Close>
  );
}
