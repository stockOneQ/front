//ingredients/index.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import exampleMain from 'public/assets/imgs/community/friendProfile.png';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import Link from 'next/link';
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import { selectedProductState, mainPostListState, approachingExpirationState, expiredIngredientsState, insufficientIngredientsState, StorageMethod, ProductItem } from '../../../recoil/states';

// 추후 제거 후 다 ProductItem 교체 예정
type IngredientsListItem = {
  id: number;
  category: string;
  productName: string;

};


type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};


const Ingredients = ({ productsToShow, storageMethodFilter }: IngredientsProps) => {
  const postList = useRecoilValue(mainPostListState);

  const [searchBy, setSearchBy] = useState<string>('가나다순');
  const [categoryToggle, setCategoryToggle] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const setSelectedProduct = useSetRecoilState(selectedProductState);

  //정렬
  const [sortOrder, setSortOrder] = useState<'가나다순' | '빈도순'>('가나다순');
  const changeValueHandler = (value: string): void => {
    setSearchBy(value);
    setCategoryToggle(false);

    // Toggle the sort order based on the selected value
    setSortOrder((prevSortOrder) => (prevSortOrder === '가나다순' ? '빈도순' : '가나다순'));
  };

  // 유통기한임박, 지난, 부족한재료
  const approachingExpiration = useRecoilValue(approachingExpirationState);
  const expiredIngredients = useRecoilValue(expiredIngredientsState);
  const insufficientIngredients = useRecoilValue(insufficientIngredientsState);

  // 카테고리 개수
  const approachingExpirationCount: number = productsToShow.filter((item) =>
    approachingExpiration.includes(item.id.toString())
  ).length;
  const expiredIngredientsCount: number = productsToShow.filter((item) =>
    expiredIngredients.includes(item.id.toString())
  ).length;
  const insufficientIngredientsCount: number = productsToShow.filter((item) =>
    insufficientIngredients.includes(item.id.toString())
  ).length;
  const totalCount: number = productsToShow.length;

  // 유통기한임박
  const [filteredApproachingExpiration, setFilteredApproachingExpiration] = useState<IngredientsListItem[]>([]);
  useEffect(() => {
    if (selectedCategory === 'beforeDate') {
      const approachingExpirationProducts = postList.filter(
        (item) =>
          approachingExpiration.includes(item.id.toString()) &&
          (selectedCategory === '전체' || item.storageMethod === storageMethodFilter)
      );
      setFilteredApproachingExpiration(approachingExpirationProducts);
    } else {
      setFilteredApproachingExpiration([]);
    }
  }, [selectedCategory, storageMethodFilter, approachingExpiration, postList]);

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

  const renderItems = (items: ProductItem[]) => {
    const sortedItems = sortOrder === '가나다순'
      ? items.sort((a, b) => a.productName.localeCompare(b.productName))
      : items.sort((a, b) => parseInt(b.orderingFrequency) - parseInt(a.orderingFrequency));

    return sortedItems.map((value) => (
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
    ));
  };

  const categoryToggleCloseHandler = (): void => {
    setCategoryToggle(false);
  };

  //필터링해서 제품 정렬
  const filteredItems: ProductItem[] = selectedCategory === '전체'
    ? postList.filter((item) => item.storageMethod === storageMethodFilter)
    : postList.filter((item) => item.storageMethod === storageMethodFilter && item.category === selectedCategory);

  const sortedFilteredItems = sortOrder === '가나다순'
    ? filteredItems.sort((a, b) => a.productName.localeCompare(b.productName))
    : filteredItems.sort((a, b) => parseInt(b.orderingFrequency) - parseInt(a.orderingFrequency));


  const handleItemClick = (item: ProductItem): void => {
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
              <li onClick={() => changeValueHandler('가나다순')} className={sortOrder === '가나다순' ? 'selected' : ''}>가나다순</li>
              <li onClick={() => changeValueHandler('빈도순')} className={sortOrder === '빈도순' ? 'selected' : ''}>빈도순</li>
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
        {selectedCategory === 'beforeDate' && renderItems(filteredApproachingExpiration)}
        {selectedCategory === 'afterDate' && renderItems(filteredExpiredItems)}
        {selectedCategory === 'no' && renderItems(filteredInsufficientIngredients)}
        {searchTerm !== '' ? renderItems(searchResults) : renderItems(filteredItems)}
      </S.MainSection>

    </>
  );
};

export default Ingredients;