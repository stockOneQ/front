// import Card from 'components/common/Card';
// import Image from 'next/image';
// import Link from "next/link";
// import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
// import searchIcon from 'public/assets/icons/community/searchIcon.svg';
// import { useState } from 'react';
// import styled from 'styled-components';
// import * as S from './style';
// import { useRecoilValue, useRecoilState } from "recoil";

// import { gradientsListState,selectedCategoryState } from "../../../recoil/states";


// const sortOptionList = ["가나다순", "빈도순"];

// /** 메인 화면 카테고리 */
// const Categories = () => {
//     const [searchBy, setSearchBy] = useState('가나다순'); // 카테고리 선택
//     const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글
//     const [activeLink, setActiveLink] = useState("전체");
//     const postList = useRecoilValue(gradientsListState);
//     const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

//     const expiredCount = postList.filter(
//         (item) => item.category === "afterDate").length;
//     const approachingExpirationCount = postList.filter(
//         (item) => item.category === "beforeDate").length;
//     const insufficientCount = postList.filter((item) => item.category === "no").length;
//     const totalCount = postList.length;

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//     };

//     const categoryToggleCloseHandler = () => {
//         setCategoryToggle(false);
//     }
//     const changeValueHandler = (value: string) => {
//         setSearchBy(value);
//         setCategoryToggle(false);
//     }

//     return (
//         <>
//             <S.ControlBar>
//                 <S.NavBar>
//                     <S.StyledLink
//                         isActive={activeLink === "전체"}
//                         onClick={() => handleLinkClick("전체")}
//                     >
//                         전체
//                         <S.CountValue>{totalCount}</S.CountValue>
//                     </S.StyledLink>
//                     <S.StyledLink
//                         isActive={activeLink === "afterDate"}
//                         onClick={() => handleLinkClick("afterDate")}
//                     >
//                         유통기한 지난 재료
//                         <S.CountValue>{expiredCount}</S.CountValue>
//                     </S.StyledLink>
//                     <S.StyledLink
//                         isActive={activeLink === "beforeDate"}
//                         onClick={() => handleLinkClick("beforeDate")}
//                     >
//                         유통기한 임박 재료
//                         <S.CountValue>{approachingExpirationCount}</S.CountValue>
//                     </S.StyledLink>
//                     <S.StyledLink
//                         isActive={activeLink === "no"}
//                         onClick={() => handleLinkClick("no")}
//                     >
//                         부족한 재료
//                         <S.CountValue>{insufficientCount}</S.CountValue>
//                     </S.StyledLink>
//                     {/* <S.SearchByBox> */}
//                     <S.SelectedValueButton onClick={() => { setCategoryToggle((prev) => (!prev)) }}>
//                         <p>{searchBy}</p>
//                         <Image className={`${categoryToggle ? 'categoryToggle' : ''}`} src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
//                     </S.SelectedValueButton>
//                     {categoryToggle && <S.OptionList>
//                         <li onClick={() => { changeValueHandler('가나다순') }}>가나다순</li>
//                         <li onClick={() => { changeValueHandler('빈도순') }}>빈도순</li>
//                     </S.OptionList>}
//                     {/* <SearchIconBox> */}
//                     <Image alt="search" src={searchIcon}></Image>
//                     {/* </SearchIconBox> */}
//                     <S.ActionButtonBox>
//                         <Link href="/new">
//                             <S.Add>+</S.Add>
//                         </Link>
//                     </S.ActionButtonBox>
//                     {/* </S.SearchByBox> */}
//                 </S.NavBar>

//             </S.ControlBar>
//         </>
//     );
// };



// export default Categories;