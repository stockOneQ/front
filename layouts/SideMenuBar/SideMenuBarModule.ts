import styled from "styled-components";

export const SideMenuBar = styled.nav`
  width: 22.8rem;
  height: 90vh;
  display: flex;
  border-right: 1px solid #e1e1e1;
  position: relative;
`;

export const SideMenuBarList = styled.ul`
  width: 18.4rem;
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
  top: 17%;
  left: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
