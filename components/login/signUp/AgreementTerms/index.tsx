import TermContent from './TermContent';
import * as S from './style';

/** 약관 동의 */
const AgreementTerms = () => {
  return (
    <S.WholePageBox>
      <S.AgreementTermsBox>
        <S.AgreeHeaderButton>모두 동의합니다.</S.AgreeHeaderButton>
        <TermContent />
        <TermContent />
      </S.AgreementTermsBox>
      <S.AgreeFooterButton>다음</S.AgreeFooterButton>
    </S.WholePageBox>
  );
};

export default AgreementTerms;