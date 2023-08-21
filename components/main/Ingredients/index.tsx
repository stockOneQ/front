//ingredients/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as S from './style';
import Link from 'next/link';
import Categories from '../Categories';
import {
  mainPostListState,
  StorageMethod,
  Product,
} from '../../../recoil/states';
import axios from 'axios';
import {
  API,
  productList,
  fetchProductCounts,
  getProductByCategory,
} from 'pages/api/api';

const sortOptionList = ['가나다순', '빈도순'];

type IngredientsProps = {
  storageMethodFilter: StorageMethod;
};

const Ingredients = ({ storageMethodFilter }: IngredientsProps) => {
  const postList = useRecoilValue(mainPostListState);

  const router = useRouter();
  const [data, setData] = useState(null);
  const [storeId, setStoreId] = useState(1);
  const [userId, setUserId] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  const [selectedSortOption, setSelectedSortOption] =
    useState<string>('가나다순');
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [linksVisible, setLinksVisible] = useState(false);

  /** 가게 아이디 user id 조회 ---------------------------------------------------------- */
  useEffect(() => {
    API.get('/api/product')
      .then(response => {
        // 업데이트
        setData(response.data);
        setUserId(response.data?.result?.userId ?? null);
        setStoreId(response.data?.result?.storeId ?? null);
      })
      .catch(error => {
        alert('요청실패');
        console.log(error);
      });
  }, [storeId, userId]);

  // api호출에서 받은 storeID 와 userId 로 전체 제품 조회 api 호출
  useEffect(() => {
    if (storeId && userId) {
      fetchSortedProducts(selectedCategory, '가나다');
    }
  }, [storeId, userId, selectedCategory]);

  /** 제품조회 API 완 ------------------------------------------------------------------ */
  const fetchSortedProducts = async (
    category: string,
    sortParameter: string,
    lastProductId?: number,
  ) => {
    try {
      const response = await productList(
        storeId,
        storageMethodFilter,
        category,
        lastProductId !== undefined ? lastProductId : -1,
        sortParameter,
      );

      const productAll = response.data.result;

      setSortedProducts(prevProducts =>
        lastProductId ? [...prevProducts, ...productAll] : productAll,
      );
    } catch (error) {
      console.error('Error fetching sorted products:', error);
    }
  };

  const handleLoadMore = async () => {
    if (sortedProducts.length > 0) {
      // 마지막 제품 아이디
      const lastProductId = sortedProducts[sortedProducts.length - 1].id;

      if (lastProductId) {
        // lastProductId가 정의되었을 때만 실행
        fetchSortedProducts(
          selectedCategory,
          selectedSortOption === '빈도순' ? '빈도' : '가나다',
          lastProductId,
        );
      }
    }
  };

  useEffect(() => {}, [sortedProducts]);

  /** 가나다순, 빈도순 옵션 변경----------------------------------------------------- */
  const handleSortChange = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
    fetchSortedProducts(
      selectedCategory,
      selectedOption === '빈도순' ? '빈도' : '가나다',
    );
  };

  /** 검색 API 완------------------------------------------------------------------ */
  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    try {
      const response = await API.get('/api/product/search', {
        params: {
          store: storeId,
          condition: storageMethodFilter,
          name: searchValue,
        },
      });

      const products = response.data.result;
      setSortedProducts(products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleLinkClick = async (category: string, lastProductId?: number) => {
    setSelectedSortOption('가나다순');
    setActiveLink(category);
    setSelectedCategory(category);
    console.error(category);

    try {
      await fetchSortedProducts(category, '가나다', lastProductId);
    } catch (error) {
      console.error('Error fetching sorted products:', error);
    }
  };

  /** 제품 개수 API------------------------------------------------------------------ */
  const [approachingExpirationCount, setApproachingExpirationCount] =
    useState<number>(0);
  const [expiredIngredientsCount, setExpiredIngredientsCount] =
    useState<number>(0);
  const [insufficientIngredientsCount, setInsufficientIngredientsCount] =
    useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    fetchProductCounts(storeId.toString(), storageMethodFilter)
      .then(counts => {
        console.log('제품개수 api 성공', counts);
        setTotalCount(counts.totalCount);
        setApproachingExpirationCount(counts.approachingExpirationCount);
        setExpiredIngredientsCount(counts.expiredIngredientsCount);
        setInsufficientIngredientsCount(counts.insufficientIngredientsCount);
      })
      .catch(error => {
        console.error('Error fetching product counts:', error);
      });
  }, [sortedProducts]);

  const handleItemClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

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
        selectedSortOption={selectedSortOption}
      />

      {/* api 호출에 따른 MAIN SECTION */}
      <S.MainSection hideScroll={true}>
        {Array.isArray(sortedProducts) ? (
          sortedProducts.map(product => (
            <S.MainItem
              key={product.id}
              onClick={() => handleItemClick(product.id)}
            >
              <Link href={`/home/product/${product.id}`} passHref>
                <S.MainItemImg>
                  {product.image && (
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt={product.name}
                      width={158}
                      height={158}
                    />
                  )}
                </S.MainItemImg>
                <S.ProductName>{product.name}</S.ProductName>
              </Link>
            </S.MainItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </S.MainSection>

      <S.LoadMoreButton onClick={handleLoadMore}>
        <span>&gt;</span>
      </S.LoadMoreButton>
    </>
  );
};

export default Ingredients;
