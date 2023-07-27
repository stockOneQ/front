import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import FindingID from './FindingID';
import * as S from './style';

/** 아이디 비번 찾기 */
const FindingInfo = () => {
  return (
    <S.FindingInfoBox>
      <S.FindingLogoBox>
        <Image src={mainLogo} alt="main-logo" width={63.6} height={61} />
        <p>아이디 찾기</p>
      </S.FindingLogoBox>
      <S.FindingSection>
        <FindingID />
      </S.FindingSection>
    </S.FindingInfoBox>
  );
};

export default FindingInfo;