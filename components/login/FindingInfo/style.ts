import styled from 'styled-components';

const FindingInfoBox = styled.div`
  width: 52.8rem;
  margin: 13rem auto;
`

const FindingLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  width: 15.1rem;
  margin: 0 auto 3.4rem;

  p {
    color: #000;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: normal;
  }
`

const FindingSection = styled.section`
  width: 52.8rem;
`

const FindingByBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p { 
    width: 50%;
    text-align: center;
    padding: .9rem 0;
    border-bottom: 1px solid currentColor;
    cursor: pointer;

    color: #979797;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }

  .selected {
    color: var(--color-black);
    border-bottom-width: 3px;
  }
`

const FindingInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-bottom: 4.5rem;
  padding: 4.7rem 4.5rem 0;
`

const FindingButtonBox = styled.div`
  text-align: center;
`

export {
  FindingInfoBox,
  FindingLogoBox,
  FindingSection,
  FindingByBox,
  FindingInputBox,
  FindingButtonBox
}