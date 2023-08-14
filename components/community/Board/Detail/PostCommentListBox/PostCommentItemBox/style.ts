import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2.6rem;
  align-items: start;
  margin-top: 4.5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  font-family: 'Roboto';
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }

  span {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #e1e1e1;
`;

export const OptionButton = styled.button`
  position: absolute;
  right: 0;
`;

export const Modal = styled.div`
  position: absolute;
  right: 1.8%;
  width: 16.2rem;
  height: 9.2rem;

  background: #ffffff;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
`;
export const Button = styled.button<{ type: string }>`
  width: 100%;
  height: 50%;

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => (props.type === '삭제' ? '#F2B2CF' : 'black')};

  &:hover {
    background: #f7f7f9;
    border-radius: 0.8rem;
  }
`;
