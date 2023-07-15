import styled from "styled-components";

export const SideMenuBar = styled.nav`
  width: 18.4rem;
  height: 75vh;
  display: flex;
  border-right: 1px solid #e1e1e1;
  position: relative;
`;

export const SideMenuBarList = styled.ul`
  width: 100%;
  padding: 2rem;
  text-align: center;
`;

export const SideMenuBarItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: #979797;
  margin-top: 90px;
  list-style: none;

  &.active {
    color: #000000;
  }
`;

export const LogoBox = styled.div`
  top: 30%;
  left: 18.4rem;
  transform: translate(-50%, -50%);
  position: absolute;
`;
