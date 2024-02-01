import Image from "next/image";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Content = styled.div`
    display:  flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 950px) {
        display:none;
    }
`;
export const LogoImg = styled(Image)`
    width: 17.5rem;
    height: 5rem;
`;
export const NavToggle = styled(Navbar.Toggle)`

  background-color: transparent;
`;

export const MenuIcon = styled(Image)`
  width: 5rem;
  height: 2rem;
  background-color: transparent;
`;

export const NavIcons = styled(Image)`

  background-color: transparent;
`;
export const StyledOffcanvas = styled(Navbar.Offcanvas)`
  background-color: ${({theme}) => theme.color.primary_80};
  max-width: 16rem;
  font-size: 1.5rem;
`;