import styled from 'styled-components';

interface IAcceptBtnProps {
  label: string;
  disabled: boolean;
}

const AcptBtn = styled.button<IAcceptBtnProps>`
  position: relative;
  width: 7.1rem;
  height: 4.6rem;
  border-radius: .4rem;
  background-color: ${props => props.disabled ? '#979797' : 'var(--color-black)'};
  color: var(--color-white);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: normal;
  transition: all .3s ease;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};

  &::after {
    position: absolute;
    content: '${props => props.label}';
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 7.1rem;
    height: 4.6rem;
    border-radius: .4rem;
    background: ${props => props.disabled ? '#979797' : 'linear-gradient(164deg, #F9E499 0%, #F2B2CF 31.25%, #B1B0D7 65.10%, #55ABD7 100%), #000'};
    color: var(--color-white);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: normal;
    transition: all .3s ease;
    opacity: 0;
  }

  &:hover::after,
  &:active::after {
    opacity: 1;
  }
`

/** 수락 버튼 */
const AcceptBtn = ({ label, disabled }: IAcceptBtnProps) => {
  return (
    // linear-gradient transition 적용시키기 위해, children이 아닌, props로 값을 받음.
    <AcptBtn label={label} disabled={disabled}>{label}</AcptBtn>
  );
};

export default AcceptBtn;