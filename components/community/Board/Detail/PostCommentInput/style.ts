import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 4rem;

  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #e1e1e1;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  width: 100%;
  padding: 2rem 2rem 2rem 3.5rem;
`;

export const UploadButton = styled.button``;

export const Input = styled.textarea`
  resize: none;
  border: none;

  width: 100%;
  height: 11rem;

  padding: 0 6.2rem 0 0;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0.9rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: #444343;
    border-radius: 5px;
  }
`;
