import styled from "styled-components";

export const SidebarContainer = styled.nav`
  background-color: #111;
  color: white;
  width: 17rem;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const AxionLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
