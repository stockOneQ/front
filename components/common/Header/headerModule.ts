import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 18vh;
  min-height: 50px;
`;

export const LogoBox = styled.div`
  padding: 0 5% 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuBar = styled.div`
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
  height: 18px;
`;

export const NavItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: #979797;

  &.active {
    color: #000000;
  }
`;
