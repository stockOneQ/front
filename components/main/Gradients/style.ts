import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
`;

export const MainItem = styled.div`
  width: 180px;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  border-radius: 20px;
  height: 180px;
  margin: 0 3% 0 3%;
  flex-wrap: wrap;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;


export const StyledLink = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 163px;
  height: 35px;
  margin: 0 2% 0 2%;
  padding-left: 10px;
  border-radius: 100px;
  color: ${(props) => (props.isActive ? "#ffffff" : "#e0e0e0")};
  font-size: 13px;
  font-weight: 600;
  
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#000000" : "")};
  border: none; 
`;

export const ActionButtonBox = styled.div`
 
  display: flex;
  justify-content: end;
  align-items: center;
  
  gap: 8px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;

export const Add = styled.a`
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
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SearchMenu = styled.div`
  position: relative;

  display: flex;
  align-items: center;
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
  
 
`

export const SelectedValueButton = styled.button`
  width: 163px;
  height: 35px;
  margin: 0 3% 0 3%;
  position: relative;
  background-color: var(--color-black);
  border-radius: 3rem;
  z-index: 1000;

  img {
    position: absolute;
    top: 2.1rem;
    right: 3rem;
    transform: translateY(-50%) rotate(0deg);
    transition: transform .5s linear;
  }

  p {
    font-weight: 600;
    z-index: 100;
    font-size: 13px;
    color: var(--color-white);
  }

  .categoryToggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform .5s linear;
  }
`

export const OptionList = styled.ul`
  width: 16.3rem;
  background-color: var(--color-white);
  color: #979797;
  font-weight: 500;
  padding-top: 4.15rem;
  border: 1px solid #F7F7F9;
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
      background-color: #F7F7F9;
    }
  }
`