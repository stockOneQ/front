import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcBlack.svg';
import rightArrow from 'public/assets/icons/community/rightArrowIc.svg';
import StockList from './StockList';
import useScroll from 'hooks/useScroll';
import * as S from './style';
import { useEffect, useState } from 'react';
import {
  FriendStockCountListType,
  FriendStockListType,
} from '@Types/community/friends/friendsList';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';

const SELECT_DATA = ['냉동', '냉장', '상온'];

interface IFriendStockProps {
  friendStockList: FriendStockListType[];
  friendStockCountList: FriendStockCountListType[];
}

/** 친구 재고 페이지 */
const FriendStock = ({
  friendStockList,
  friendStockCountList,
}: IFriendStockProps) => {
  const [selectOption, setSelectOption] = useState(false); // 냉동 냉장 상온 선택창 열기
  const [selectState, setSelectState] = useState(SELECT_DATA); // 냉동 냉장 상온 중 하나 고르기
  const [isSelect, setIsSelect] = useState(false); // 선택된 항목 css 주기 위해
  const [activeNav, setActiveNav] = useState('Total'); // 재고 목록 nav바 선택
  const [stockList, setStockList] = useState(friendStockList);
  console.log('is : ', activeNav);

  const router = useRouter();
  const { friendID } = router.query;

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

  useEffect(() => {
    const getStockList = async () => {
      try {
        const search =
          activeNav === 'Total'
            ? '전체'
            : activeNav === 'Pass'
            ? '유통기한 경과'
            : activeNav === 'Close'
            ? '유통기한 임박'
            : activeNav === 'Lack'
            ? '재고 부족'
            : '';

        const friendStockRes = await API.get(
          `/api/friend/product/page?friend=${friendID}&condition=${selectState[0]}&search=${search}&last=-1`,
        );

        setStockList(friendStockRes.data.result);
      } catch (err) {
        console.error(err);
        throw err;
      }
    };

    getStockList();
  }, [activeNav, selectState]);

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
            {friendStockCountList.map(({ name, total }) => (
              <S.FriendStockItem
                key={`${name}-${total}`}
                className={`${activeNav === name ? 'active-nav' : ''}`}
                onClick={() => {
                  setActiveNav(name);
                }}
              >
                {name === 'Total'
                  ? '전체'
                  : name === 'Pass'
                  ? '유통기한 지난 재료'
                  : name === 'Close'
                  ? '유통기한 임박 재료'
                  : name === 'Lack'
                  ? '부족한 재료'
                  : ''}{' '}
                {total}
              </S.FriendStockItem>
            ))}
          </S.FriendStockList>
        </nav>
        <S.StockDataBox hideScroll={hideScroll} onScroll={scrollHandler}>
          <S.StockDataList>
            {stockList.map(({ id, name, stockQuant, image }) => (
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
