import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  height: 95%;
`;

export const HeaderSection = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const GoToMyPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;

  position: absolute;
  top: 15%;
  right: 5.8%;

  span {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export const PostUploadButtonContainer = styled.button`
  position: absolute;
  top: 75%;
  right: 8%;
`;
