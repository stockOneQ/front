import Image from 'next/image';
import * as S from './style';

interface IStockListProps {
  stockName: string;
  amount: number;
  img: string;
}

/** 재고 목록 */
const StockList = ({ stockName, amount, img }: IStockListProps) => {
  return (
    <S.StockDataItem>
      <S.StockImgBox>
        <Image src={img} alt="stock" width={162} height={176} />
        <p>{amount}</p>
      </S.StockImgBox>
      <S.StockDataParagraph>{stockName}</S.StockDataParagraph>
    </S.StockDataItem>
  );
};

export default StockList;
