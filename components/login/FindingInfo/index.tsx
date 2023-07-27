import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import styled from 'styled-components';
import FindingID from './FindingID';

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


/** 아이디 비번 찾기 */
const FindingInfo = () => {
  return (
    <FindingInfoBox>
      <FindingLogoBox>
        <Image src={mainLogo} alt="main-logo" width={63.6} height={61} />
        <p>아이디 찾기</p>
      </FindingLogoBox>
      <FindingSection>
        <FindingID />
      </FindingSection>
    </FindingInfoBox>
  );
};

export default FindingInfo;