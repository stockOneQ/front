import { styled } from "styled-components";

export const Box = styled.div`
  position: relative;
  height: 95%;
  overflow-y: auto;
  padding: 0 3.3rem 0 1.6rem;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #444343;
    border-radius: 5px;
  }
`;

export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 1%;
  right: 4%;
`;

export const PostContainer = styled.div``;

export const CommentListContainer = styled.div``;

export const CommentCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  padding: 9rem 0 2rem 0;

  border-bottom: 1px solid #e1e1e1;

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #979797;
  }
`;
