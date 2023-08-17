import styled from 'styled-components';

interface ICancelBtnProps {
  label: string;
  disabled: boolean;
  width?: string;
  height?: string;
  font?: string;
  onClick?: () => void;
}

const CnclBtn = styled.button<ICancelBtnProps>`
  position: relative;
  width: ${({ width = '7.1rem' }) => width};
  height: ${({ height = '4.6rem' }) => height};
  border-radius: 0.4rem;
  background-color: #acacac;
  color: var(--color-white);
  text-align: center;
  font-size: ${({ font = '1.3rem' }) => font};
  font-weight: 600;
  line-height: normal;
  transition: all 0.3s ease;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &::after {
    position: absolute;
    content: '${props => props.label}';
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: ${({ width = '7.1rem' }) => width};
    height: ${({ height = '4.6rem' }) => height};
    border-radius: 0.4rem;
    background-image: url('/assets/imgs/community/bg-img/acceptBtnBg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--color-white);
    font-size: ${({ font = '1.3rem' }) => font};
    font-weight: 600;
    line-height: normal;
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::after,
  &:active::after {
    opacity: 1;
  }
`;

/** 수락 버튼 */
const CancelBtn = ({
  label,
  disabled,
  width,
  height,
  font,
  onClick,
}: ICancelBtnProps) => {
  return (
    // linear-gradient transition 적용시키기 위해, children이 아닌, props로 값을 받음.
    <CnclBtn
      label={label}
      disabled={disabled}
      width={width}
      height={height}
      font={font}
      type="button"
      onClick={onClick}
    >
      {label}
    </CnclBtn>
  );
};

export default CancelBtn;
