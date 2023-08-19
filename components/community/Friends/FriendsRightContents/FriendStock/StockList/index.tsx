import Image from 'next/image';
import * as S from './style';

interface IStockListProps {
  name: string;
  stockQuant: number;
  image: string;
}

/** 재고 목록 */
const StockList = ({ name, stockQuant, image }: IStockListProps) => {
  return (
    <S.StockDataItem>
      <S.StockImgBox>
        {image && (
          <div>
            <Image
              src={`data:image/jpeg;base64,${image}`}
              alt="stock"
              width={144}
              height={144}
            />
          </div>
        )}
        <p>{stockQuant}</p>
      </S.StockImgBox>
      <S.StockDataParagraph>{name}</S.StockDataParagraph>
    </S.StockDataItem>
  );
};

export default StockList;
