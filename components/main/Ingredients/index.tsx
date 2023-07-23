import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import exampleMain from 'public/assets/imgs/community/friendProfile.png';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import Link from 'next/link';
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import {  selectedProductState, mainPostListState, approachingExpirationState, expiredIngredientsState, insufficientIngredientsState } from '../../../recoil/states';

type IngredientsListItem = {
  id: number;
  category: string;
  productName: string;
};


const Ingredients = (): JSX.Element => {

  const postList = useRecoilValue(mainPostListState);

  const [searchBy, setSearchBy] = useState<string>('가나다순');
  const [categoryToggle, setCategoryToggle] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const setSelectedProduct = useSetRecoilState(selectedProductState);

  // 유통기한임박, 지난, 부족한재료
  const approachingExpiration = useRecoilValue(approachingExpirationState);
  const expiredIngredients = useRecoilValue(expiredIngredientsState);
  const insufficientIngredients = useRecoilValue(insufficientIngredientsState);

  // 카테고리 개수
  const approachingExpirationCount: number = postList.filter((item) => approachingExpiration.includes(item.id.toString())).length;
  const expiredIngredientsCount: number = postList.filter((item) => expiredIngredients.includes(item.id.toString())).length;
  const insufficientIngredientsCount: number = postList.filter((item) => insufficientIngredients.includes(item.id.toString())).length;
  const totalCount: number = postList.length;

  // 유통기한임박
  const [filteredApproachingExpiration, setFilteredApproachingExpiration] = useState<IngredientsListItem[]>([]);
  useEffect(() => {
    if (selectedCategory === 'beforeDate') {
      const approachingExpirationProducts = postList.filter((item) => approachingExpiration.includes(item.id.toString()));
      setFilteredApproachingExpiration(approachingExpirationProducts);
    } else {
      setFilteredApproachingExpiration([]);
    }
  }, [selectedCategory, approachingExpiration, postList]);
  // 유통기한지난
  const [filteredExpiredItems, setFilteredExpiredItems] = useState<IngredientsListItem[]>([]);
  useEffect(() => {
    if (selectedCategory === 'afterDate') {
      const expiredIngredientsProducts = postList.filter((item) => expiredIngredients.includes(item.id.toString()));
      setFilteredExpiredItems(expiredIngredientsProducts);
    } else {
      setFilteredExpiredItems([]);
    }
  }, [selectedCategory, expiredIngredients, postList]);
  // 부족한 재료
  const [filteredInsufficientIngredients, setFilteredInsufficientIngredients] = useState<IngredientsListItem[]>([]);
  useEffect(() => {
    if (selectedCategory === 'no') {
      const InsufficientIngredientsProducts = postList.filter((item) => insufficientIngredients.includes(item.id.toString()));
      setFilteredInsufficientIngredients(InsufficientIngredientsProducts);
    } else {
      setFilteredInsufficientIngredients([]);
    }
  }, [selectedCategory, insufficientIngredients, postList]);

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
    setSelectedCategory(link);
  };

  const categoryToggleCloseHandler = (): void => {
    setCategoryToggle(false);
  };

  const changeValueHandler = (value: string): void => {
    setSearchBy(value);
    setCategoryToggle(false);
  };

  const filteredItems: IngredientsListItem[] = selectedCategory === '전체'
    ? postList
    : postList.filter((item) => item.category === selectedCategory);


  const handleItemClick = (item: IngredientsListItem): void => {
    setSelectedProduct(item);
  };

  // 검색 기능
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };
  const searchResults: IngredientsListItem[] = filteredItems.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      {/* 카테고리 헤더 */}
      <S.ControlBar>
        <S.NavBar>
          <S.StyledLink
            isactive={activeLink === "전체"}
            onClick={() => handleLinkClick("전체")}
          >
            전체
            <S.CountValue>{totalCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === "afterDate"}
            onClick={() => handleLinkClick("afterDate")}
          >
            유통기한 지난 재료
            <S.CountValue>{expiredIngredientsCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === "beforeDate"}
            onClick={() => handleLinkClick("beforeDate")}
          >
            유통기한 임박 재료
            <S.CountValue>{approachingExpirationCount}</S.CountValue>
          </S.StyledLink>
          <S.StyledLink
            isactive={activeLink === "no"}
            onClick={() => handleLinkClick("no")}
          >
            부족한 재료
            <S.CountValue>{insufficientIngredientsCount}</S.CountValue>
          </S.StyledLink>

          <S.SelectedValueButton onClick={() => setCategoryToggle(prev => !prev)}>
            <p>{searchBy}</p>
            <Image
              className={`${categoryToggle ? 'categoryToggle' : ''}`}
              src={toggleButtonIcon}
              alt="my_page_icon"
              width={12}
              height={10}
            />
          </S.SelectedValueButton>
          {categoryToggle && (
            <S.OptionList>
              <li onClick={() => changeValueHandler('가나다순')}>가나다순</li>
              <li onClick={() => changeValueHandler('빈도순')}>빈도순</li>
            </S.OptionList>
          )}
          <S.SerchSection>
            <input type="text" placeholder="제품 검색" value={searchTerm} onChange={handleSearchChange} />
            <Image alt="search" src={searchIcon} />
          </S.SerchSection>

          <S.ActionButtonBox>
            <Link href="/new">
              <S.Add>+</S.Add>
            </Link>
          </S.ActionButtonBox>
        </S.NavBar>
      </S.ControlBar>

      <S.MainSection>
        {selectedCategory === 'beforeDate'
          ? filteredApproachingExpiration.map((value) => (
            <S.MainItem key={value.id} onClick={() => handleItemClick(value)}>
              <Link href={`/product/${value.id}`} key={value.id}>
                <S.MainItemImg>
                  <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
                </S.MainItemImg>
                <S.ProductName>
                  {value.productName}
                </S.ProductName>
              </Link>
            </S.MainItem>
          ))
          : selectedCategory === 'afterDate'
            ? filteredExpiredItems.map((value) => (
              <S.MainItem key={value.id} onClick={() => handleItemClick(value)}>
                <Link href={`/product/${value.id}`} key={value.id}>
                  <S.MainItemImg>
                    <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
                  </S.MainItemImg>
                  <S.ProductName>
                    {value.productName}
                  </S.ProductName>
                </Link>
              </S.MainItem>
            ))
            : selectedCategory === 'no'
              ? filteredInsufficientIngredients.map((value) => (
                <S.MainItem key={value.id} onClick={() => handleItemClick(value)}>
                  <Link href={`/product/${value.id}`} key={value.id}>
                    <S.MainItemImg>
                      <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
                    </S.MainItemImg>
                    <S.ProductName>
                      {value.productName}
                    </S.ProductName>
                  </Link>
                </S.MainItem>
              )) : searchTerm !== ''
                ? searchResults.map((item) => (
                  <S.MainItem key={item.id} onClick={() => handleItemClick(item)}>
                    <Link href={`/product/${item.id}`} key={item.id}>
                      <S.MainItemImg>
                        <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
                      </S.MainItemImg>
                      <S.ProductName>
                        {item.productName}
                      </S.ProductName>
                    </Link>
                  </S.MainItem>
                ))
                : filteredItems.map((value) => (
                  <S.MainItem key={value.id} onClick={() => handleItemClick(value)}>
                    <Link href={`/product/${value.id}`} key={value.id}>
                      <S.MainItemImg>
                        <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
                      </S.MainItemImg>
                      <S.ProductName>
                        {value.productName}
                      </S.ProductName>
                    </Link>
                  </S.MainItem>
                ))}
      </S.MainSection>

    </>
  );
};

export default Ingredients;