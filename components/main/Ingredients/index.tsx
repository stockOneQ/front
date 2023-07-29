//ingredients/index.tsx
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './style';
import exampleMain from 'public/assets/imgs/community/friendProfile.png';
import Link from 'next/link';
import Categories from '../Categories';
import MainSection from '../ItemShow';
import { selectedProductState, mainPostListState, approachingExpirationState, expiredIngredientsState, insufficientIngredientsState, StorageMethod, ProductItem } from '../../../recoil/states';
import { sortTypeState } from "recoil/states";
import axios from 'axios';
import { productList, countingProduct, fetchProductDetails, getProductByCategory } from 'pages/api/api';

const sortOptionList = ["가나다순", "빈도순"];
type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};



const Ingredients = ({ productsToShow, storageMethodFilter }: IngredientsProps) => {
  //const postList = useRecoilValue(mainPostListState);

  ////console.log(storageMethodFilter);
  /** API 호출------------------------------------------------- */
  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */

  // const router = useRouter();

  // //정렬 제품 api 호출
  // //const [sortedProducts, setSortedProducts] = useState([]);
  // const [sortedProducts, setSortedProducts] = useState<ProductItem[]>([]);
  // const [selectedSortOption, setSelectedSortOption] = useState("가나다순");
  // const [activeLink, setActiveLink] = useState<string>('전체');
  // const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  // const [searchTerm, setSearchTerm] = useState("");
  // const [linksVisible, setLinksVisible] = useState(false);

  // /** 검색 API ------------------------------------------------------------------ */
  // const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchValue = event.target.value;
  //   setSearchTerm(searchValue);

  //   try {
  //     const response = await axios.get("/api/product", {
  //       params: {
  //         store: storageMethodFilter,
  //         condition: "전체", // 지금 내가 있는 카테고리여야 하는데 -> activeLink
  //         name: searchValue,
  //       },
  //     });

  //     const products = response.data;
  //     setSortedProducts(products);
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  // // 검색 전체일 때 test코드 
  // // const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  // //   const searchValue = event.target.value;
  // //   setSearchTerm(searchValue);
  
  // //   try {
  // //     const products = await searchProducts(storageMethodFilter, searchValue);
  // //     setSortedProducts(products);
  // //   } catch (error) {
  // //     console.error("Error handling search change:", error);
  // //   }
  // // };
  // /** 제품조회 API ------------------------------------------------------------------ */
  // const fetchSortedProducts = async (sortParameter: string) => {
  //   try {
  //     const response = await productList('가게id', '냉동', 0, sortParameter);

  //     const products = response.data;
  //     setSortedProducts(products);
  //   } catch (error) {
  //     console.error('Error fetching sorted products:', error);
  //   }
  // };

  // // condition별 api 호출
  // const handleLinkClick = async (category: string) => {
  //   setSelectedSortOption('가나다순');
  //   setActiveLink(category);
  //   setSelectedCategory(category);//음?

  //   try {
  //     const products = await getProductByCategory(category,'가게id', category, selectedSortOption);
  //     setSortedProducts(products);
  //   } catch (error) {
  //     console.error('Error fetching sorted products:', error);
  //   }
  // };
  // /** 정렬 옵션 ------------------------------------------------------------------ */

  // //가나다순, 빈도순 옵션 변경
  // const handleSortChange = (selectedOption: string) => {
  //   setSelectedSortOption(selectedOption);
  //   const sortParameter = selectedOption === "빈도순" ? "빈도순" : "가나다";

  //   fetchSortedProducts(sortParameter);
  // };


  // // /** 제품 개수 API------------------------------------------------------------------ */
  // const [approachingExpirationCount, setApproachingExpirationCount] = useState<number>(0);
  // const [expiredIngredientsCount, setExpiredIngredientsCount] = useState<number>(0);
  // const [insufficientIngredientsCount, setInsufficientIngredientsCount] = useState<number>(0);
  // const [totalCount, setTotalCount] = useState<number>(0);

  // useEffect(() => {
  //   fetchProductCounts('냉동', '전체')
  //     .then((counts) => {
  //       setTotalCount(counts.totalCount);
  //       setApproachingExpirationCount(counts.approachingExpirationCount);
  //       setExpiredIngredientsCount(counts.expiredIngredientsCount);
  //       setInsufficientIngredientsCount(counts.insufficientIngredientsCount);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching product counts:', error);
  //     });
  // }, []);
  // /** 제품 상세 페이지 조회 API------------------------------------------------------ */
  // const handleItemClick = async (product: ProductItem) => {
  //   try {
  //     const productId = product.id;
  //     const productDetails = await fetchProductDetails(productId);
  //     console.log(productDetails);


  //     router.push(`/product/${productId}`);
  //   } catch (error) {
  //     console.error("Error handling item click:", error);
  //   }
  // };

  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */

  //정렬 전역 상태를 업데이트
  // Recoil States
  const postList = useRecoilValue(mainPostListState);
  const setSortType = useSetRecoilState(sortTypeState);
  const setSelectedProduct = useSetRecoilState(selectedProductState);

  // Local States
  const [searchBy, setSearchBy] = useState<string>('가나다순');
  const [categoryToggle, setCategoryToggle] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Sorting
  const [sortOrder, setSortOrder] = useState<'가나다순' | '빈도순'>('가나다순');
  const changeValueHandler = (value: string): void => {
    setSearchBy(value);
    setCategoryToggle(false);
    setSortOrder((prevSortOrder) => (prevSortOrder === '가나다순' ? '빈도순' : '가나다순'));
  };
  // Recoil States - 유통기한임박, 지난, 부족한재료
  const approachingExpiration = useRecoilValue(approachingExpirationState);
  const expiredIngredients = useRecoilValue(expiredIngredientsState);
  const insufficientIngredients = useRecoilValue(insufficientIngredientsState);

  // Category Counts
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

  // Filtered Lists
  const [filteredApproachingExpiration, setFilteredApproachingExpiration] = useState<ProductItem[]>([]);
  const [filteredExpiredItems, setFilteredExpiredItems] = useState<ProductItem[]>([]);
  const [filteredInsufficientIngredients, setFilteredInsufficientIngredients] = useState<ProductItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    // Filtered Lists - 유통기한임박
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

    // Filtered Lists - 유통기한지난
    if (selectedCategory === 'afterDate') {
      const expiredIngredientsProducts = postList.filter((item) => expiredIngredients.includes(item.id.toString()));
      setFilteredExpiredItems(expiredIngredientsProducts);
    } else {
      setFilteredExpiredItems([]);
    }

    // Filtered Lists - 부족한 재료
    if (selectedCategory === 'no') {
      const InsufficientIngredientsProducts = postList.filter((item) => insufficientIngredients.includes(item.id.toString()));
      setFilteredInsufficientIngredients(InsufficientIngredientsProducts);
    } else {
      setFilteredInsufficientIngredients([]);
    }

    // Filtered Lists - 필터링해서 제품 정렬
    const filteredItems = selectedCategory === '전체'
      ? postList.filter((item) => item.storageMethod === storageMethodFilter)
      : postList.filter((item) => item.storageMethod === storageMethodFilter && item.category === selectedCategory);

    const sortedFilteredItems = sortOrder === '가나다순'
      ? filteredItems.sort((a, b) => a.productName.localeCompare(b.productName))
      : filteredItems.sort((a, b) => parseInt(b.orderingFrequency) - parseInt(a.orderingFrequency));

    setFilteredItems(sortedFilteredItems);
  }, [selectedCategory, storageMethodFilter, approachingExpiration, expiredIngredients, insufficientIngredients, postList, sortOrder]);

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
    setSelectedCategory(link);
  };

  const renderItems = (items: ProductItem[]) => {
    let sortedItems: ProductItem[];

    if (searchBy === '가나다순') {
      sortedItems = items.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (searchBy === '빈도순') {
      sortedItems = items.sort((a, b) => parseInt(b.orderingFrequency) - parseInt(a.orderingFrequency));
    } else {
      sortedItems = items; 
    }

    return sortedItems.map((value) => (
      <S.MainItem key={value.id} onClick={() => handleItemClick(value)}>
        <Link href={`/product/${value.id}`} key={value.id}>
          <S.MainItemImg>
          {value.imageInfo && <Image src={value.imageInfo} alt={value.productName} width={140} height={140}/>}
            {/* <Image src={exampleMain} alt="my_page_icon" width={140} height={140} /> */}
          </S.MainItemImg>
          <S.ProductName>
            {value.productName}
          </S.ProductName>
        </Link>
      </S.MainItem>
    ));
  };

  const handleItemClick = (item: ProductItem): void => {
    setSelectedProduct(item);
  };

  const handleSortChange = (selectedSort: string) => {
    setSearchBy(selectedSort);
    setSortType(selectedSort);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const searchResults: ProductItem[] = filteredItems.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // 검색 기능


  return (
    <>
      {/* 카테고리 헤더 */}
      <Categories
        activeLink={activeLink}
        totalCount={totalCount}
        expiredIngredientsCount={expiredIngredientsCount}
        approachingExpirationCount={approachingExpirationCount}
        insufficientIngredientsCount={insufficientIngredientsCount}
        sortOptionList={sortOptionList}
        handleLinkClick={handleLinkClick}
        handleSortChange={handleSortChange}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />

      <MainSection
        selectedCategory={selectedCategory}
        filteredApproachingExpiration={filteredApproachingExpiration}
        filteredExpiredItems={filteredExpiredItems}
        filteredInsufficientIngredients={filteredInsufficientIngredients}
        searchResults={searchResults}
        filteredItems={filteredItems}
        renderItems={renderItems}
        searchTerm={searchTerm}
      />


      {/* api 호출에 따른 MAIN SECTION */}
      {/* {sortedProducts.map((product) => (
        <S.MainItem key={product.id} onClick={() => handleItemClick(product)}>
          <Link href={`/product/${product.id}`} key={product.id}>
            <S.MainItemImg>
              <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
            </S.MainItemImg>
            <S.ProductName>
              {product.productName}
            </S.ProductName>
          </Link>
        </S.MainItem>
      ))} */}

    </>
  );
};

export default Ingredients;