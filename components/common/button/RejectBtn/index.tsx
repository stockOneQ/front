import styled from "styled-components";

interface IRejectBtn {
  label?: string;
  width?: string;
  height?: string;
  font?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const RejBtn = styled.button<IRejectBtn>`
  width: ${({ width = "7.1rem" }) => width};
  height: ${({ height = "4.6rem" }) => height};
  border-radius: 0.4rem;
  background-color: var(--color-gray);
  color: var(--color-white);
  text-align: center;
  font-size: ${({ font = "1.3rem" }) => font};
  font-weight: 600;
  line-height: normal;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background-color: #3d3d3d;
  }
`;

/** 거절 버튼 */
const RejectBtn = ({ label, width, height, font, onClick }: IRejectBtn) => {
  return (
    // AcceptBtn과 통일성을 위해, children이 아닌 props로 값 전달
    <RejBtn width={width} height={height} font={font} onClick={onClick}>
      {label}
    </RejBtn>
  );
};

export default RejectBtn;
