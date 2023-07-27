import Image from 'next/image';
import searchIcon from 'public/assets/icons/community/searchIcBlack.svg';
import rightArrow from 'public/assets/icons/community/rightArrowIc.svg';
import StockList from './StockList';
import styled from 'styled-components';
import useScroll from 'hooks/useScroll';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    stockName: "냉동 딸기",
    amount: 3,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "바닐라 아이스크림",
    amount: 5,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "원두",
    amount: 6,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "딸기 시럽",
    amount: 1,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "망고 시럽",
    amount: 1,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "우유",
    amount: 1,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "냉동 딸기",
    amount: 3,
    img: '/assets/imgs/community/myProfile.png'
  },
  {
    stockName: "냉동 딸기",
    amount: 3,
    img: '/assets/imgs/community/myProfile.png'
  },
]

const SELECT_DATA = ['냉동', '냉장', '상온'];

const NAV_DATA = [
  {
    label: '전체',
    amount: 9
  },
  {
    label: '유통기한 지난 재료',
    amount: 3
  },
  {
    label: '유통기한 임박 재료',
    amount: 2
  },
  {
    label: '부족한 재료',
    amount: 1
  }
]

const FriendStockBox = styled.div`
  padding: 3.7rem 11.1rem 0 3rem;
  position: relative;
`

const StockLabelBox = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: end;
  gap: 1.4rem;
`

interface IStockLabelParagraphProps {
  selected: string;
}

const StockLabelParagraph = styled.p<IStockLabelParagraphProps>`
  /* TODO:  왜 position: relative를 적용해 줘야 하는지 공부하기 */
  position: relative;
  /* background-image: linear-gradient(262deg, #F9E499 0%, #F2B2CF 32.29%, #B1B0D7 66.67%, #55ABD7 100%); */
  background-image: ${({ selected }) => {
    if (selected === '냉동') return `url('/assets/icons/community/bg-img/selectLabel1Bg.svg')`;
    else if (selected === '냉장') return `url('/assets/icons/community/bg-img/selectLabel2Bg.svg')`;
    else if (selected === '상온') return `url('/assets/icons/community/bg-img/selectLabel3Bg.svg')`;
  }};
  width: 7.1rem;
  height: 6.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem .5rem 2rem 2rem;

  color: var(--color-white);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  z-index: 9999;
`

interface IStockLabelSelectBox {
  isSelect: boolean;
}

const StockLabelSelectBox = styled.div<IStockLabelSelectBox>`
  display: flex;
  align-items: center;
  gap: .7rem;

  img {
    transform: rotate(0deg);
    margin-bottom: ${({ isSelect }) => (isSelect ? '0' : '1.3rem')};
  }

  .is-select {
    transform: rotate(180deg);
  }
`

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
    color: #AEAEAE;
    cursor: pointer;
  }

  div:not(:last-child) {
    height: 2.2rem;
    border-right: 1px solid var(--color-gray);
  }
`

const SearchStockBox = styled.div`
  width: 27.4rem;
  height: 2.8rem;
  padding: .6rem 1.7rem;
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

  div {
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
`

const FriendStockList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
`
interface IStockDataBoxProps {
  hideScroll: boolean;
}

const StockDataBox = styled.div<IStockDataBoxProps>`
  margin-top: 1.7rem;
  margin-left: .1rem;
  width: 61.9rem;
  height: 60.8rem;
  overflow-y: auto;
  padding-right: ${props => props.hideScroll ? '7.1rem' : '5.6rem'};

  &::-webkit-scrollbar {
    display: ${props => props.hideScroll ? 'none' : 'inline-block'};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: .3rem solid transparent;
    height: 4rem;
    border-radius: .8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
    background-color: #eee;
  }
`

const StockDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  margin-right: 7.7rem;
`

/** 친구 재고 페이지 */
const FriendStock = () => {
  const [selectOption, setSelectOption] = useState(false); // 냉동 냉장 상온 선택창 열기
  const [selectState, setSelectState] = useState(SELECT_DATA); // 냉동 냉장 상온 중 하나 고르기
  const [isSelect, setIsSelect] = useState(false); // 선택된 항목 css 주기 위해
  const [activeNav, setActiveNav] = useState(0);
  console.log(activeNav);
  
  const selectLabelHandler = (idx: string) => {
    if (idx === '냉동') setSelectState(['냉동', '냉장', '상온']);
    else if (idx === '냉장') setSelectState(['냉장', '냉동', '상온']);
    else setSelectState(['상온', '냉장', '냉동']);
  }

  const openSelectLabelHandler = () => {
    setSelectOption(prev => !prev);
    setIsSelect(prev => !prev);
  }

  const { hideScroll, scrollHandler } = useScroll();

  return (
    <FriendStockBox>
      <StockLabelBox>
        <div>
          <StockLabelParagraph selected={selectState[0]}>{selectState[0]}</StockLabelParagraph>
        </div>
        <StockLabelSelectBox isSelect={isSelect}>
          {selectOption && (
            <StockLabelOthersBox>
              {selectState.map((item) => (
                <>
                  <p onClick={() => { selectLabelHandler(item) }}>{item}</p>
                  <div>&nbsp;</div>
                </>
              ))}
            </StockLabelOthersBox>
          )}
          <button className={`${isSelect ? 'is-select' : ''}`} onClick={openSelectLabelHandler}>
            <Image src={rightArrow} alt="right_arrow" width={6} height={10} />
          </button>
        </StockLabelSelectBox>
      </StockLabelBox>
      <SearchStockBox>
        <input type="text" />
        <button>
          <Image src={searchIcon} alt="my_page_icon" width={16} height={16} />
        </button>
        <div>제품명</div>
      </SearchStockBox>
      <div>
        <nav>
          <FriendStockList>
            {NAV_DATA.map(({ label, amount }, idx) => (
              <FriendStockItem key={idx} className={`${activeNav === idx ? 'active-nav' : ''}`} onClick={() => { setActiveNav(idx) }}>{label} {amount}</FriendStockItem>
            ))}
          </FriendStockList>
        </nav>
        <StockDataBox hideScroll={hideScroll} onScroll={scrollHandler}>
          <StockDataList>
            {DUMMY_DATA.map(({ stockName, amount, img }, idx) => (
              <StockList key={idx} stockName={stockName} amount={amount} img={img} />
            ))}
          </StockDataList>

        </StockDataBox>
      </div>
    </FriendStockBox>
  );
};

export default FriendStock;