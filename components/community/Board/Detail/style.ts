import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 95%;
  overflow-y: auto;
  padding: 0 6rem 0 1.6rem;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #444343;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 3rem;

  margin-right: 1.5rem;
`;

export const EditButton = styled.button`
  color: white;
  background: #000000;
  border-radius: 2.3rem;
  padding: 0.7rem 1.7rem;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;

  &:hover {
    background: linear-gradient(
        225.48deg,
        #f9e499 -61.63%,
        #f2b2cf 72.42%,
        #b1b0d7 170.6%,
        #55abd7 300.87%
      ),
      #000000;
  }
`;

export const CloseButton = styled.button`
  margin-top: 0.7rem;
`;

export const PostBox = styled.div``;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentList = styled.div``;

export const CommentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  padding: 9rem 0 2rem 0;

  border-bottom: 1px solid #e1e1e1;

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #979797;
  }
`;
