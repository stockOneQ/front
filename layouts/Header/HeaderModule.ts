import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 2rem;
  margin: 0 auto;
  max-width: 144rem;
  height: 18vh;
  min-height: 50px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5% 0 5%;
`;

export const NavBar = styled.div`
  width: 85%;
  padding: 0% 5%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const NavItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: #979797;

  &.active {
    color: #000000;
  }
`;
