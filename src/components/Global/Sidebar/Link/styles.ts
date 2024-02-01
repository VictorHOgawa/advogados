import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import Theme from "@/styles/themes";

interface LinkProps {
  isActive: boolean;
}

interface IconProps {
  color?: string;
}

export const NavIcons = styled.div<IconProps>`
  width: 1.2rem;
  height: auto;
  color: ${({ color }) => color ? color : "white"};
`;

export const NavLink = styled.div<LinkProps>`
border-radius: 10px;
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.8rem 1rem;
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
  background-color: ${({ isActive }) => (isActive ? "#232323" : "transparent")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0.4")};

  span {
    color: white;
  }

  &:hover {
    background-color: #434343;
    opacity: 1;
  }
`;
