import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ICardProps {
  width: string;
};

const CardBox = styled.article<ICardProps>`
  width: ${props => props.width || '38.5rem'};
  height: 65vh;
  min-height: 73.8rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(.2rem);
`

/** 카드 컴포넌트 */
const Card = ({ width, children }: PropsWithChildren<ICardProps>) => {
  return (
    <CardBox width={width}>{children}</CardBox>
  );
};

export default Card;