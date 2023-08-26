//ingredients/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';
import Categories from '../Categories';
import {
  mainPostListState,
  StorageMethod,
  Product,
  userIdState,
  storeIdState,
  authState,
} from '../../../recoil/states';
import {
  API,
  productList,
  fetchProductCounts,
  getProductByCategory,
} from 'pages/api/api';
import loading from 'public/assets/icons/main/spinnerT.gif';

const sortOptionList = ['가나다순', '빈도순'];

type IngredientsProps = {
  storageMethodFilter: StorageMethod;
};

const Ingredients = ({ storageMethodFilter }: IngredientsProps) => {
  const postList = useRecoilValue(mainPostListState);
  const [data, setData] = useState({});
  const [authStatus] = useRecoilState(authState);

  const router = useRouter();
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>('가나다순');
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [linksVisible, setLinksVisible] = useState(false);

  /** storId 저장 */
  const [userId, setUserId] = useRecoilState(userIdState);
  const [storeId, setStoreId] = useRecoilState(storeIdState);
  const [isLoading, setIsLoading] = useState(false);

  const [hasReloaded, setHasReloaded] = useState(false);

  useEffect(() => {
    if (authStatus && !hasReloaded) {
      setIsLoading(true); // Show loading indicator
      router.reload();
      setHasReloaded(true);
    }
  }, [authStatus, hasReloaded]);

  /** 가게 아이디 user id 조회 ---------------------------------------------------------- */
  useEffect(() => {
    API.get('/api/product')
      .then(response => {
        const { storeId: fetchedStoreId, userId: fetchedUserId } =
          response.data.result;
        setUserId(fetchedUserId);
        setStoreId(fetchedStoreId); // storeId 업데이트
        console.log(fetchedStoreId); // 업데이트된 값 출력
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]); // storeId 제거

  useEffect(() => {
    if (selectedCategory) {
      fetchSortedProducts(selectedCategory, '가나다');
    }
  }, [selectedCategory, storeId]); // storeId 추가

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
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        router.push('/login'); // Redirect to login page if token is missing
        return; // Return early to prevent further processing
      }

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
    fetchProductCounts(storeId, storageMethodFilter)
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
    router.push(`/home/product/${productId}`);
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
      {isLoading ? (
        <S.Loading>
          <Image src={loading} alt="loading" width={100} height={100} />
        </S.Loading>
      ) : (
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
      )}

      <S.LoadMoreButton onClick={handleLoadMore}>+</S.LoadMoreButton>
    </>
  );
};

export default Ingredients;
