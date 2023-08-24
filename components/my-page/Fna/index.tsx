//com/my-page/Fna/index.tsx

import movePageL from 'public/assets/icons/connect/movePageL.svg';
import movePageR from 'public/assets/icons/connect/movePageR.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as S from './style';
import useScroll from 'hooks/useScroll';
import { API } from 'pages/api/api';

interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const MypageFnA = () => {
  const [showAnswers, setShowAnswers] = useState<boolean[]>([]);
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

  /** FNA 조회 ---------------------------------------------------------- */
  useEffect(() => {
    API.get('/api/user/fa')
      .then(response => {
        console.log('RESPONSE', response.data);
        setFaqData(response.data.result);
        setShowAnswers(new Array(response.data.result.length).fill(false));
      })
      .catch(error => {
        alert('요청실패');
        console.log(error);
      });
  }, []);

  const [posts, setPosts] = useState<Post[]>([]);

  const [activeNum, setActiveNum] = useState(0); // navigation active 상태 주기 위함
  const [temp, setTemp] = useState(true); // 상세 페이지 연결하려고 임시로 만듦. 삭제 예정
  const [isSelectSupervisor, setIsSelectSupervisor] = useState(true); // 슈퍼바이저 고르기

  const { hideScroll, scrollHandler } = useScroll();

  return (
    <>
      {temp && (
        <S.DataBox>
          <S.DataNavBox>
            <S.DataNav activeNum={activeNum}>
              <ul>
                <li
                  className={activeNum === 0 ? 'active' : ''}
                  onClick={() => {
                    setActiveNum(0);
                  }}
                >
                  F&A
                </li>
              </ul>
            </S.DataNav>
          </S.DataNavBox>
          <S.HorizontalRule />
          <S.FnaBoard>
            <S.PostId>번호</S.PostId>
            <S.PostTitle>제목</S.PostTitle>
            <S.PostDate>작성 일자</S.PostDate>
            <S.PostAuthor>작성자</S.PostAuthor>
          </S.FnaBoard>
          <S.HorizontalRule />
          <div>
            {faqData.map((faqItem, index) => (
              <S.DataListBox
                key={index}
                onClick={() =>
                  setShowAnswers(prevState => {
                    const newShowAnswers = [...prevState];
                    newShowAnswers[index] = !newShowAnswers[index]; // Toggle the answer for the specific question
                    return newShowAnswers;
                  })
                }
              >
                <p className="label__1">
                  {(index + 1).toString().padStart(2, '0')}
                </p>
                <S.Fna>
                  <button className="label__2">{faqItem.question}</button>
                  {showAnswers[index] && ( // Render answer if showAnswers for this question is true
                    <S.Answer className="answer show">
                      <p>{faqItem.answer}</p>
                    </S.Answer>
                  )}
                </S.Fna>

                <p className="label__3">2023.08.24</p>
                <p className="label__4">스톡원큐</p>
              </S.DataListBox>
            ))}
          </div>
          <S.PaginationBox>
            <Image
              src={movePageL}
              alt="pagination-move-left"
              width={16}
              height={9}
            />
            <p className="pagination__active">1</p>

            <Image
              src={movePageR}
              alt="pagination-move-right"
              width={16}
              height={9}
            />
          </S.PaginationBox>
        </S.DataBox>
      )}
    </>
  );
};

export default MypageFnA;
