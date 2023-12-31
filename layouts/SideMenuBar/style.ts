import styled from 'styled-components';

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
  padding-top: 16.4rem;
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

interface ILogoBoxProps {
  sideBarIdx: number;
}
export const LogoBox = styled.div<ILogoBoxProps>`
  top: ${({ sideBarIdx }) =>
    sideBarIdx === 0 ? '26.3rem' : sideBarIdx === 1 ? '37.1rem' : '47.9rem'};
  right: 0;
  transform: translate(50%, -50%);
  position: absolute;
  transition: all 0.7s ease;
`;
