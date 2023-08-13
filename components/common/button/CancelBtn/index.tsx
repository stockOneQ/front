import styled from 'styled-components';

interface ICancelBtnProps {
  label: string;
  disabled: boolean;
  width?: string;
  height?: string;
  font?: string;
<<<<<<< HEAD
  type?: string;
  onClick?: (e: any) => void;
=======
>>>>>>> ff4bb25 (Merge branch develop into main)
}

const CnclBtn = styled.button<ICancelBtnProps>`
  position: relative;
<<<<<<< HEAD
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
=======
  width: ${({ width = '7.1rem'}) => width};
  height: ${({ height = '4.6rem'}) => height};
  border-radius: .4rem;
  background-color: #ACACAC;
  color: var(--color-white);
  text-align: center;
  font-size: ${({ font = '1.3rem'}) => font};
  font-weight: 600;
  line-height: normal;
  transition: all .3s ease;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
>>>>>>> ff4bb25 (Merge branch develop into main)

  &::after {
    position: absolute;
    content: '${props => props.label}';
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
<<<<<<< HEAD
    width: ${({ width = '7.1rem' }) => width};
    height: ${({ height = '4.6rem' }) => height};
    border-radius: 0.4rem;
=======
    width: ${({ width = '7.1rem'}) => width};
    height: ${({ height = '4.6rem'}) => height};
    border-radius: .4rem;
>>>>>>> ff4bb25 (Merge branch develop into main)
    background-image: url('/assets/imgs/community/bg-img/acceptBtnBg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--color-white);
<<<<<<< HEAD
    font-size: ${({ font = '1.3rem' }) => font};
    font-weight: 600;
    line-height: normal;
    transition: all 0.3s ease;
=======
    font-size: ${({ font = '1.3rem'}) => font};
    font-weight: 600;
    line-height: normal;
    transition: all .3s ease;
>>>>>>> ff4bb25 (Merge branch develop into main)
    opacity: 0;
  }

  &:hover::after,
  &:active::after {
    opacity: 1;
  }
<<<<<<< HEAD
`;

/** 수락 버튼 */
const CancelBtn = ({
  label,
  disabled,
  width,
  height,
  font,
  type,
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
      type={type}
      onClick={onClick}
    >
      {label}
    </CnclBtn>
  );
};

export default CancelBtn;
=======
`

/** 수락 버튼 */
const CancelBtn = ({ label, disabled, width, height, font }: ICancelBtnProps) => {
  return (
    // linear-gradient transition 적용시키기 위해, children이 아닌, props로 값을 받음.
    <CnclBtn label={label} disabled={disabled} width={width} height={height} font={font}>{label}</CnclBtn>
  );
};

export default CancelBtn;
>>>>>>> ff4bb25 (Merge branch develop into main)
