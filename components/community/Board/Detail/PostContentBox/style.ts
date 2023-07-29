import { styled } from "styled-components";

export const Box = styled.div`
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;

  padding: 4rem 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionBox = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const ActionContainer = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;

  color: ${(props) => props.color};
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.9rem;
  position: relative;
`;

export const Content = styled.div`
  margin-top: 2.2rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #979797;
`;
