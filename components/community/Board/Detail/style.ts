import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 95%;
  overflow-y: auto;
<<<<<<< HEAD
  padding: 0 6rem 0 1.6rem;
=======
  padding: 0 3.3rem 0 1.6rem;
>>>>>>> ff4bb25 (Merge branch develop into main)

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #444343;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
<<<<<<< HEAD
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 3rem;

  margin-right: 1.5rem;
=======
  position: absolute;
  top: 1.4%;
  right: 4%;

  display: flex;
  gap: 3rem;
>>>>>>> ff4bb25 (Merge branch develop into main)
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

<<<<<<< HEAD
export const CloseButton = styled.button`
  margin-top: 0.7rem;
`;

export const PostBox = styled.div``;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentList = styled.div``;

export const CommentTotalCount = styled.div`
=======
export const CloseButton = styled.button``;

export const PostBox = styled.div``;

export const CommentList = styled.div``;

export const CommentCount = styled.div`
>>>>>>> ff4bb25 (Merge branch develop into main)
  display: flex;
  align-items: center;
  gap: 0.7rem;

<<<<<<< HEAD
  padding: 2.6rem 0 2rem 0;

  margin-bottom: 4.5rem;
=======
  padding: 9rem 0 2rem 0;
>>>>>>> ff4bb25 (Merge branch develop into main)

  border-bottom: 1px solid #e1e1e1;

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #979797;
  }
`;
