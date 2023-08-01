import styled from "styled-components";

interface IDropDownButtonProps {
  width: number;
  height: number;
  fontSize: number;
}

const SelectedValueButton = styled.button<IDropDownButtonProps>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  position: relative;
  padding: 0.4rem 0;
  background-color: var(--color-black);
  border-radius: 10rem;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${({ fontSize }) => `${fontSize}rem`};
    font-weight: 600;
    color: var(--color-white);
  }
`;

interface IToggleProps {
  toggleTopSize: number;
}

const ToggleContainer = styled.div<IToggleProps>`
  position: absolute;
  top: ${({ toggleTopSize }) => `${toggleTopSize}%`};
  right: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.5s linear;
  }

  .categoryToggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform 0.5s linear;
  }
`;

interface IOptionListProps {
  width: number;
  fontSize: number;
}

const OptionList = styled.ul<IOptionListProps>`
  z-index: 999;
  
  position: relative;
  width: ${({ width }) => `${width}rem`};
  background-color: var(--color-white);
  color: #979797;

  font-weight: 500;
  font-size: ${({ fontSize }) => `${fontSize}rem`};

  padding-top: 2.8rem;
  margin-top: -20px;

  border: 1px solid #f7f7f9;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;

  li {
    text-align: center;
    color: #979797;
    padding: 1rem;
    border-radius: 2rem;
    cursor: pointer;

    &:hover {
      color: var(--color-black);
      background-color: #f7f7f9;
    }
  }
`;

export { SelectedValueButton, ToggleContainer, OptionList };
