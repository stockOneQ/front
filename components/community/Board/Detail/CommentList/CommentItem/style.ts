import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  width: 109rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  margin-left: 2rem;
  margin-bottom: 4.6rem;
  padding-right: 0rem;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  font-family: 'Roboto';

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  span {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`;

export const ReplyButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;

  color: #979797;
`;

export const CommentEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2.2rem;
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

export const Date = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #e1e1e1;
`;

export const OptionButton = styled.button`
  position: absolute;
  right: 0;
`;

export const Modal = styled.div`
  position: absolute;
  right: 1.8%;
  width: 16.2rem;
  height: 9.2rem;

  background: #ffffff;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
`;
export const Button = styled.button<{ type: string }>`
  width: 100%;
  height: 50%;

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => (props.type === '삭제' ? '#F2B2CF' : 'black')};

  &:hover {
    background: #f7f7f9;
    border-radius: 0.8rem;
  }
`;

/** --------------------------------- */

export const ReplyContainer = styled.div`
  display: flex;
  gap: 2.6rem;
`;

export const Div = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Left = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Writer = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;

  margin-top: 0.8rem;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Reply = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
`;

export const Editor = styled.div<{ height?: string }>`
  width: 88.7rem;
  height: 15.3rem;

  display: flex;
  gap: 4rem;

  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #e1e1e1;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  height: ${props => props.height || 15.3}rem;
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
