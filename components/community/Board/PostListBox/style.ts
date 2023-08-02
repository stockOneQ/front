import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  overflow-y: auto;
  height: 82%;
  padding: 0rem 3.2rem 2.8rem 1.6rem;

  position: absolute;
  top: 17.5%;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #444343;
    border-radius: 5px;
  }
`;
