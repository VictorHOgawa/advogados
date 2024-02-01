import { Spinner } from "react-bootstrap";
import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  background: string;
  color?: string;
  hover?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
}

export function GlobalButton2({
  content,
  background,
  color,
  hover,
  disabled = false,
  loading = false,
  width = "10vw",
  height = "5vh",
  fontSize,
  ...rest
}: ButtonProps) {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      hover={hover}
      background={background}
      fontSize={fontSize}
      disabled={disabled}
      {...rest}
      bsPrefix="button"
    >
      {loading ? <Spinner /> : content}
    </Container>
  );
}
