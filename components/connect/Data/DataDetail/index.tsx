import Card from 'components/common/Card';
import Image from 'next/image';
import postClose from 'public/assets/icons/connect/postClose.svg';
import link from 'public/assets/icons/connect/link.svg';
import fileDownload from 'public/assets/icons/connect/fileDownload.svg';
import * as S from './style';

/** 자료 상세보기 페이지 */
const DataDetail = () => {
  return (
    <>
      <S.DetailHeaderBox>
        <p>레시피</p>
        <Image src={postClose} alt="post-close-button" width={15} height={15} />
      </S.DetailHeaderBox>
      <Card width="111.5rem" height="67.3rem" padding="2rem">
        <S.DetailTitleBox>
          <p>제목</p>
          <div>알바생 교육 관련 5월 공지사항</div>
        </S.DetailTitleBox>
        <S.DetailFileBox>
          <S.DetailFileLabelBox>
            <Image src={link} alt="file-link-icon" width={20} height={20} />
            <p>파일첨부</p>
            <p>2.3MB</p>
          </S.DetailFileLabelBox>
          <S.DetailFileDownloadBox>
            <p>(필독) 5월 공지사항.docx</p>
            <Image
              src={fileDownload}
              alt="file-download-icon"
              width={20}
              height={19}
            />
          </S.DetailFileDownloadBox>
        </S.DetailFileBox>
        <S.DetailContentBox>
          <S.DetailContentLabelBox>
            <p>내용</p>
          </S.DetailContentLabelBox>
          <S.DetailContentTextBox>
            <p>이전 4월과 달라진 점이 있습니다. 확인 부탁드립니다.</p>
          </S.DetailContentTextBox>
        </S.DetailContentBox>
      </Card>
    </>
  );
};

export default DataDetail;
