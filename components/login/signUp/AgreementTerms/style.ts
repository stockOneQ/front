import styled from 'styled-components';

/**************/
/** index.tsx */
/**************/

const WholePageBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
`

const AgreementTermsBox = styled.div`
  width: 97.2rem;
  padding: 11.1rem 2rem 2.5rem;
  margin: 0 auto;
`

const AgreeHeaderButton = styled.button`
  width: 93.2rem;
  height: 6.5rem;
  border-radius: 5rem;
  background-image: linear-gradient(174deg, #F9E499 0%, #F2B2CF 33.33%, #B1B0D7 67.19%, #55ABD7 100%);
  margin-bottom: 2.9rem;

  color: var(--color-white);
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: normal;
`

const AgreeFooterButton = styled.button`
  position: fixed;
  bottom: 0;
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
    color: #55ABD7;
  }

  p:first-child::after {
    content: '*';
    position: absolute;
    font-size: 1.5rem;
    top: -0.2rem;
    left: 5.3rem;
  }
`

const TermsBodyBox = styled.div`
  width: 93.2rem;
  height: 40.6rem;
  overflow: auto;

  border-radius: 1.3rem;
  border: 1px solid #979797;
  background: #FFF;
  box-shadow: .4rem .4rem 1.1rem 0rem rgba(0, 0, 0, 0.15) inset;
  padding: 4.3rem 5.1rem;
  margin-bottom: 3.3rem;

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;

  &::-webkit-scrollbar{
    display: none;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
`

const TermsFooterBox = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-black);
  font-size: 2.2rem;
  line-height: normal;
  gap: 7.6rem;
  margin-bottom: 6.1rem;
`

const TermsFooterAgreeBox = styled(TermsFooterBox)`
  align-items: center;
  font-weight: 600;
  gap: 1.54rem;

  button {
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset;
  }
`

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
`

export {
  WholePageBox,
  AgreementTermsBox,
  AgreeHeaderButton,
  AgreeFooterButton,
  TermsHeaderBox,
  TermsBodyBox,
  TermsFooterBox,
  TermsFooterAgreeBox,
  TermsFooterDisagreeBox
}