import DropDown from 'components/common/DropDown';
import fileExist from 'public/assets/icons/connect/fileExists.svg';
import supervisorCategoryOpen from 'public/assets/icons/connect/supervisorCategoryOpen.svg';
import movePageL from 'public/assets/icons/connect/movePageL.svg';
import movePageR from 'public/assets/icons/connect/movePageR.svg';
import Image from 'next/image';
import DataDetail from './DataDetail';
import { useRef, useState } from 'react';
import * as S from './style';

/** connect - 자료 페이지 */
const Data = () => {
  const [activeNum, setActiveNum] = useState(0);
  const [temp, setTemp] = useState(true);

  return (
    <>
      {temp && (
        <S.DataBox>
          <S.SelectSupervisorBox>
            <p>이혜리 슈퍼바이저</p>
            <Image
              src={supervisorCategoryOpen}
              alt="supervisor-toggle-icon"
              width={8}
              height={7}
            />
          </S.SelectSupervisorBox>
          <S.DataNavBox>
            <S.DataNav activeNum={activeNum}>
              <ul>
                <li
                  className={activeNum === 0 ? 'active' : ''}
                  onClick={() => {
                    setActiveNum(0);
                  }}
                >
                  공지사항
                </li>
                <li
                  className={activeNum === 1 ? 'active' : ''}
                  onClick={() => {
                    setActiveNum(1);
                  }}
                >
                  레시피
                </li>
                <li
                  className={activeNum === 2 ? 'active' : ''}
                  onClick={() => {
                    setActiveNum(2);
                  }}
                >
                  행사내용
                </li>
                <li
                  className={activeNum === 3 ? 'active' : ''}
                  onClick={() => {
                    setActiveNum(3);
                  }}
                >
                  기타
                </li>
              </ul>
            </S.DataNav>
            <S.DataNavInputBox>
              <S.DataDropDownBox>
                <DropDown
                  width={16.3}
                  height={3.5}
                  fontSize={1.3}
                  toggleSize={15}
                  toggleTopSize={50}
                  list={['글 제목', '글 내용']}
                />
              </S.DataDropDownBox>
              <input type="text" />
            </S.DataNavInputBox>
          </S.DataNavBox>
          <S.LabelBox>
            <p className="label__1">번호</p>
            <p className="label__2">제목</p>
            <p className="label__3">작성일자</p>
            <p className="label__4">이해리 슈퍼바이저</p>
          </S.LabelBox>
          <div>
            <S.DataListBox>
              <p className="label__1">06</p>
              <div className="label__2">
                <p>알바생 교육관련 6월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.06.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
            <S.DataListBox
              onClick={() => {
                setTemp(false);
              }}
            >
              <p className="label__1">05</p>
              <div className="label__2">
                <p>알바생 교육관련 5월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.05.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
            <S.DataListBox>
              <p className="label__1">04</p>
              <div className="label__2">
                <p>알바생 교육관련 4월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.04.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
            <S.DataListBox>
              <p className="label__1">03</p>
              <div className="label__2">
                <p>알바생 교육관련 3월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.03.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
            <S.DataListBox>
              <p className="label__1">02</p>
              <div className="label__2">
                <p>알바생 교육관련 2월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.02.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
            <S.DataListBox>
              <p className="label__1">01</p>
              <div className="label__2">
                <p>알바생 교육관련 1월 공지사항</p>
                <Image src={fileExist} alt="file-icon" width={15} height={12} />
              </div>
              <p className="label__3">2023.01.13</p>
              <p className="label__4">이혜리 슈퍼바이저</p>
            </S.DataListBox>
          </div>
          <S.PaginationBox>
            <Image
              src={movePageL}
              alt="pagination-move-left"
              width={16}
              height={9}
            />
            <p className="pagination__active">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <Image
              src={movePageR}
              alt="pagination-move-right"
              width={16}
              height={9}
            />
          </S.PaginationBox>
        </S.DataBox>
      )}
      {!temp && <DataDetail />}
    </>
  );
};

export default Data;
