import { styled } from 'styled-components';

export const Box = styled.div`
  position: relative;
  width: 109.5rem;
  display: flex;
  gap: 2rem;
  align-items: start;
  margin-top: 4.5rem;
  margin-left: 2rem;
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

/** 댓글 등록 버튼 추후 공통 컴포넌트 처리 할 예정 */
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.1rem;
  height: 4.7rem;

  padding: 1.8rem 2.5rem;
  background: #000000;

  border-radius: 30px;

  &:hover {
    background: linear-gradient(
      146.58deg,
      #f9e499 -81.58%,
      #f2b2cf 77.01%,
      #b1b0d7 248.81%,
      #55abd7 425.9%
    );
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
