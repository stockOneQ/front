import styled from 'styled-components';

interface ICancelBtnProps {
  label: string;
  disabled: boolean;
}

const CnclBtn = styled.button<ICancelBtnProps>`
  position: relative;
  width: 7.1rem;
  height: 4.6rem;
  border-radius: .4rem;
  background-color: #ACACAC;
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
    background-image: url('/assets/icons/community/bg-img/acceptBtnBg.svg');
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
const CancelBtn = ({ label, disabled }: ICancelBtnProps) => {
  return (
    // linear-gradient transition 적용시키기 위해, children이 아닌, props로 값을 받음.
    <CnclBtn label={label} disabled={disabled}>{label}</CnclBtn>
  );
};

export default CancelBtn;