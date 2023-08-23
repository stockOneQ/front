//components/my-page/Myinformation/Style
import styled from 'styled-components';

const SignUpBox = styled.div`
  width: 93.2rem;
  padding: 6.5rem 2rem;
  margin: 0 auto;
`;
const SignUpHeaderBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.3rem;

  img {
    margin-bottom: 2.6rem;
  }

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const SignUpForm = styled.form`
  padding: 0 12.7rem;
`;

const PwInputBox = styled.div`
  display: flex;
  align-items: end;
  gap: 2.4rem;

  p {
    color: #979797;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: normal;
  }
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AuthImgBox = styled.div`
  width: 16.3rem;
  height: 11.1rem;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }
`;

const AddrInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    width: 7.2rem;
    height: 4.5rem;
    background-color: var(--color-black);
    border-radius: 0.5rem;
    color: var(--color-white);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const SignUpBtnBox = styled.div`
  margin: 9.2rem auto 6.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const DigitInputBox = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }
`;

const BirthInputBox = styled.div`
  display: flex;
  gap: 2rem;
`;

const EmailInputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  p {
    padding: 0 2.8rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
  }
`;

export {
  SignUpBox,
  SignUpHeaderBox,
  SignUpForm,
  PwInputBox,
  AuthBox,
  AuthImgBox,
  AddrInputBox,
  SignUpBtnBox,
  DigitInputBox,
  BirthInputBox,
  EmailInputBox,
};
