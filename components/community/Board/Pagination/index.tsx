import Image from 'next/image';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  currentPageNumState,
  startPageNumState,
  totalPagesState,
} from 'recoil/states';
import * as S from './style';
import MovePageL from 'public/assets/icons/community/movePageL.svg';
import MovePageR from 'public/assets/icons/community/movePageR.svg';
import { useEffect, useState } from 'react';

const Pagination = () => {
  const range = (start = 0) => {
    return Array.from({ length: 5 }, (_, index) => index + start);
  }; /** [1, 2, 3, 4, 5] */

  const [startPageNum, setStartPageNum] = useRecoilState(startPageNumState);
  const totalPages = useRecoilValue(totalPagesState);
  const setCurrentPageNum = useSetRecoilState(currentPageNumState);

  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    startPageNum + 5 > totalPages ? setIsMove(false) : setIsMove(true);
  }, [startPageNum, totalPages]);

  const handlePage = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.target as HTMLElement;
    console.log(`${id}페이지 클릭`);
    setCurrentPageNum(Number(id));
  };

  const handlePrevPage = () => {
    if (startPageNum <= 5) return;
    setCurrentPageNum(startPageNum - 1);
    setStartPageNum(startPageNum - 5);
  };

  const handleNextPage = () => {
    if (startPageNum + 5 > totalPages) return;
    setCurrentPageNum(startPageNum + 5);
    setStartPageNum(startPageNum + 5);
  };

  return (
    <S.Box>
      <S.PageMoveButton onClick={handlePrevPage}>
        <Image src={MovePageL} alt={'prev'} />
      </S.PageMoveButton>
      {range(startPageNum).map(pageNum => (
        <S.PageNum
          id={String(pageNum)}
          onClick={handlePage}
          disabled={pageNum > totalPages}
        >
          {pageNum}
        </S.PageNum>
      ))}
      <S.PageMoveButton onClick={handleNextPage} disabled={!isMove}>
        <Image src={MovePageR} alt={'next'} />
      </S.PageMoveButton>
    </S.Box>
  );
};

export default Pagination;
