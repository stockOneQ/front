import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;

  gap: 0.8rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 3rem;
  margin-right: 3.2rem;
`;

{
  /* 컴포넌트로 분리하려다 잘 안돼서 일단 공통 버튼 컴포넌트 한 곳에서 작업 */
}
export const Button = styled.button`
  width: 7.1rem;
  height: 3.5rem;

  padding-top: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => (props.children === '취소' ? '#979797' : '#000000')};
  border-radius: 2.3rem;

  &:hover {
    background: ${props =>
      props.children === '취소'
        ? '#3d3d3d'
        : ' linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)'};
  }
`;
