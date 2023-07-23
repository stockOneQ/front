import styled from "styled-components";

interface IDropDownButtonProps {
  width: number;
  height: number;
  font: number;
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
    font-size: ${({ font }) => `${font}rem`};
    font-weight: 600;
    color: var(--color-white);
  }

  img {
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.5s linear;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .categoryToggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform 0.5s linear;
  }
`;

interface IOptionListProps {
  font: number;
}

const OptionList = styled.ul<IOptionListProps>`
  width: 100%;
  background-color: var(--color-white);
  color: #979797;
  font-weight: 500;
  font-size: ${({ font }) => `${font}rem`};
  padding-top: 2.8rem;
  margin-top: -20px;
  border: 1px solid #f7f7f9;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  position: relative;
  z-index: 999;

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

export { SelectedValueButton, OptionList };
