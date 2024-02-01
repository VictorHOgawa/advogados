import px2vw from "@/utils/size";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";

interface ButtonProps {
  background: string;
  color: string;
  width: string | number;
  height: string | number;
  hover: string;
  fontSize: number;
}

export const Container = styled(Button)<ButtonProps>`
  background: ${(props) =>
    props.background ? props.background : props.background};
  color: ${({ color, theme }) => (color ? color : theme.color.gray_10)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  transition: 0.1s;
  font-size: ${(props) =>
    props.fontSize ? `${px2vw(props.fontSize, 320)}` : `${px2vw(15, 320)}`};

  &:not(:disabled):hover {
    background: ${(props) => (props.hover ? props.hover : props.background)};
    color: ${({ color, theme }) => (color ? color : theme.color.gray_10)};
    scale: 1.02;
  }
  border: 0;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: ${(props) =>
      props.fontSize ? `${px2vw(props.fontSize, 768)}` : `${px2vw(15, 768)}`};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) =>
      props.fontSize ? `${px2vw(props.fontSize, 1024)}` : `${px2vw(12, 1024)}`};
  }
`;
