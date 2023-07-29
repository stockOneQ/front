import styled from "styled-components";

export const SideMenuBar = styled.nav`
  height: 100%;
  display: flex;
  position: relative;
`;

export const SideMenuBarList = styled.ul`
  width: 18.4rem;
  height: 95%;
  border-right: 1px solid var(--color-gray);
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
  top: 17%;
  left: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
