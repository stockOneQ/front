//ingredients/style
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 30px;
    opacity: 1;
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  margin: 20px auto;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  span {
    margin-left: 8px;
  }
`;

interface MainSectionProps {
  hideScroll?: boolean;
}

export const MainSection = styled.div<MainSectionProps>`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: ${props => (props.hideScroll ? 'none' : 'inline-block')};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 0.3rem solid transparent;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
    background-color: #eee;
  }
`;

export const DropBoxContainer = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;

export const Input = styled.input`
  color: inherit;
  border: none;
  padding: 0px 0 0 27%;
  font: inherit;
  width: 181px;
  cursor: pointer;
  outline: inherit;
  height: 35px;
  background: white;
  border-radius: 43px;
  position: absolute;
  right: 90%;
`;

export const MainItem = styled.div`
  width: 180px;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 180px;
  margin: 1% 5% 5% 0%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin-top: 40px;
  text-align: center;
  color: #979797;
`;

export const MainItemImg = styled.div`
  margin-top: 11px;

  img {
    border-radius: 16px;
  }
`;

export const SeachBox = styled.div`
  display: flex;
`;

export const SearchPro = styled.div`
  font-size: 18px;
  background-color: black;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
  z-index: 1;
  align-items: center;
  justify-content: center;
  border-radius: 43px;
  width: 92px;
  height: 35px;
  right: 188%;
  position: absolute;
  color: white;
`;

export const StyledLinkLack = styled.button<{ isactive: boolean }>`
  display: flex;
  width: 184px;
  height: 35px;
  margin: 0 0 0 2%;
  border-radius: 100px;
  color: ${props => (props.isactive ? '#ffffff' : '#e0e0e0')};
  font-size: 18px;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => (props.isactive ? '#000000' : '')};
  border: none;
  transition: background-color 0.3s ease-in-out; /* 배경색 변경 트랜지션 */

  &:hover {
    background-color: ${props => (props.isactive ? '#000000' : '#f0f0f0')};
  }
`;

export const StyledLinkTotal = styled.button<{ isactive: boolean }>`
  display: flex;
  width: 112px;
  height: 35px;
  margin: 0 2% 0 0%;
  border-radius: 100px;
  color: ${props => (props.isactive ? '#ffffff' : '#e0e0e0')};
  font-size: 18px;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => (props.isactive ? '#000000' : '')};
  border: none;
  transition: background-color 0.3s ease-in-out; /* 배경색 변경 트랜지션 */

  &:hover {
    background-color: ${props => (props.isactive ? '#000000' : '#f0f0f0')};
  }
`;

export const StyledLink = styled.button<{ isactive: boolean }>`
  display: flex;
  width: 234px;
  height: 35px;
  margin: 0 2% 0 0%;
  border-radius: 100px;
  color: ${props => (props.isactive ? '#ffffff' : '#e0e0e0')};
  font-size: 18px;
  font-weight: 600;
  line-height: 35px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => (props.isactive ? '#000000' : '')};
  border: none;
  transition: background-color 0.3s ease-in-out; /* 배경색 변경 트랜지션 */

  &:hover {
    background-color: ${props => (props.isactive ? '#000000' : '#f0f0f0')};
  }
`;

export const ActionButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  gap: 8px;
  color: white;
  left: 84%;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;

export const Add = styled.div`
  width: 30px;
  height: 30px;
  background: #000000;
  color: white;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

export const NavBar = styled.div`
  display: flex;
  width: 90%;
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SearchMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SerchSection = styled.div`
  position: relative;
  font-size: 13px;
  border-radius: 20px;
  display: flex;
  margin: 0px 42px 0 20px;

  img {
    top: 26%;
    left: 24%;
    position: relative;
  }
`;

export const CountValue = styled.p`
  font-size: 13px;
  left: 10px;
  position: relative;
`;

export const SearchByBox = styled.div`
  width: 16.3rem;
  height: 20.3rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  line-height: normal;
`;

export const SelectedValueButton = styled.button`
  width: 163px;
  height: 35px;
  margin: 0 3% 0 0;
  position: relative;
  background-color: var(--color-black);
  border-radius: 3rem;
  z-index: 1000;
  margin-left: 10%;

  img {
    position: absolute;
    top: 2.1rem;
    right: 3rem;
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.5s linear;
  }

  p {
    font-weight: 600;
    z-index: 100;
    font-size: 13px;
    color: var(--color-white);
  }

  .categoryToggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform 0.5s linear;
  }
`;

export const OptionList = styled.ul`
  width: 16.3rem;
  background-color: var(--color-white);
  color: #979797;
  font-weight: 500;
  padding-top: 4.15rem;
  border: 1px solid #f7f7f9;
  z-index: 0;
  margin-top: -22.5px;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;

  li {
    color: #979797;
    font-weight: 500;
    padding: 1.8rem;
    border-radius: 3rem;
    cursor: pointer;

    &:hover {
      color: var(--color-black);
      background-color: #f7f7f9;
    }
  }
`;
