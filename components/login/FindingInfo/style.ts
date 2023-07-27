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

export {
  FindingInfoBox,
  FindingLogoBox,
  FindingSection
}