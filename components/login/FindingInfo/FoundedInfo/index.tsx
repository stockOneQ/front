import Image from 'next/image';
import passwordMissMatching from 'public/assets/icons/login/passwordMissMatching.svg';
import { useState } from 'react';
import * as S from './style';

/** 찾기 완료 */
const FoundedInfo = () => {
  const [isFindingID, setIsFindingID] = useState(false);
  const [isFounded, setIsFounded] = useState(false);

  return (
    <S.FoundedInfoBox>
      <S.FoundedInfoSmallBox>
        {isFounded && (
          <>
            <S.FoundedLeftTextBox>
              <p>스톡원큐</p>
              <p>stock12</p>
            </S.FoundedLeftTextBox>
            <S.FoundedRightTextBox>
              <p>님의 {isFindingID ? '아이디' : '비밀번호'}는</p>
              <p>입니다.</p>
            </S.FoundedRightTextBox>
          </>
        )}
        {!isFounded && (
          <S.NotFoundedBox>
            <Image src={passwordMissMatching} alt="mismatch_icon" width={46} height={46} />
            <p>일치하는 {isFindingID ? '아이디' : '비밀번호'}가 없습니다.</p>
          </S.NotFoundedBox>
        )}
      </S.FoundedInfoSmallBox>
      <S.FoundedButtonBox isFounded={isFounded}>
        <button className="btn1">로그인</button>
        {!isFounded && <button className="btn2">아이디 찾기</button>}
        {(!isFounded || (isFounded && isFindingID)) && <button className="btn3">비밀번호 찾기</button>}
      </S.FoundedButtonBox>
    </S.FoundedInfoBox>
  );
};

export default FoundedInfo;