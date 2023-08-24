import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './style';
import logoIcon from '../../../public/assets/icons/login/mainLogo.svg';

interface Delete {
  id: string;
  title: string;
  date: string;
  author: string;
}

const MypageDelete = () => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReason(event.target.value);
  };

  const handleSubmit = () => {
    // 선택한 이유(selectedReason)를 서버에 전송
    console.log(selectedReason);
  };

  return (
    <S.DeleteSection>
      <S.DeletContents>
        <Image src={logoIcon} alt="main-logo" width={67.5} height={65} />
        <S.DeleteTitle>떠나시는 이유가 무엇인가요?</S.DeleteTitle>
        <S.DeleteReasonForm>
          <label>
            <input
              type="checkbox"
              value="원하는 기능이 없어요"
              checked={selectedReason === '원하는 기능이 없어요'}
              onChange={handleReasonChange}
            />
            원하는 기능이 없어요
          </label>
          <label>
            <input
              type="checkbox"
              value="디자인이 불편해요"
              checked={selectedReason === '디자인이 불편해요'}
              onChange={handleReasonChange}
            />
            디자인이 불편해요
          </label>
          <label>
            <input
              type="checkbox"
              value="개인정보를 삭제하고 싶어요"
              checked={selectedReason === '개인정보를 삭제하고 싶어요'}
              onChange={handleReasonChange}
            />
            개인정보를 삭제하고 싶어요
          </label>
          <label>
            <input
              type="checkbox"
              value="기타"
              checked={selectedReason === '기타'}
              onChange={handleReasonChange}
            />
            기타
          </label>
        </S.DeleteReasonForm>
        <S.DeleteAgreement>
          <S.AgreementText>
            <h1> 탈퇴 안내</h1>
            <p>
              - 1년 이내로 동일한 아이디로 가입이 불가합니다. <br />
              탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니
              신중하게 선택하시길 바랍니다.
              <br />
              - 아래와 같은 회원정보는 스톡원큐 서비스 개선을 위해 탈퇴 시점
              이후로 최대 1년 동안 보관됩니다. 서비스 개선 이외의 목적으로는
              사용되지 않습니다.
              <br />
              - 사장님 : 이름, 생년월일, 이메일, 전화번호, 아이디, 매장
              정보(이름)
              <br />
              - 알바생 : 이름, 생년월일, 이메일, 전화번호, 아이디, 매장
              정보(이름)
              <br />
              - 슈퍼바이저 : 이름, 생년월일, 이메일, 전화번호, 아이디, 기업명
              <br />
              - 탈퇴 후, 위와 같은 정보 외에는 모두 삭제되어 복구가
              불가능합니다.
              <br />
              - 게시글, 댓글, 친구 정보
              <br />
            </p>
          </S.AgreementText>
        </S.DeleteAgreement>

        <S.Text>
          <h2>
            탈퇴가 진행되면, 더 이상 스톡원큐의 서비스를 이용하실 수 없습니다.
          </h2>
          <p>탈퇴를 진행하시겠습니까?</p>
        </S.Text>

        <S.SubmitButton onClick={handleSubmit}>
          <p>회원탈퇴</p>
        </S.SubmitButton>
      </S.DeletContents>
    </S.DeleteSection>
  );
};

export default MypageDelete;
