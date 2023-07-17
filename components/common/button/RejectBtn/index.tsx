import styled from 'styled-components';

interface IRejectBtn {
  label: string;
}

const RejBtn = styled.button`
  width: 7.1rem;
  height: 4.6rem;
  border-radius: .4rem;
  background-color: #E1E1E1;
  color: var(--color-white);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: normal;
  transition: all .3s ease;

  &:hover,
  &:active {
    background-color: #3D3D3D;
  }
`

/** 거절 버튼 */
const RejectBtn = ({ label }: IRejectBtn) => {
  return (
    // AcceptBtn과 통일성을 위해, children이 아닌 props로 값 전달
    <RejBtn>{label}</RejBtn>
  );
};

export default RejectBtn;