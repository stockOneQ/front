import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcBlack.svg';
import rightArrow from 'public/assets/icons/community/rightArrowIc.svg';
import StockList from './StockList';
import useScroll from 'hooks/useScroll';
import * as S from './style';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    stockName: '냉동 딸기',
    amount: 3,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '바닐라 아이스크림',
    amount: 5,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '원두',
    amount: 6,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '딸기 시럽',
    amount: 1,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '망고 시럽',
    amount: 1,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '우유',
    amount: 1,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '냉동 딸기',
    amount: 3,
    img: '/assets/imgs/community/myProfile.png',
  },
  {
    stockName: '냉동 딸기',
    amount: 3,
    img: '/assets/imgs/community/myProfile.png',
  },
];

const SELECT_DATA = ['냉동', '냉장', '상온'];

const NAV_DATA = [
  {
    label: '전체',
    amount: 9,
  },
  {
    label: '유통기한 지난 재료',
    amount: 3,
  },
  {
    label: '유통기한 임박 재료',
    amount: 2,
  },
  {
    label: '부족한 재료',
    amount: 1,
  },
];

interface IFriendStockProps {
  friendStockList: {
    id: number;
    name: string;
    stockQuant: number;
    image: null;
  }[];
}

/** 친구 재고 페이지 */
const FriendStock = ({ friendStockList }: IFriendStockProps) => {
  const [selectOption, setSelectOption] = useState(false); // 냉동 냉장 상온 선택창 열기
  const [selectState, setSelectState] = useState(SELECT_DATA); // 냉동 냉장 상온 중 하나 고르기
  const [isSelect, setIsSelect] = useState(false); // 선택된 항목 css 주기 위해
  const [activeNav, setActiveNav] = useState(0);
  console.log(activeNav);

  const selectLabelHandler = (idx: string) => {
    if (idx === '냉동') return setSelectState(['냉동', '냉장', '상온']);
    if (idx === '냉장') return setSelectState(['냉장', '냉동', '상온']);
    if (idx === '상온') return setSelectState(['상온', '냉장', '냉동']);
  };

  const openSelectLabelHandler = () => {
    setSelectOption(prev => !prev);
    setIsSelect(prev => !prev);
  };

  const { hideScroll, scrollHandler } = useScroll();

  return (
    <S.FriendStockBox>
      <S.StockLabelBox>
        <div>
          <S.StockLabelParagraph selected={selectState[0]}>
            {selectState[0]}
          </S.StockLabelParagraph>
        </div>
        <S.StockLabelSelectBox isSelect={isSelect}>
          {selectOption && (
            <S.StockLabelOthersBox>
              {selectState.map(item => (
                <>
                  <p
                    onClick={() => {
                      selectLabelHandler(item);
                    }}
                  >
                    {item}
                  </p>
                  <div>&nbsp;</div>
                </>
              ))}
            </S.StockLabelOthersBox>
          )}
          <button
            className={`${isSelect ? 'is-select' : ''}`}
            onClick={openSelectLabelHandler}
          >
            <Image src={rightArrow} alt="right_arrow" width={6} height={10} />
          </button>
        </S.StockLabelSelectBox>
      </S.StockLabelBox>
      <S.SearchStockBox>
        <input type="text" />
        <button>
          <Image src={searchIcon} alt="my_page_icon" width={16} height={16} />
        </button>
        <div>제품명</div>
      </S.SearchStockBox>
      <div>
        <nav>
          <S.FriendStockList>
            {NAV_DATA.map(({ label, amount }, idx) => (
              <S.FriendStockItem
                key={idx}
                className={`${activeNav === idx ? 'active-nav' : ''}`}
                onClick={() => {
                  setActiveNav(idx);
                }}
              >
                {label} {amount}
              </S.FriendStockItem>
            ))}
          </S.FriendStockList>
        </nav>
        <S.StockDataBox hideScroll={hideScroll} onScroll={scrollHandler}>
          <S.StockDataList>
            {friendStockList.map(({ id, name, stockQuant, image }) => (
              <StockList
                key={id}
                name={name}
                stockQuant={stockQuant}
                image={image}
              />
            ))}
          </S.StockDataList>
        </S.StockDataBox>
      </div>
    </S.FriendStockBox>
  );
};

export default FriendStock;
