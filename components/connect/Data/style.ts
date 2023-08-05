import styled from 'styled-components';

const DataBox = styled.div`
  padding: 0 1.2rem 0.1rem;
`;

const SelectSupervisorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 7.3rem 0 9.4rem;
  cursor: pointer;

  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
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
  DataNavBox,
  DataNav,
  DataNavInputBox,
  DataDropDownBox,
  LabelBox,
  DataListBox,
  PaginationBox,
};
