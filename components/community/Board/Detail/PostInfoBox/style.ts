import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-items: start;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.7rem;

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }

  span {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;

    color: #e1e1e1;
  }
`;
