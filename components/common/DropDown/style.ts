import styled from 'styled-components'

interface IDropDownProps {
  width: number;
  height: number;
}

interface ISelectedValueButtonProps extends IDropDownProps {
  padding: number;
}

interface ISearchByBoxProps extends IDropDownProps {
  len: number;
  font: number;
}

const SearchByBox = styled.div<ISearchByBoxProps>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height, len }) => `${height * (len + 1) + 1.9}rem`};
  margin-top: ${({ height, len }) => `${(height * (len + 1) + 1.9) / 2 + height + 0.95}rem`};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: ${({ font }) => `${font}rem`};
  line-height: normal;
  
  p {
    font-weight: 600;
    z-index: 100;
    color: var(--color-white);
  }
`

const SelectedValueButton = styled.button<ISelectedValueButtonProps>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  position: relative;
  padding: ${({ padding }) => `${padding}rem 0`};
  background-color: var(--color-black);
  border-radius: 3rem;
  z-index: 1000;

  img {
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%) rotate(0deg);
    transition: transform .5s linear;
  }

  .categoryToggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform .5s linear;
  }
`

interface IOptionListProps {
  padding: number;
  margin: number;
}

const OptionList = styled.ul<IOptionListProps>`
  width: 100%;
  background-color: var(--color-white);
  color: #979797;
  font-weight: 500;
  padding-top: ${({ margin }) => `${margin}rem`};
  border: 1px solid #F7F7F9;
  z-index: 0;
  margin-top: -22.5px;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;

  li {
    color: #979797;
    font-weight: 500;
    padding: ${({ padding }) => `${padding}rem`};
    border-radius: 3rem;
    cursor: pointer;

    &:hover {
      color: var(--color-black);
      background-color: #F7F7F9;
    }
  }
`

export {
  SearchByBox,
  SelectedValueButton,
  OptionList
}