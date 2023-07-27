import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import FindingID from './FindingID';
import * as S from './style';
import FindingPW from './FindingPW';

/** 아이디 비번 찾기 */
const FindingInfo = () => {
  return (
    <S.FindingInfoBox>
      <S.FindingLogoBox>
        <Image src={mainLogo} alt="main-logo" width={63.6} height={61} />
        <p>비밀번호 찾기</p>
      </S.FindingLogoBox>
      <S.FindingSection>
        {/* <FindingID /> */}
        <FindingPW />
      </S.FindingSection>
    </S.FindingInfoBox>
  );
};

export default FindingInfo;