import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  justify-content: end;
  align-items: center;
=======
  justify-content: center;
>>>>>>> ff4bb25 (Merge branch develop into main)

  height: 95%;
`;

export const HeaderSection = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

<<<<<<< HEAD
export const GoToMyPostButton = styled.button`
=======
export const MyPostButtonContainer = styled.button`
>>>>>>> ff4bb25 (Merge branch develop into main)
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

<<<<<<< HEAD
export const PostUploadButtonContainer = styled.button`
=======
export const WriteButtonContainer = styled.button`
>>>>>>> ff4bb25 (Merge branch develop into main)
  position: absolute;
  top: 75%;
  right: 8%;
`;
