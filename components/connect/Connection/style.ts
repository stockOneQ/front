import styled from 'styled-components';

const ConnectionHeaderBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.4rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const ConnectionInputBox = styled.div`
  width: 34.5rem;
  height: 4.5rem;
  background-color: var(--color-white);
  border: 1px solid #f7f7f9;
  border-radius: 5rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem 0 1.9rem;
  margin-left: auto;

  input {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: normal;
    width: 26.4rem;
  }
`;

interface IConnectionBodyBoxProps {
  hideScroll: boolean;
}

const ConnectionBodyBox = styled.div<IConnectionBodyBoxProps>`
  width: 100%;
  height: 58.7rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: ${props => (props.hideScroll ? 'none' : 'inline-block')};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 0.3rem solid transparent;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
    background-color: #eee;
  }
`;

export { ConnectionHeaderBox, ConnectionInputBox, ConnectionBodyBox };
