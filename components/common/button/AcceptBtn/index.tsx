import styled from "styled-components";

interface IAcceptBtnProps {
  label: string;
  disabled: boolean;
  width?: string;
  height?: string;
  font?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AcptBtn = styled.button<IAcceptBtnProps>`
  position: relative;
  width: ${({ width = "7.1rem" }) => width};
  height: ${({ height = "4.6rem" }) => height};
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.disabled ? "#979797" : "var(--color-black)"};
  color: var(--color-white);
  text-align: center;
  font-size: ${({ font = "1.3rem" }) => font};
  font-weight: 600;
  line-height: normal;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &::after {
    position: absolute;
    content: "${(props) => props.label}";
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: ${({ width = "7.1rem" }) => width};
    height: ${({ height = "4.6rem" }) => height};
    border-radius: 0.4rem;
    background: ${(props) =>
      props.disabled
        ? "#979797"
        : `url('/assets/imgs/community/bg-img/acceptBtnBg.svg')`};
    color: var(--color-white);
    font-size: ${({ font = "1.3rem" }) => font};
    font-weight: 600;
    line-height: normal;
    transition: all 0.3s ease;
    opacity: 0;
    overflow: hidden;
  }

  &:hover::after,
  &:active::after {
    opacity: 1;
  }
`;

/** 수락 버튼 */
const AcceptBtn = ({
  label,
  disabled,
  width,
  height,
  font,
  onClick,
}: IAcceptBtnProps) => {
  return (
    // linear-gradient transition 적용시키기 위해, children이 아닌, props로 값을 받음.
    <AcptBtn
      label={label}
      disabled={disabled}
      width={width}
      height={height}
      font={font}
      onClick={onClick}
    >
      {label}
    </AcptBtn>
  );
};

export default AcceptBtn;
