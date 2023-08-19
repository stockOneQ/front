import Image from 'next/image';
import * as S from './style';

interface IStockListProps {
  name: string;
  stockQuant: number;
  image: string;
}

/** 재고 목록 */
const StockList = ({ name, stockQuant, image }: IStockListProps) => {
  console.log('typeof', typeof image);

  const decodedImg = atob(image);
  const imgBlob = new Blob([
    new Uint8Array([...decodedImg].map(char => char.charCodeAt(0))),
  ]);
  const imageUrl = URL.createObjectURL(imgBlob);

  return (
    <S.StockDataItem>
      <S.StockImgBox>
        {image && (
          <div>
            <Image src={imageUrl} alt="stock" width={144} height={144} />
          </div>
        )}
        <p>{stockQuant}</p>
      </S.StockImgBox>
      <S.StockDataParagraph>{name}</S.StockDataParagraph>
    </S.StockDataItem>
  );
};

export default StockList;
