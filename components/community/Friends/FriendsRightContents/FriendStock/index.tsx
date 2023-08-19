import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcBlack.svg';
import rightArrow from 'public/assets/icons/community/rightArrowIc.svg';
import StockList from './StockList';
import useScroll from 'hooks/useScroll';
import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import {
  FriendStockCountListType,
  FriendStockListType,
} from '@Types/community/friends/friendsList';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';
import useSearch from 'hooks/useSearch';
import { AxiosError } from 'axios';

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
  const enteredValueRef = useRef(null);

  const [isSelect, setIsSelect] = useState(false); // 냉동 냉장 상온 토글 열기
  const [selectState, setSelectState] = useState(SELECT_DATA); // 냉동 냉장 상온 중 하나 고르기
  const [activeNav, setActiveNav] = useState('Total'); // 재고 목록 nav바 선택
  const [stockList, setStockList] = useState(friendStockList); // 친구 재고 목록
  const [stockCount, setStockCount] = useState(friendStockCountList); // 친구 재고 수량

  const router = useRouter();
  const { friendID } = router.query;
  const { hideScroll, scrollHandler } = useScroll();
  const { enteredValue, setEnteredValue, onKeyDownHandler, onSearchHandler } =
    useSearch();

  const selectLabelHandler = (idx: string) => {
    if (idx === '냉동') return setSelectState(['냉동', '냉장', '상온']);
    if (idx === '냉장') return setSelectState(['냉장', '냉동', '상온']);
    if (idx === '상온') return setSelectState(['상온', '냉장', '냉동']);
  };

  const openSelectLabelHandler = () => {
    setIsSelect(prev => !prev);
  };

  useEffect(() => {
    const getStockList = async () => {
      let stockList: FriendStockListType[] = [];
      let friendStock_offset = -1;

      // 친구 재고 수량
      try {
        const friendStockCount = await API.get(
          `/api/friend/product/count?friend=${friendID}&condition=${selectState[0]}`,
        );
        setStockCount(friendStockCount.data.result);
      } catch (err) {
        console.error(err);
        throw err;
      }

      if (!activeNav) return; // 검색 시 active 상태 없애기
      if (enteredValue) return;

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

      // 친구 재고 목록
      while (true) {
        try {
          const friendStockRes = await API.get(
            `/api/friend/product/page?friend=${friendID}&condition=${selectState[0]}&search=${search}&last=${friendStock_offset}`,
          );
          const friendStockData = friendStockRes.data.result;
          const friendStockDataLen = friendStockData.length;

          stockList = [...stockList, ...friendStockData];
          friendStock_offset =
            friendStockData[friendStockDataLen - 1]?.id || -1;

          if (friendStockDataLen < 9) {
            setStockList(stockList);
            break;
          }
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
    };

    getStockList();
  }, [activeNav, selectState]);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        if (!enteredValue) return; // 입력값 없을 시 넘기기

        const searchRes = await API.get(
          `/api/friend/product/search?friend=${friendID}&condition=${selectState[0]}&name=${enteredValue}`,
        );

        setActiveNav('Total');
        setStockList(searchRes.data.result);
      } catch (err) {
        if ((err as AxiosError).response?.status === 404) {
          setActiveNav('Total');
          setStockList([]);
        }
      }
    };

    getSearchData();
  }, [enteredValue, selectState]);

  return (
    <S.FriendStockBox>
      <S.StockLabelBox>
        <div>
          <S.StockLabelParagraph selected={selectState[0]}>
            {selectState[0]}
          </S.StockLabelParagraph>
        </div>
        <S.StockLabelSelectBox isSelect={isSelect}>
          {isSelect && (
            <S.StockLabelOthersBox>
              {selectState.map(item => (
                <>
                  <p
                    onClick={() => {
                      selectLabelHandler(item);
                      setIsSelect(false);
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
        <input
          ref={enteredValueRef}
          id="friend-stock-search"
          type="text"
          autoComplete="off"
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={onSearchHandler}>
          <Image src={searchIcon} alt="my_page_icon" width={16} height={16} />
        </button>
        <label htmlFor="friend-stock-search">제품명</label>
      </S.SearchStockBox>
      <div>
        <nav>
          <S.FriendStockList>
            {stockCount.map(({ name, total }) => (
              <S.FriendStockItem
                key={`${name}-${total}`}
                className={`${activeNav === name ? 'active-nav' : ''}`}
                onClick={() => {
                  setActiveNav(name);
                  setEnteredValue('');
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
          {stockList.length === 0 && (
            <S.StockNoDataParagraph>
              해당하는 제품이 존재하지 않습니다.
            </S.StockNoDataParagraph>
          )}
        </S.StockDataBox>
      </div>
    </S.FriendStockBox>
  );
};

export default FriendStock;
