import styled from 'styled-components';

const DataBox = styled.div`
  padding: 0 1.2rem 0.1rem;
`;

interface ISelectSupervisorBoxProps {
  isSelectSupervisor: boolean;
}

const SelectSupervisorBox = styled.div<ISelectSupervisorBoxProps>`
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
  z-index: 2;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;

  color: ${({ isSelectSupervisor }) =>
    isSelectSupervisor ? 'var(--color-white)' : 'var(--color-black)'};
  background-color: ${({ isSelectSupervisor }) =>
    isSelectSupervisor ? 'var(--color-black)' : ''};

  img {
    position: absolute;
    top: 2rem;
    right: 4.1rem;
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
  top: 0;
  border: 1px solid #f7f7f9;
  background-color: var(--color-white);
  border-radius: 2.1rem;

  p {
    width: 25.4rem;
    height: 4.5rem;
    border-radius: 5rem;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface ISupervisorListProps {
  hideScroll: boolean;
}

// FIXME: 스크롤 바 때문에 너비 변경되는 에러
// FIXME: 스크롤 바 css 피그마와 동일하게 변경
const SupervisorList = styled.ul<ISupervisorListProps>`
  width: 25.4rem;
  min-width: 25.4rem;
  max-width: 25.4rem;
  height: 14.9rem;
  overflow: auto;
  padding-top: 1.6rem;

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

const DataNavBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  position: relative;
`;
const HorizontalRule = styled.hr`
  margin: 20px 0;
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
    bottom: -2.3em;
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
  z-index: 1;
  top: 0;
  right: 27.3rem;
`;

const Label = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  .label__1 {
    width: 9.2rem;
    margin-left: 4%;
  }

  .label__2 {
    /* padding-left: 1.7rem; */
    /* margin-left: -19px; */
    /* width: 100%; */
    position: absolute;
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
const LabelBox = styled.div`
  border-bottom: 1px solid var(--color-gray);
  margin-bottom: 0.1rem;
`;

const PostTitle = styled.p`
  margin-left: 4%;
`;

const Fna = styled.div`
  display: flex;
  /* align-items: center; */
  /* gap: 7rem; */
  justify-content: flex-start;
`;

const PostId = styled.p`
  margin-left: 3%;
`;

const PostDate = styled.p`
  margin-left: 64%;
  color: gray;
  position: relative;
`;

const PostAuthor = styled.p`
  margin-left: 9%;
  position: relative;
`;

const Answer = styled.div`
  display: none;
  margin-top: 70px;
  position: absolute;
  width: 46%;

  &.show {
    display: block;
  }
`;

const DataListBox = styled(Label)`
  padding: 5.3rem 0;
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
    position: absolute;
  }

  .label__3 {
    color: #979797;
  }
`;

const FnaBoard = styled.div`
  display: flex;

  p {
    font-size: 15px;
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
    /* justify-content: center;
    align-items: center; */
  }

  img:first-child {
    margin-right: auto;
  }

  img:last-child {
    margin-left: auto;
  }

  .pagination__active {
    color: var(--color-white);
    align-items: center;
    justify-content: center;
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
  DataListBox,
  PaginationBox,
  LabelBox,
  HorizontalRule,
  FnaBoard,
  PostAuthor,
  PostDate,
  PostId,
  PostTitle,
  Answer,
  Fna,
};
