import styled from "styled-components";
import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  padding?: string;
  variant?: "primary" | "secondary";
}

export function GlobalButton({ content, variant="primary", ...props }: ButtonProps) {
  return(
    <Container variant={variant} {...props}>
      {content}
    </Container>
  )
}