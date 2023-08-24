import { useState } from 'react';
import TermContent from './TermContent';
import TermContent2 from './TermContent2';
import * as S from './style';
import Link from 'next/link';

/** 약관 동의 */
const AgreementTerms = () => {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const allAgreeHandler = () => {
    setAgree1(true);
    setAgree2(true);
  };

  return (
    <S.WholePageBox>
      <S.AgreementTermsBox>
        <S.AgreeHeaderButton
          notAllSelected={!agree1 || !agree2}
          onClick={allAgreeHandler}
        >
          모두 동의합니다.
        </S.AgreeHeaderButton>
        <TermContent
          agree1={agree1}
          setAgree1={(bool: boolean) => {
            setAgree1(bool);
          }}
        />
        <TermContent2
          agree2={agree2}
          setAgree2={(bool: boolean) => {
            setAgree2(bool);
          }}
        />
      </S.AgreementTermsBox>
      <S.AgreeFooterButton disabled={!agree1 || !agree2}>
        <Link href={!agree1 || !agree2 ? '#' : '/login/sign-up'}>다음</Link>
      </S.AgreeFooterButton>
    </S.WholePageBox>
  );
};

export default AgreementTerms;
