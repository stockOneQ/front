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
import {API, productList, fetchProductCounts, fetchProductDetails, getProductByCategory } from 'pages/api/api';

const sortOptionList = ["가나다순", "빈도순"];
type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};

interface productAll {
  id: number;
  name : string;
  image : null;
}

const Ingredients = ({ productsToShow, storageMethodFilter }: IngredientsProps) => {
  const postList = useRecoilValue(mainPostListState);


  /** API 호출------------------------------------------------- */
  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */

  const router = useRouter();

  const [data, setData] = useState(null);

  const [storeId, setStoreId] = useState(1);
  const [userId, setUserId] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<ProductItem[]>([]);
  
  const [selectedSortOption, setSelectedSortOption] = useState("가나다순");
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState("");
  const [linksVisible, setLinksVisible] = useState(false);

  //storeid & userId 
  useEffect(() => {
    API.get("/api/product")
      .then((response) => {
        alert("요청성공");
        console.log("-------------------------")
        console.log("첫 storeId api 호출: ",response);
        // 업데이트 
        setData(response.data);

        setUserId(response.data?.result?.userId ?? null);
        setStoreId(response.data?.result?.storeId ?? null);
      })
      .catch((error) => {
        alert("요청실패");
        console.log(error);
      });
  }, [storeId, userId]);
  
  // api호출에서 받은 storeID 와 userId 로 전체 제품 조회 api 호출
  useEffect(() => {
    if (storeId && userId) {
      fetchSortedProducts(); 
    }
  }, [storeId, userId]);

  // sortedProducts 업데이트 
 
  /** 제품조회 API ------------------------------------------------------------------ */
  const fetchSortedProducts = async () => {
    try {
      const response = await productList(storeId, '냉동', 12, '가나다');
      const productAll = response.data;
      console.log("응답 response data 값: ",productAll);
      setSortedProducts(productAll);
      console.log("현재 sortedProducts : ", sortedProducts); //null
      
    } catch (error) {
      console.log(storeId);
      console.error('Error fetching sorted products:', error);
    }
  };

  //useEffect로 업데이트 후 업데이트된 값 반영되어야하는데 
  useEffect(() => {
      console.log("sortedProducts updated:", sortedProducts);//null 
    }, [sortedProducts]);

  //console.log(storageMethodFilter);
  
  
  /** 검색 API ------------------------------------------------------------------ */
  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    try {
      const response = await API.get("/api/product/search", {
        params: {
          store: storeId,
          condition: "전체", // 지금 내가 있는 카테고리여야 하는데 -> activeLink
          name: searchValue,
        },
      });

      const products = response.data;
      setSortedProducts(products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // // condition별 api 호출
  const handleLinkClick = async (category: string) => {
    setSelectedSortOption('가나다순');
    setActiveLink(category);
    setSelectedCategory(category);//음?

    try {
      const products = await getProductByCategory(category,storeId, category, selectedSortOption);
      setSortedProducts(products);
    } catch (error) {
      console.error('Error fetching sorted products:', error);
    }
  };
  // /** 정렬 옵션 ------------------------------------------------------------------ */

  //가나다순, 빈도순 옵션 변경
  const handleSortChange = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
    const sortParameter = selectedOption === "빈도순" ? "빈도순" : "가나다";

    fetchSortedProducts(sortParameter);
  };


  // /** 제품 개수 API------------------------------------------------------------------ */
  const [approachingExpirationCount, setApproachingExpirationCount] = useState<number>(0);
  const [expiredIngredientsCount, setExpiredIngredientsCount] = useState<number>(0);
  const [insufficientIngredientsCount, setInsufficientIngredientsCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);


  /** 제품 상세 페이지 조회 API------------------------------------------------------ */
  const handleItemClick = async (product: ProductItem) => {
    try {
      const productId = product.id;
      const productDetails = await fetchProductDetails(productId);
      console.log(productDetails);


      router.push(`/product/${productId}`);
    } catch (error) {
      console.error("Error handling item click:", error);
    }
  };

  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */

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

      {/* <MainSection
        selectedCategory={selectedCategory}
        filteredApproachingExpiration={filteredApproachingExpiration}
        filteredExpiredItems={filteredExpiredItems}
        filteredInsufficientIngredients={filteredInsufficientIngredients}
        searchResults={searchResults}
        filteredItems={filteredItems}
        renderItems={renderItems}
        searchTerm={searchTerm}
      /> */}


      {/* api 호출에 따른 MAIN SECTION */}
      {Array.isArray(sortedProducts) ? (
      sortedProducts.map((product) => (  
      <p>{product.name}</p>
      ))
    ) : (
      <p>Loading...</p> 
    )}

    </>
  );
};

export default Ingredients;