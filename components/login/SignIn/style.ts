import styled from 'styled-components';

const SignInSection = styled.section`
  width: 38.5rem;
  padding: 2rem;
  margin: 0 auto;
  transform: translateY(calc(50vh - 50%));
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const SignInHeaderBox = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  width: 6.36rem;

  img {
    margin-bottom: 2.3rem;
  }

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: normal;
<<<<<<< HEAD
    white-space: nowrap;
  }
`;
=======
  }
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const SignInBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const SignInInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
  color: var(--color-black);
<<<<<<< HEAD

=======
  
>>>>>>> ff4bb25 (Merge branch develop into main)
  input {
    width: 34.5rem;
    height: 6.6rem;
    border: 1px solid var(--color-gray);
    border-radius: 5rem;
    padding: 2.4rem 3.5rem;
  }

  input::placeholder {
    color: var(--color-gray);
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

interface ISignInButtonProps {
  isTyped: boolean;
}

const SignInButton = styled.button<ISignInButtonProps>`
  width: 34.5rem;
  height: 6.6rem;
  border: 1px solid var(--color-gray);
  border-radius: 5rem;
  padding: 2.4rem 3.5rem;
  background-color: var(--color-gray);
  margin-bottom: 2rem;
<<<<<<< HEAD
  background-image: ${({ isTyped }) =>
    isTyped ? `url('/assets/imgs/login/bg-img/signInBtnBg.svg')` : ''};
  cursor: ${({ isTyped }) => (isTyped ? 'pointer' : 'default')};
=======
  background-image: ${({ isTyped }) => isTyped ? `url('/assets/imgs/login/bg-img/signInBtnBg.svg')` : ''};
  cursor: ${({ isTyped }) => isTyped ? 'pointer' : 'default'};
>>>>>>> ff4bb25 (Merge branch develop into main)

  font-size: 1.8rem;
  font-weight: 700;
  line-height: normal;
  color: var(--color-white);
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const SignInFooterBox = styled.div`
  display: flex;
  justify-content: space-evenly;

<<<<<<< HEAD
  button,
  a {
=======
  button {
>>>>>>> ff4bb25 (Merge branch develop into main)
    color: var(--color-black);
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }

  div {
    border-right: 1px solid var(--color-black);
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

export {
  SignInSection,
  SignInHeaderBox,
  SignInBodyBox,
  SignInInputBox,
  SignInButton,
<<<<<<< HEAD
  SignInFooterBox,
};
=======
  SignInFooterBox
}
>>>>>>> ff4bb25 (Merge branch develop into main)
