import Card from 'components/common/Card';
import Image from 'next/image';
import postClose from 'public/assets/icons/connect/postClose.svg';
import link from 'public/assets/icons/connect/link.svg';
import fileDownload from 'public/assets/icons/connect/fileDownload.svg';
import styled from 'styled-components';

const DetailHeaderBox = styled.div`
  text-align: center;
  position: relative;

  color: var(--color-black);
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 11rem;

  img {
    position: absolute;
    top: 1.5rem;
    right: 4.9rem;
    transform: translateY(-50%);
  }
`

const DetailTitleBox = styled.div`
  height: 6.6rem;
  display: flex;
  align-items: center;
  gap: 2.6rem;
  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  line-height: normal;
  margin-bottom: 2.2rem;
  
  p {
    font-weight: 600;
    margin: 0 0 0 .8rem;
    width: 5.8rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    font-weight: 500;
    border-radius: 3rem;
    border: 1px solid #F7F7F9;
    background: var(--color-white);
    padding: 2rem 3.3rem;
    width: 98.4rem;
    text-align: start;
  }
`

const DetailFileBox = styled.div`
  width: 100%;
  height: 8.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  color: #979797;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`

const DetailFileLabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  background-color: #F7F7F9;
  padding-left: 2.45rem;
  height: 3.4rem;
  overflow: hidden;
  
  img {
    margin-right: .2rem;
  }
`

const DetailFileDownloadBox = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  padding: 0 2.7rem 0 7.2rem;
  border: 1px solid #F7F7F9;
  background: var(--color-white);
  
  img, p {
    cursor: pointer;
  }

  img {
    margin-left: auto;
  }
  
  p {
    border-radius: 1.5rem;
  }
`

const DetailContentBox = styled.div`
  width: 100%;
  height: 43.6rem;
  margin-top: 2rem;

  border-radius: 3rem;
  overflow: hidden;
  background: var(--color-white);
`

const DetailContentLabelBox = styled.p`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  height: 4.5rem;
  background-color: #F7F7F9;

  p {
    margin: 0 0 0 .8rem;
    width: 5.8rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DetailContentTextBox = styled.div`
  height: 39.2rem;
  padding: 2.5rem;
  border-radius: 30px;
  background-color: var(--color-white);

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`

/** 자료 상세보기 페이지 */
const DataDetail = () => {
  return (
    <>
      <DetailHeaderBox>
        <p>레시피</p>
        <Image src={postClose} alt='post-close-button' width={15} height={15} />
      </DetailHeaderBox>
      <Card width='111.5rem' height='67.3rem' padding='2rem'>
        <DetailTitleBox>
          <p>제목</p>
          <div>알바생 교육 관련 5월 공지사항</div>
        </DetailTitleBox>
        <DetailFileBox>
          <DetailFileLabelBox>
            <Image src={link} alt='file-link-icon' width={20} height={20} />
            <p>파일첨부</p>
            <p>2.3MB</p>
          </DetailFileLabelBox>
          <DetailFileDownloadBox>
            <p>(필독) 5월 공지사항.docx</p>
            <Image src={fileDownload} alt='file-download-icon' width={20} height={19} />
          </DetailFileDownloadBox>
        </DetailFileBox>
        <DetailContentBox>
          <DetailContentLabelBox>
            <p>내용</p>
          </DetailContentLabelBox>
          <DetailContentTextBox>
            <p>이전 4월과 달라진 점이 있습니다. 확인 부탁드립니다.</p>
          </DetailContentTextBox>
        </DetailContentBox>
      </Card>
    </>
  );
};

export default DataDetail;