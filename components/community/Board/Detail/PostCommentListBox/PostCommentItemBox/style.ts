import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 2.6rem;
  align-items: start;
  margin-top: 4.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  font-family: "Roboto";
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
