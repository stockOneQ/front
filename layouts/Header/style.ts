import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  margin: 0 auto;
  width: 144rem;
  padding: 6.5rem 0;
  min-height: 50px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18.4rem;
  padding: 0 7.9rem 0 5.7rem;
`;

export const NavBar = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding-left: 7rem;
  height: 100%;
  white-space: nowrap;
`;

// FIXME: transition: transform 적용 안되는 에러
export const NavItem = styled.li`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #979797;
  transition: all 0.5s ease;

  a {
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }

  &.active {
    color: var(--color-black);
  }

  &:hover {
    p {
      color: var(--color-black);
    }

    div {
      width: 5rem;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    img {
      right: 1.2rem;
      transform: translate(0, -50%);
    }
  }
`;

export const NavArrowBox = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  background-color: var(--color-black);
  border-radius: 8rem;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0; /* 숨기기 */
  pointer-events: none; /* 마우스, 키보드 동작 못 하게 하기 */
  visibility: hidden; /* screen readers로 부터 숨기기 */

  img {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

export const Login = styled.div`
  position: absolute;
  right: 7.2%;
  font-size: 1.4rem;
  color: #aeaeae;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  line-height: 1.6rem;

  &.active {
    color: var(--color-black);
  }

  &:hover {
    p {
      color: var(--color-black);
    }
  }
`;
