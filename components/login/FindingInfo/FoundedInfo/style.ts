import styled from 'styled-components';

const FoundedInfoBox = styled.div`
  width: 56.8rem;
  margin: 5.8rem auto 0;
`

const FoundedInfoSmallBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1rem;
  width: 100%;
  height: 19.6rem;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  background-color: var(--color-white);
  margin-bottom: 1.9rem;
`

const FoundedTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.7rem;
  justify-content: space-between;
  
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  `

const FoundedLeftTextBox = styled(FoundedTextBox)`
  color: var(--color-black);
  align-items: end;
`

const FoundedRightTextBox = styled(FoundedTextBox)`
  color: #979797;
  align-items: start;
`

const NotFoundedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;

  color: #979797;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
`

interface IFoundedButtonBoxProps {
  isFounded: boolean;
}

const FoundedButtonBox = styled.div<IFoundedButtonBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ isFounded }) => isFounded ? '2rem' : '1rem'};
  height: 11.1rem;

  button {
    color: var(--color-white);
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: normal;

    width: ${({ isFounded }) => isFounded ? '27.4rem' : '18.3rem'};
    height: 11.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      opacity: .8;
    }
  }

  .btn1 {
    background-image: ${({ isFounded }) => isFounded ? `url('assets/imgs/login/bg-img/foundedBigLoginBtnBg.svg')` : `url('assets/imgs/login/bg-img/foundedLoginBtnBg.svg')`};
  }
  .btn2 {
    background-image: url('assets/imgs/login/bg-img/foundedIDBtnBg.svg');
  }
  .btn3 {
    background-image: ${({ isFounded }) => isFounded ? `url('assets/imgs/login/bg-img/foundedBigPWBtnBg.svg')` : `url('assets/imgs/login/bg-img/foundedPWBtnBg.svg')`};
  }
`

export {
  FoundedInfoBox,
  FoundedInfoSmallBox,
  FoundedLeftTextBox,
  FoundedRightTextBox,
  NotFoundedBox,
  FoundedButtonBox
}