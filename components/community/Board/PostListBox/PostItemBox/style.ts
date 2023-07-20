import { styled } from "styled-components";

export const Box = styled.div`
  width: 111.4rem;
  height: 21.6rem;

  padding: 3.2rem 5rem;

  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;
  box-shadow: 0rem 1.1rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostDetailSection = styled.div``;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.9rem;
  margin-bottom: 1.2rem;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #979797;
`;

export const PostInfoSection = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;

  color: #979797;
`;
