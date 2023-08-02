import DropDown from 'components/common/DropDown';
import styled from 'styled-components';

const DataBox = styled.div`
  padding: 7rem;
`

/** connect - 자료 페이지 */
const Data = () => {
  return (
    <>
      <DataBox>
        <div>
          <nav>
            <ul>
              <li>공지사항</li>
              <li>레시피</li>
              <li>행사내용</li>
              <li>기타</li>
            </ul>
          </nav>
          <div>
            <DropDown width={16.3} height={3.5} fontSize={1.3} toggleSize={15} toggleTopSize={50} list={['글 제목', '글 내용']} />
            <input type="text" />
          </div>
        </div>
        <div>
          <p>번호</p>
          <p>제목</p>
          <p>작성일자</p>
          <p>이혜리 슈퍼바이저 ㅅ</p>
        </div>
        <div>
          <div>
            <p>03</p>
            <div>
              <p>알바생 교육관련 5월 공지사항</p>
              <div>이미지</div>
            </div>
            <div>2023.05.13</div>
            <div>이혜리 슈퍼바이저</div>
          </div>
        </div>
      </DataBox>
      <div>
        <p>&lt;</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>&lt;</p>
      </div>
    </>
  );
};

export default Data;