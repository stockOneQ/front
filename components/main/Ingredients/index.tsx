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

const sortOptionList = ["가나다순", "빈도순"];
type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};


const Ingredients = ({ productsToShow, storageMethodFilter }: IngredientsProps) => {
 // const postList = useRecoilValue(mainPostListState);

  // /** API 호출------------------------------------------------- */
  // /** --------------------------------------------------------- */
  // /** --------------------------------------------------------- */

  // const router = useRouter();

  // //정렬 제품 api 호출
  // const [sortedProducts, setSortedProducts] = useState([]);
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
  //         condition: "전체",
  //         name: searchValue,
  //       },
  //     });

  //     const products = response.data;
  //     setSortedProducts(products);
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };
  
  // /** 제품조회 API ------------------------------------------------------------------ */
  // const fetchSortedProducts = async (sortParameter) => {
  //   try {
  //     const response = await axios.get("/api/product/all", {
  //       params: {
  //         store: '냉동',
  //         condition: '전체', //all
  //         last: 'lastProductId',
  //         sort: sortParameter,
  //       },
  //     });

  //     const products = response.data;
  //     setSortedProducts(products);
  //   } catch (error) {
  //     console.error("Error fetching sorted products:", error);
  //   }
  // };

  // // condition별 api 호출
  // const handleLinkClick = async (category) => {
  //   setSelectedSortOption("가나다순");
  //   setActiveLink(category);
  //   setSelectedCategory(category); 

    
  //   let response;
  //   if (category === "beforeDate") {
  //     response = await axios.get("/api/product/close", {
  //       params: {
  //         store: storageMethodFilter,
  //         condition: "beforeDate",
  //         last: "lastProductId",
  //         sort: selectedSortOption,
  //       },
  //     });
  //   } else if (category === "afterDate") {
  //     response = await axios.get("/api/product/pass", {
  //       params: {
  //         store: storageMethodFilter,
  //         condition: "afterDate",
  //         last: "lastProductId",
  //         sort: selectedSortOption,
  //       },
  //     });
  //   } else if (category === "no") {
  //     response = await axios.get("/api/product/lack", {
  //       params: {
  //         store: storageMethodFilter,
  //         condition: "no",
  //         last: "lastProductId",
  //         sort: selectedSortOption,
  //       },
  //     });
  //   } else {
  //     // Default: "전체" 
  //     response = await axios.get("/api/product/all", {
  //       params: {
  //         store: storageMethodFilter,
  //         condition: "전체",
  //         last: "lastProductId",
  //         sort: selectedSortOption,
  //       },
  //     });
  //   }

  //   const products = response.data;
  //   setSortedProducts(products);
  // };
  // /** 정렬 옵션 ------------------------------------------------------------------ */

  // //가나다순, 빈도순 옵션 변경
  // const handleSortChange = (selectedOption) => {
  //   setSelectedSortOption(selectedOption);
  //   const sortParameter = selectedOption === "빈도순" ? "빈도순" : "가나다";

  //   fetchSortedProducts(sortParameter);
  // };


  // /** 제품 개수 API------------------------------------------------------------------ */
  // //제품 개수 api 호출
  // const [approachingExpirationCount, setApproachingExpirationCount] = useState(0);
  // const [expiredIngredientsCount, setExpiredIngredientsCount] = useState(0);
  // const [insufficientIngredientsCount, setInsufficientIngredientsCount] = useState(0);
  // const [totalCount, setTotalCount] = useState(0);

  // const fetchProductCounts = async (store: string, condition: string) => {
  //   try {
  //     const response = await axios.get("/api/product/count", {
  //       params: {
  //         store,
  //         condition,
  //       },
  //     });

  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching product counts:", error);
  //     return {};
  //   }
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const counts = await fetchProductCounts('냉동', '전체');

  //     // 업데이트
  //     setApproachingExpirationCount(counts.approachingExpirationCount);
  //     setExpiredIngredientsCount(counts.expiredIngredientsCount);
  //     setInsufficientIngredientsCount(counts.insufficientIngredientsCount);
  //     setTotalCount(counts.totalCount);
  //   };

  //   fetchData();
  // }, []);

  // /** 제품 상세 페이지 조회 API------------------------------------------------------ */
  // const fetchProductDetails = async (productId) => {
  //   try {
  //     const response = await axios.get(`/api/product/${productId}`);
  //     const productDetails = response.data;

  //    product응답 후 product 상세 정보 보이기 함수 구현 
  //     console.log(productDetails);
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //   }
  // };

  // const handleItemClick = (product) => {
  //   const productId = product.id;
  //   fetchProductDetails(productId);
  //   router.push(`/product/${productId}`);
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
            <Image src={exampleMain} alt="my_page_icon" width={140} height={140} />
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