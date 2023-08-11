import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonGroup = styled.div`
  width: 90%;

  display: flex;
  justify-content: end;
  align-items: center;

  gap: 0.8rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 3rem;
  margin-right: 1.5rem;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 7.1rem;
  height: 3.5rem;

  padding-top: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.3rem;

  background: ${props => (props.children === '취소' ? '#e1e1e1' : '#000000')};

  &:hover {
    background: ${props =>
      props.children === '취소'
        ? '#3d3d3d'
        : 'linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'};
  }

  &:disabled {
    cursor: default;
    background: ${props => (props.children === '저장' ? '#979797' : '')};
  }
`;

export const EditorContainer = styled.div`
  width: 111.5rem;
  height: 67.3rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0rem 1.1rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
`;
