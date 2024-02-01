import Theme from "@/styles/themes";
import styled from "styled-components";

interface ButtonProps {
  padding?: string;
  variant: "primary" | "secondary";
}

export const Container = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) => variant === "primary" ? theme.color.darkBlueAxion : "transparent"};
  color: ${({ theme, variant }) => variant === "primary" ? "white" : theme.color.darkBlueAxion};
  border: ${({ variant }) => (variant === "primary" ? "1px solid transparent" : `1px solid ${Theme.color.darkBlueAxion}`)};
  border-radius: 5px;
  padding: ${({ padding }) => (padding ? padding : "1.25rem 1rem")};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, variant }) => variant === "primary" ? theme.color.hoverDarkBlueAxion : theme.color.gray_20};
  }
`;
