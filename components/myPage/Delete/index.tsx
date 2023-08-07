import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './style';
import logoIcon from '../../../public/assets/icons/login/mainLogo.svg'

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
        <>
        <S.DeleteSection>
            <S.DeletContents>
            <Image src={logoIcon} alt="main-logo" width={67.5} height={65} />
            <S.DeleteTitle>떠나시는 이유가 무엇인가요?</S.DeleteTitle>
        <S.DeleteReasonForm>
                <label>
                    <input
                        type="checkbox"
                        value="원하는 기능이 없어요"
                        checked={selectedReason === "원하는 기능이 없어요"}
                        onChange={handleReasonChange}
                    />
                    원하는 기능이 없어요
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="디자인이 불편해요"
                        checked={selectedReason === "디자인이 불편해요"}
                        onChange={handleReasonChange}
                    />
                    디자인이 불편해요
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="개인정보를 삭제하고 싶어요"
                        checked={selectedReason === "개인정보를 삭제하고 싶어요"}
                        onChange={handleReasonChange}
                    />
                    개인정보를 삭제하고 싶어요
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="기타"
                        checked={selectedReason === "기타"}
                        onChange={handleReasonChange}
                    />
                    기타
                </label>
               
            </S.DeleteReasonForm>
            <S.DeleteAgreement>
                <S.AgreementText>
                <h1>약관 어쩌구 입니다. 제 1항 어쩌구</h1>
                <p>약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 
                    제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다.
                    제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구
                    약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다.
                    제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구
                    약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1항 어쩌구약관 어쩌구 입니다. 제 1</p>

                </S.AgreementText>
                
            </S.DeleteAgreement>

            <h2>탈퇴가 진행되면, 더 이상 스톡원큐의 서비스를 이용하실 수 없습니다.</h2>
            <S.SubmitButton onClick={handleSubmit}>탈퇴</S.SubmitButton>
            </S.DeletContents>
            
            </S.DeleteSection>
        </>
    );
};

export default MypageDelete;
