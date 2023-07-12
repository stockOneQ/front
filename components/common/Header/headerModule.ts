import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 15vh;
  min-height: 50px;
  position: relative;
`;

const LogoBox = styled.div`
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
  top: 50%;
  height: 18px;
  transform: translateY(-50%);
  position: absolute;
  display: flex;
`;

const NavLi = styled.li`
  font-size: 18px;
  font-weight: 600;
  top: 40%;
  margin-left: 70%;
  color: #979797;
`;

const LogoImage = styled.img`
  margin-left: 17vw;
  border-radius: 100px;
  user-select: none;
`;
