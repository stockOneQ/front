import Image from 'next/image';
import * as S from './style';

interface IStockListProps {
  name: string;
  stockQuant: number;
  image: null;
}

/** 재고 목록 */
const StockList = ({ name, stockQuant, image }: IStockListProps) => {
  return (
    <S.StockDataItem>
      <S.StockImgBox>
        {/* <Image src={image} alt="stock" width={162} height={176} /> */}
        <p>{stockQuant}</p>
      </S.StockImgBox>
      <S.StockDataParagraph>{name}</S.StockDataParagraph>
    </S.StockDataItem>
  );
};

export default StockList;
