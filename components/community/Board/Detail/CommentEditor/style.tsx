import { styled } from 'styled-components';

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 15.3rem;
  display: flex;
  gap: 4rem;

  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #e1e1e1;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  padding: 2rem 2rem 2rem 3.5rem;
`;

export const PhotoUploadButton = styled.button``;

export const CommentInput = styled.textarea`
  resize: none;
  border: none;

  width: 100%;
  height: 11rem;

  padding: 0 5.3rem 0 0;

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

export const SubmitButton = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.1rem;
  height: 4.7rem;

  padding: 1.8rem 2.5rem;
  background: ${props => (props.disabled ? '#e1e1e1' : '#000000')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  border-radius: 30px;

  &:hover {
    background: ${props =>
      props.disabled
        ? ''
        : 'linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'};
  }

  span {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
    white-space: nowrap;
    margin-top: 0.2rem;
  }
`;
