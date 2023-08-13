import styled from 'styled-components';

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const SignUpLabel = styled.label`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

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
<<<<<<< HEAD
  margin-right: 10px;
=======
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
    border: 1px solid linear-gradient(#f9e499, #f2b2cf, #55abd7, #b1b0d7);
  }
`;
=======
    border: 1px solid linear-gradient(#F9E499, #F2B2CF, #55ABD7, #B1B0D7);
  }
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const InputRowBox = styled.div`
  display: flex;
  margin-bottom: 4.5rem;
<<<<<<< HEAD
`;

const InputRow1Box = styled(InputRowBox)`
  gap: 7.1rem;
`;

const InputRow2Box = styled(InputRowBox)`
  flex-direction: column;
  margin-top: 37px;
  display: flex;
  gap: 2rem;
`;

const InputRow3Box = styled(InputRow2Box)`
  padding-bottom: 2.1rem;
`;
=======
`

const InputRow1Box = styled(InputRowBox)`
  gap: 7.1rem;
`

const InputRow2Box = styled(InputRowBox)`
  flex-direction: column;
  gap: 2rem;
`

const InputRow3Box = styled(InputRow2Box)`
  padding-bottom: 2.1rem;
`
>>>>>>> ff4bb25 (Merge branch develop into main)

export {
  SignUpInputBox,
  SignUpLabel,
  SignUpInput,
  InputRow1Box,
  InputRow2Box,
<<<<<<< HEAD
  InputRow3Box,
};
=======
  InputRow3Box
}
>>>>>>> ff4bb25 (Merge branch develop into main)
