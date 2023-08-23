import styled from 'styled-components';

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SignUpLabel = styled.label`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
`;

interface ISignUpInput {
  width: string;
  placeholderLocation?: string;
}

const SignUpInput = styled.input<ISignUpInput>`
  width: ${({ width }) => width};
  height: 4.5rem;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  color: var(--color-black);
  margin-right: 10px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  padding: 1.3rem 2.2rem;

  &::placeholder {
    color: var(--color-gray);
    text-align: ${({ placeholderLocation = 'center' }) => placeholderLocation};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border: 1px solid linear-gradient(#f9e499, #f2b2cf, #55abd7, #b1b0d7);
  }
`;

const InputRowBox = styled.div`
  display: flex;
  margin-bottom: 4.5rem;
`;

const InputRow1Box = styled(InputRowBox)`
  gap: 7.1rem;
`;

const InputRow2Box = styled(InputRowBox)`
  flex-direction: column;
  margin-top: 37px;
  gap: 2rem;
`;

const InputRow3Box = styled(InputRow2Box)`
  padding-bottom: 2.1rem;
`;

export {
  SignUpInputBox,
  SignUpLabel,
  SignUpInput,
  InputRow1Box,
  InputRow2Box,
  InputRow3Box,
};
