// components/Categories/index.tsx
import React, { useState } from 'react';
import DropDown from '../../common/DropDown/index';
import * as S from '../Ingredients/style';
<<<<<<< HEAD
import searchIcon from 'public/assets/icons/main/mainSearch.svg';
import addIcon from 'public/assets/icons/main/mainAdd.svg';
import searchCancel from 'public/assets/icons/main/seachCancel.svg';
=======
import searchIcon from 'public/assets/icons/community/search.svg';
>>>>>>> ff4bb25 (Merge branch develop into main)
import Image from 'next/image';
import Link from 'next/link';

type ControlBarProps = {
  activeLink: string;
  //개수 조회
  totalCount: number;
  expiredIngredientsCount: number;
  approachingExpirationCount: number;
  insufficientIngredientsCount: number;
  //정렬
  sortOptionList: string[];
  handleLinkClick: (link: string) => void;
  handleSortChange: (selectedOption: string) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  selectedSortOption: string;
};

const Categories: React.FC<ControlBarProps> = ({
  activeLink,
  totalCount,
  expiredIngredientsCount,
  approachingExpirationCount,
  insufficientIngredientsCount,
  sortOptionList,
  handleLinkClick,
  handleSortChange,
  handleSearchChange,
  searchTerm,
  selectedSortOption,
}) => {
  const [linksVisible, setLinksVisible] = useState(true);
  const [inputWidth, setInputWidth] = useState(158);
  const [inputHeight, setInputHeight] = useState(30);

  const toggleLinksVisibility = () => {
    setLinksVisible(prevState => !prevState);
    if (linksVisible) {
      setInputWidth(155);
    }
  };

<<<<<<< HEAD
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
=======
  const handleInputChange = event => {
>>>>>>> ff4bb25 (Merge branch develop into main)
    setInputHeight(event.target.scrollHeight);
    handleSearchChange(event);
  };
  return (
    <S.ControlBar>
      <S.NavBar>
        <div
          style={{
            display: 'flex',

            opacity: linksVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
<<<<<<< HEAD
          <S.StyledLinkTotal
            isactive={activeLink === '전체'}
            onClick={() => handleLinkClick('전체')}
          >
            전체 {totalCount}
          </S.StyledLinkTotal>
          <S.StyledLink
            isactive={activeLink === '유통기한 경과'}
            onClick={() => handleLinkClick('유통기한 경과')}
          >
            유통기한 지난 재료 {expiredIngredientsCount}
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === '유통기한 임박'}
            onClick={() => handleLinkClick('유통기한 임박')}
          >
            유통기한 임박 재료 {approachingExpirationCount}
          </S.StyledLink>
          <S.StyledLinkLack
            isactive={activeLink === '재고 부족'}
            onClick={() => handleLinkClick('재고 부족')}
          >
            부족한 재료 {insufficientIngredientsCount}
          </S.StyledLinkLack>

          <S.DropBoxContainer>
            <DropDown
              width={16}
              height={3.5}
              fontSize={1.79}
              toggleSize={10}
              toggleTopSize={48}
              list={sortOptionList}
              onChangeValue={handleSortChange}
              type={selectedSortOption}
            />
          </S.DropBoxContainer>
          <S.SearchBox>
            <Image
              alt="search"
              src={searchIcon}
              onClick={toggleLinksVisibility}
              width={27}
              height={35}
            />
          </S.SearchBox>

          <S.ActionButtonBox>
            <Link href="/home/new">
              <Image alt="add" src={addIcon} />
            </Link>
          </S.ActionButtonBox>
        </div>

        <S.SerchSection>
          <S.SeachBox
            style={{
              display: linksVisible ? 'none' : 'block',
              width: `${inputWidth}px`,
              opacity: linksVisible ? 0 : 1,
              transition: 'width 0.5s ease, opacity 0.5s ease',
            }}
          >
            <S.SearchPro>제품명</S.SearchPro>
            <S.Input
              type="text"
              placeholder="제품 검색"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Image
              src={searchCancel}
              alt="취소"
              width={15}
              height={15}
              onClick={toggleLinksVisibility}
            />
          </S.SeachBox>
        </S.SerchSection>
=======
          <S.StyledLink
            isactive={activeLink === '전체'}
            onClick={() => handleLinkClick('전체')}
          >
            전체
            <S.CountValue>{totalCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === 'afterDate'}
            onClick={() => handleLinkClick('afterDate')}
          >
            유통기한 지난 재료
            <S.CountValue>{expiredIngredientsCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === 'beforeDate'}
            onClick={() => handleLinkClick('beforeDate')}
          >
            유통기한 임박 재료
            <S.CountValue>{approachingExpirationCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === 'no'}
            onClick={() => handleLinkClick('no')}
          >
            부족한 재료
            <S.CountValue>{insufficientIngredientsCount}</S.CountValue>
          </S.StyledLink>

          <S.DropBoxContainer>
            <DropDown
              width={13.3}
              height={3.5}
              fontSize={1.3}
              toggleSize={10}
              toggleTopSize={48}
              list={sortOptionList}
              onChange={handleSortChange}
              type={selectedSortOption}
            />
          </S.DropBoxContainer>
        </div>

        <S.SerchSection>
          <Image
            alt="search"
            src={searchIcon}
            onClick={toggleLinksVisibility}
          />
          <S.Input
            type="text"
            placeholder="제품 검색"
            value={searchTerm}
            onChange={handleInputChange}
            // onChange={handleSearchChange} api 호출 함수
            style={{
              display: linksVisible ? 'none' : 'block',
              width: `${inputWidth}px`,
              transition: 'width 1s ease, height 0.3s ease', // Add transition properties
            }}
          />
        </S.SerchSection>

        <S.ActionButtonBox>
          <Link href="/home/new">
            <S.Add>+</S.Add>
          </Link>
        </S.ActionButtonBox>
>>>>>>> ff4bb25 (Merge branch develop into main)
      </S.NavBar>
    </S.ControlBar>
  );
};

export default Categories;
