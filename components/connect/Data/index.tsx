import DropDown from 'components/common/DropDown';
import styled from 'styled-components';
import fileExist from 'public/assets/icons/connect/fileExists.svg';
import supervisorCategoryOpen from 'public/assets/icons/connect/supervisorCategoryOpen.svg';
import movePageL from 'public/assets/icons/connect/movePageL.svg';
import movePageR from 'public/assets/icons/connect/movePageR.svg';
import Image from 'next/image';
import DataDetail from './DataDetail';

const DataBox = styled.div`
  padding: 0 1.2rem 3.6rem;
`

const SelectSupervisorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 7.3rem 0 9.4rem;
  cursor: pointer;

  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
`

const DataNavBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-gray);
  position: relative;
`

const DataNav = styled.nav`
  color: #979797;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    width: 9.2rem;

    &:not(:last-child) {
      margin-right: 6rem;
    }
  }
`

const DataNavInputBox = styled.div`
  margin-left: auto;
  display: flex;

  input {
    width: 43.6rem;
    height: 3.5rem;
    background-color: var(--color-white);
    margin-left: -16.3rem;
    padding-left: 18.3rem;
    border-radius: 10rem;
  }
`

const DataDropDownBox = styled.div`
  position: absolute;
  top: 0;
  right: 27.3rem;
`

const Label = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  text-align: center;

  .label__1 {
    width: 9.2rem;
  }
  
  .label__2 {
    padding-left: 1.7rem;
  }

  .label__3 {
    margin-left: auto;
    width: 12.7rem;
  }

  .label__4 {
    padding: 0 5.5rem 0 3.6rem;
  }

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`

const LabelBox = styled(Label)`
  border-bottom: 1px solid var(--color-gray);
  margin-bottom: .1rem;
`

const DataListBox = styled(Label)`
  padding: 3.3rem 0;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .label__1 {
    font-weight: 600;
  }

  .label__2 {
  }

  .label__3 {
    color: #979797;
  }
`

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 3rem auto 0;
  width: 42.1rem;
  
  color: var(--color-black);
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: normal;
  
  p, img {
    cursor: pointer;
  }

  p {
    width: 5rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img:first-child {
    margin-right: auto;
  }

  img:last-child {
    margin-left: auto;
  }

  .pagination__active {
    color: var(--color-white);
    font-size: 2.2rem;
    background-color: var(--color-black);
    border-radius: 10rem;
  }
`

/** connect - 자료 페이지 */
const Data = () => {
  return (
    <>
      {/* <DataBox>
        <SelectSupervisorBox>
          <p>이혜리 슈퍼바이저</p>
          <Image src={supervisorCategoryOpen} alt='supervisor-toggle-icon' width={8} height={7} />
        </SelectSupervisorBox>
        <DataNavBox>
          <DataNav>
            <ul>
              <li>공지사항</li>
              <li>레시피</li>
              <li>행사내용</li>
              <li>기타</li>
            </ul>
          </DataNav>
          <DataNavInputBox>
            <DataDropDownBox>
              <DropDown width={16.3} height={3.5} fontSize={1.3} toggleSize={15} toggleTopSize={50} list={['글 제목', '글 내용']} />
            </DataDropDownBox>
            <input type='text' />
          </DataNavInputBox>
        </DataNavBox>
        <LabelBox>
          <p className='label__1'>번호</p>
          <p className='label__2'>제목</p>
          <p className='label__3'>작성일자</p>
          <p className='label__4'>이해리 슈퍼바이저</p>
        </LabelBox>
        <div>
          <DataListBox>
            <p className='label__1'>06</p>
            <div className='label__2'>
              <p>알바생 교육관련 6월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.06.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
          <DataListBox>
            <p className='label__1'>05</p>
            <div className='label__2'>
              <p>알바생 교육관련 5월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.05.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
          <DataListBox>
            <p className='label__1'>04</p>
            <div className='label__2'>
              <p>알바생 교육관련 4월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.04.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
          <DataListBox>
            <p className='label__1'>03</p>
            <div className='label__2'>
              <p>알바생 교육관련 3월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.03.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
          <DataListBox>
            <p className='label__1'>02</p>
            <div className='label__2'>
              <p>알바생 교육관련 2월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.02.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
          <DataListBox>
            <p className='label__1'>01</p>
            <div className='label__2'>
              <p>알바생 교육관련 1월 공지사항</p>
              <Image src={fileExist} alt='file-icon' width={15} height={12} />
            </div>
            <p className='label__3'>2023.01.13</p>
            <p className='label__4'>이혜리 슈퍼바이저</p>
          </DataListBox>
        </div>
        <PaginationBox>
          <Image src={movePageL} alt='pagination-move-left' width={16} height={9} />
          <p className='pagination__active'>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <Image src={movePageR} alt='pagination-move-right' width={16} height={9} />
        </PaginationBox>
      </DataBox> */}
      <DataDetail />
    </>
  );
};

export default Data;