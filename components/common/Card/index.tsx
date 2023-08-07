import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ICardProps {
  width: string;
  height?: string;
  padding?: string;
};

const CardBox = styled.article<ICardProps>`
  width: ${props => props.width || '38.5rem'};
  height: ${props => props.height || '65vh'};
  padding: ${props => props.padding || '0'};
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(.2rem);
`

/** 카드 컴포넌트 */
const Card = ({ width, height, padding, children }: PropsWithChildren<ICardProps>) => {
  return (
    <CardBox width={width} height={height} padding={padding}>{children}</CardBox>
  );
};

export default Card;