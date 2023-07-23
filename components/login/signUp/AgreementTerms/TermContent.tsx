import Image from 'next/image';
import checkIc from 'public/assets/icons/login/checkIc.svg';
import * as S from './style';

/** 약관 */
const TermContent = () => {
  return (
    <div>
      <S.TermsHeaderBox>
        <p>[필수]</p>
        <p>약관 1</p>
      </S.TermsHeaderBox>
      <S.TermsBodyBox>
        <h3>* 약관 어쩌구 입니다. 제 1항 어쩌구</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ab omnis consequuntur quasi neque iusto? Nobis illum, accusantium incidunt quia culpa explicabo autem quidem blanditiis laboriosam officia adipisci dolore quibusdam!</p>
      </S.TermsBodyBox>
      <S.TermsFooterBox>
        <S.TermsFooterAgreeBox>
          <button>&nbsp;</button>
          <div>동의함</div>
        </S.TermsFooterAgreeBox>
        <S.TermsFooterDisagreeBox>
          <button>
            <Image src={checkIc} alt="checked-icon" width={21} height={13.5} />
          </button>
          <div>동의하지 않음</div>
        </S.TermsFooterDisagreeBox>
      </S.TermsFooterBox>
    </div>
  );
};

export default TermContent;