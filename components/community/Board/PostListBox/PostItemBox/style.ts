import { styled } from "styled-components";

export const Box = styled.div`
  width: 1114px;
  height: 216px;

  padding: 32px 50px;

  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostDetailSection = styled.div``;

export const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #979797;
`;

export const PostInfoSection = styled.div`
  display: flex;
  gap: 32px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #979797;
`;
