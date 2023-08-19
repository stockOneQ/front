import styled from 'styled-components';

const FriendStockBox = styled.div`
  padding: 3.7rem 11.1rem 0 3rem;
  position: relative;
`;

const StockLabelBox = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: end;
  gap: 1.4rem;
`;

interface IStockLabelParagraphProps {
  selected: string;
}

const StockLabelParagraph = styled.p<IStockLabelParagraphProps>`
  /* TODO:  왜 position: relative를 적용해 줘야 하는지 공부하기 */
  position: relative;
  /* background-image: linear-gradient(262deg, #F9E499 0%, #F2B2CF 32.29%, #B1B0D7 66.67%, #55ABD7 100%); */
  background-image: ${({ selected }) => {
    if (selected === '냉동')
      return `url('/assets/imgs/community/bg-img/selectLabel1Bg.svg')`;
    else if (selected === '냉장')
      return `url('/assets/imgs/community/bg-img/selectLabel2Bg.svg')`;
    else if (selected === '상온')
      return `url('/assets/imgs/community/bg-img/selectLabel3Bg.svg')`;
  }};
  width: 7.1rem;
  height: 6.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 2rem 2rem;

  color: var(--color-white);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  z-index: 9999;
`;

interface IStockLabelSelectBox {
  isSelect: boolean;
}

const StockLabelSelectBox = styled.div<IStockLabelSelectBox>`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  img {
    transform: rotate(0deg);
    margin-bottom: ${({ isSelect }) => (isSelect ? '0' : '1.3rem')};
  }

  .is-select {
    transform: rotate(180deg);
  }
`;

const StockLabelOthersBox = styled.div`
  background-color: var(--color-white);
  display: flex;
  justify-content: end;
  align-items: center;
  width: 21.5rem;
  height: 4.4rem;
  /* border: 1px solid var(--color-gray); */
  outline: 1px solid var(--color-gray);
  margin-left: -8.5rem;
  border-radius: 2rem;
  z-index: 1;

  p {
    width: 6.8rem;
    color: var(--color-gray);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: normal;
    padding: 1rem 1.8rem;
    z-index: 1;
  }

  p:hover {
    color: #aeaeae;
    cursor: pointer;
  }

  div:not(:last-child) {
    height: 2.2rem;
    border-right: 1px solid var(--color-gray);
  }
`;

const SearchStockBox = styled.div`
  width: 27.4rem;
  height: 2.8rem;
  padding: 0.6rem 1.7rem;
  border-radius: 4.3rem;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-bottom: 2rem;

  input {
    margin-left: 6.6rem;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 7.2rem;
    height: 2.6rem;
    border-radius: 4.3rem;
    background: var(--color-black);

    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const FriendStockList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FriendStockItem = styled.li`
  min-width: 7.1rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  cursor: pointer;

  color: #737373;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: normal;

  &.active-nav {
    border-radius: 2rem;
    background: #171717;
    color: var(--color-white);
  }
`;
interface IStockDataBoxProps {
  hideScroll: boolean;
}

const StockDataBox = styled.div<IStockDataBoxProps>`
  margin-top: 1.7rem;
  margin-left: 0.1rem;
  width: 61.9rem;
  height: 60.8rem;
  overflow-y: auto;
  padding-right: ${props => (props.hideScroll ? '7.1rem' : '5.6rem')};

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

const StockDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  margin-right: 7.7rem;
`;

const StockNoDataParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.6rem;
  color: #979797;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 2rem;
`;

export {
  FriendStockBox,
  StockLabelBox,
  StockLabelParagraph,
  StockLabelSelectBox,
  StockLabelOthersBox,
  SearchStockBox,
  FriendStockList,
  FriendStockItem,
  StockDataBox,
  StockDataList,
  StockNoDataParagraph,
};
