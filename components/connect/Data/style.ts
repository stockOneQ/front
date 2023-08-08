import styled from 'styled-components';

const DataBox = styled.div`
  padding: 0 1.2rem 0.1rem;
`;

interface ISelectSupervisorBoxProps {
  isSelectSupervisor: boolean;
}

const SelectSupervisorBox = styled.div<ISelectSupervisorBoxProps>`
  .haha {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25.4rem;
    height: 4.5rem;
    margin: 7.3rem auto 8.5rem;
    border-radius: 5rem;
    position: relative;
    cursor: pointer;
    z-index: 9;

    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;

    color: ${({ isSelectSupervisor }) =>
      isSelectSupervisor ? 'var(--color-white)' : 'var(--color-black)'};
    background-color: ${({ isSelectSupervisor }) =>
      isSelectSupervisor ? 'var(--color-black)' : ''};
  }

  img {
    position: absolute;
    top: 22.3rem;
    left: 88.7rem;
    z-index: 10;
    filter: ${({ isSelectSupervisor }) =>
      isSelectSupervisor
        ? `invert(94%) sepia(75%) saturate(0%) hue-rotate(296deg)
        brightness(107%) contrast(100%)`
        : ``};
    transform: ${({ isSelectSupervisor }) =>
      isSelectSupervisor ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.5s ease;
  }
`;

const SupervisorDropDownBox = styled.div`
  width: 25.4rem;
  height: 19.6rem;
  position: absolute;
  top: 20.4rem;
  left: 68.5rem;
  padding-top: 6.3rem;
  border: 1px solid #f7f7f9;
  background-color: var(--color-white);
  border-radius: 2.1rem;
  z-index: 1;
`;

const SupervisorList = styled.ul`
  /* margin-top: 10.8rem; */
  height: 13.5rem;
  overflow: auto;

  color: #979797;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
  border-radius: 2.1rem;

  li {
    height: 4.5rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:hover {
    color: var(--color-black);
    background-color: #f7f7f9;
  }
`;

const DataNavBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-gray);
  position: relative;
`;

interface IDataNavProps {
  activeNum: number;
}

const DataNav = styled.nav<IDataNavProps>`
  color: #979797;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    width: 9.2rem;
    cursor: pointer;
    position: relative;

    &:not(:last-child) {
      margin-right: 6rem;
    }
  }

  li:hover {
    color: var(--color-black);
  }

  li::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.3rem;
    left: 0;
    bottom: -2.9rem;
    background-color: var(--color-black);
    transition: all 0.3s ease-out;
  }

  li:hover::after {
    width: 100%;
  }

  .active {
    color: var(--color-black);
  }

  .active::after {
    content: '';
    width: 100%;
  }
`;

const DataNavInputBox = styled.div`
  margin-left: auto;
  display: flex;

  input {
    width: 43.6rem;
    height: 3.5rem;
    background-color: var(--color-white);
    margin-left: -16.3rem;
    padding-left: 18.3rem;
    border-radius: 10rem;
  }
`;

const DataDropDownBox = styled.div`
  position: absolute;
  top: 0;
  right: 27.3rem;
`;

const Label = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  text-align: center;

  .label__1 {
    width: 9.2rem;
  }

  .label__2 {
    padding-left: 1.7rem;
  }

  .label__3 {
    margin-left: auto;
    width: 12.7rem;
  }

  .label__4 {
    padding: 0 5.5rem 0 3.6rem;
  }

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`;

const LabelBox = styled(Label)`
  border-bottom: 1px solid var(--color-gray);
  margin-bottom: 0.1rem;
`;

const DataListBox = styled(Label)`
  padding: 3.3rem 0;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f9;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .label__1 {
    font-weight: 600;
  }

  .label__2 {
  }

  .label__3 {
    color: #979797;
  }
`;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 13rem auto;
  width: 42.1rem;

  color: var(--color-black);
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: normal;

  p,
  img {
    cursor: pointer;
  }

  p {
    width: 5rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img:first-child {
    margin-right: auto;
  }

  img:last-child {
    margin-left: auto;
  }

  .pagination__active {
    color: var(--color-white);
    font-size: 2.2rem;
    background-color: var(--color-black);
    border-radius: 10rem;
  }
`;

export {
  DataBox,
  SelectSupervisorBox,
  SupervisorDropDownBox,
  SupervisorList,
  DataNavBox,
  DataNav,
  DataNavInputBox,
  DataDropDownBox,
  LabelBox,
  DataListBox,
  PaginationBox,
};
