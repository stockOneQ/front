import { styled } from 'styled-components';

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  overflow-y: auto;
  height: 82%;
  padding: 0rem 4.2rem 2.8rem 1.2rem;

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
