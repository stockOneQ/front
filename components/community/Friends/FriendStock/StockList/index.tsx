import Image from 'next/image';
import styled from 'styled-components';

interface IStockList {
  stockName: string;
  amount: number;
  img: string;
}

const StockDataItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 2rem;
`

const StockImgBox = styled.div`
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 2px 4px 11px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  overflow: hidden;
  position: relative;
  width: 16.2rem;
  height:17.6rem;

  p {
    position: absolute;
    bottom: 1.1rem;
    right: 1.4rem;
    
    width: 2.9rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background: #979797;
    color: #FFF;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: normal;
  }
`

const StockDataParagraph = styled.p`
  color: #979797;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`

/** 재고 목록 */
const StockList = ({ stockName, amount, img }: IStockList) => {
  return (
    <StockDataItem>
      <StockImgBox>
        <Image src={img} alt="stock" width={162} height={176} />
        <p>{amount}</p>
      </StockImgBox>
      <StockDataParagraph>{stockName}</StockDataParagraph>
    </StockDataItem>
  );
};

export default StockList;