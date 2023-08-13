import styled from 'styled-components';

/**************/
/** index.tsx */
/**************/

const WholePageBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
<<<<<<< HEAD
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;
=======
  
  &::-webkit-scrollbar{
    display: none;
  }
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const AgreementTermsBox = styled.div`
  width: 97.2rem;
  padding: 11.1rem 2rem 2.5rem;
  margin: 0 auto;
<<<<<<< HEAD
`;

interface IAgreeHeaderButtonProps {
  notAllSelected: boolean;
}

const AgreeHeaderButton = styled.button<IAgreeHeaderButtonProps>`
  width: 93.2rem;
  height: 6.5rem;
  border-radius: 5rem;
  background-color: ${({ notAllSelected }) =>
    notAllSelected ? '#F7F7F9' : ''};
  background-image: ${({ notAllSelected }) =>
    notAllSelected
      ? ''
      : 'linear-gradient(174deg, #f9e499 0%, #f2b2cf 33.33%, #b1b0d7 67.19%, #55abd7 100%)'};
  margin-bottom: 2.9rem;
  color: ${({ notAllSelected }) =>
    notAllSelected ? '#979797' : 'var(--color-white)'};
=======
`

const AgreeHeaderButton = styled.button`
  width: 93.2rem;
  height: 6.5rem;
  border-radius: 5rem;
  background-image: linear-gradient(174deg, #F9E499 0%, #F2B2CF 33.33%, #B1B0D7 67.19%, #55ABD7 100%);
  margin-bottom: 2.9rem;

  color: var(--color-white);
>>>>>>> ff4bb25 (Merge branch develop into main)
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: normal;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const AgreeFooterButton = styled.button`
  position: fixed;
  bottom: 0;
<<<<<<< HEAD
  left: 0;
  width: 100%;
  height: 8.7rem;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: normal;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#F7F7F9' : '')};
  background-image: ${({ disabled }) =>
    disabled
      ? ''
      : 'linear-gradient(174deg, #f9e499 0%, #f2b2cf 33.33%, #b1b0d7 67.19%, #55abd7 100%);'};
  color: ${({ disabled }) => (disabled ? '#979797' : 'var(--color-white)')};

  a {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
`;
=======
  width: 100vw;
  height: 8.7rem;
  text-align: center;
  color: var(--color-white);
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: normal;
  background-image: linear-gradient(174deg, #F9E499 0%, #F2B2CF 33.33%, #B1B0D7 67.19%, #55ABD7 100%);
`
>>>>>>> ff4bb25 (Merge branch develop into main)

/********************/
/** TermContent.tsx */
/********************/

const TermsHeaderBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: normal;
  color: var(--color-black);
  position: relative;
  margin-bottom: 2.8rem;

  p:first-child {
<<<<<<< HEAD
    color: #55abd7;
=======
    color: #55ABD7;
>>>>>>> ff4bb25 (Merge branch develop into main)
  }

  p:first-child::after {
    content: '*';
    position: absolute;
    font-size: 1.5rem;
    top: -0.2rem;
    left: 5.3rem;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const TermsBodyBox = styled.div`
  width: 93.2rem;
  height: 40.6rem;
  overflow: auto;

  border-radius: 1.3rem;
  border: 1px solid #979797;
<<<<<<< HEAD
  background: #fff;
  box-shadow: 0.4rem 0.4rem 1.1rem 0rem rgba(0, 0, 0, 0.15) inset;
=======
  background: #FFF;
  box-shadow: .4rem .4rem 1.1rem 0rem rgba(0, 0, 0, 0.15) inset;
>>>>>>> ff4bb25 (Merge branch develop into main)
  padding: 4.3rem 5.1rem;
  margin-bottom: 3.3rem;

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;

<<<<<<< HEAD
  &::-webkit-scrollbar {
=======
  &::-webkit-scrollbar{
>>>>>>> ff4bb25 (Merge branch develop into main)
    display: none;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const TermsFooterBox = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-black);
  font-size: 2.2rem;
  line-height: normal;
  gap: 7.6rem;
  margin-bottom: 6.1rem;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const TermsFooterAgreeBox = styled(TermsFooterBox)`
  align-items: center;
  font-weight: 600;
  gap: 1.54rem;

  button {
    width: 3.5rem;
    height: 3.5rem;
<<<<<<< HEAD
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset;
  }
`;
=======
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset;
  }
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const TermsFooterDisagreeBox = styled(TermsFooterBox)`
  align-items: center;
  font-weight: 500;
  gap: 1.54rem;

  button {
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid var(--color-black);
    background-color: var(--color-black);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

export {
  WholePageBox,
  AgreementTermsBox,
  AgreeHeaderButton,
  AgreeFooterButton,
  TermsHeaderBox,
  TermsBodyBox,
  TermsFooterBox,
  TermsFooterAgreeBox,
<<<<<<< HEAD
  TermsFooterDisagreeBox,
};
=======
  TermsFooterDisagreeBox
}
>>>>>>> ff4bb25 (Merge branch develop into main)
