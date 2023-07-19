import Image from 'next/image';
import exampleMain from 'public/assets/imgs/community/friendProfile.png';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import { useState } from 'react';
import { useRecoilValue } from "recoil";
import * as S from './style';
import Link from "next/link";
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import { gradientsListState } from "../../../recoil/states";

/** 메인 냉장 제품 페이지 **/
const Gradients = () => {
  const [searchBy, setSearchBy] = useState('가나다순'); // 카테고리 선택
  const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글
  const [activeLink, setActiveLink] = useState("전체");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const postList = useRecoilValue(gradientsListState);

  // 카테고리 클릭 호출 함수 
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setSelectedCategory(link);
    };


  const categoryToggleCloseHandler = () => {
    setCategoryToggle(false);
    };
  const changeValueHandler = (value: string) => {
    setSearchBy(value);
    setCategoryToggle(false);
    };

  // 카테고리 항목 수 계산 
  const expiredCount = postList.filter((item) => item.category === "afterDate").length;
  const approachingExpirationCount = postList.filter((item) => item.category === "beforeDate").length;
  const insufficientCount = postList.filter((item) => item.category === "no").length;
  const totalCount = postList.length;
  
  // postList선택한 범주를 기반으로 필터링
  const filteredItems = selectedCategory === "전체"
    ? postList // "전체"인 경우, 모두 보여주기
    : postList.filter(item => item.category === selectedCategory);

  return (
    <>
    {/* 카테고리 헤더 */}
     <S.ControlBar>
        <S.NavBar>
          <S.StyledLink
            isActive={activeLink === "전체"}
            onClick={() => handleLinkClick("전체")}>
            전체
            <S.CountValue>{totalCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isActive={activeLink === "afterDate"}
            onClick={() => handleLinkClick("afterDate")}>
            유통기한 지난 재료
            <S.CountValue>{expiredCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isActive={activeLink === "beforeDate"}
            onClick={() => handleLinkClick("beforeDate")}>
            유통기한 임박 재료
            <S.CountValue>{approachingExpirationCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isActive={activeLink === "no"}
            onClick={() => handleLinkClick("no")}>
            부족한 재료
            <S.CountValue>{insufficientCount}</S.CountValue>
          </S.StyledLink>

          <S.SelectedValueButton onClick={() => { setCategoryToggle((prev) => (!prev)) }}>
            <p>{searchBy}</p>
            <Image className={`${categoryToggle ? 'categoryToggle' : ''}`} src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
          </S.SelectedValueButton>
          {categoryToggle && <S.OptionList>
            <li onClick={() => { changeValueHandler('가나다순') }}>가나다순</li>
            <li onClick={() => { changeValueHandler('빈도순') }}>빈도순</li>
          </S.OptionList>}
          
          <Image alt="search" src={searchIcon}></Image>

          <S.ActionButtonBox>
            <Link href="/new">
              <S.Add>+</S.Add>
            </Link>
          </S.ActionButtonBox>
        </S.NavBar>

      </S.ControlBar>

      {/* 제품 리스트 */}
      <S.MainSection>
        {filteredItems.map((item) => (
          <S.MainItem key={item.id}>
            <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
            <S.ProductName>{item.productName}</S.ProductName>
          </S.MainItem>
        ))}
      </S.MainSection>
    </>
  );
};

export default Gradients;