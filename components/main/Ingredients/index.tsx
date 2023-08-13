//ingredients/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import { useRecoilValue, useRecoilState } from 'recoil';
import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';
=======
import { useRecoilValue } from 'recoil';
import * as S from './style';
import Link from 'next/link';
>>>>>>> ff4bb25 (Merge branch develop into main)
import Categories from '../Categories';
import {
  mainPostListState,
  StorageMethod,
<<<<<<< HEAD
  Product,
  userIdState,
  storeIdState,
  authState,
} from '../../../recoil/states';
=======
  ProductItem,
} from '../../../recoil/states';
import axios from 'axios';
>>>>>>> ff4bb25 (Merge branch develop into main)
import {
  API,
  productList,
  fetchProductCounts,
  getProductByCategory,
} from 'pages/api/api';
<<<<<<< HEAD
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
=======

const sortOptionList = ['가나다순', '빈도'];
type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};

interface productAll {
  id: number;
  name: string;
  image: string;
}

const Ingredients = ({ storageMethodFilter }: IngredientsProps) => {
  const postList = useRecoilValue(mainPostListState);

  const router = useRouter();
  const [data, setData] = useState(null);
  const [storeId, setStoreId] = useState(1);
  const [userId, setUserId] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<ProductItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<productAll | null>(
    null,
  );

  const [selectedSortOption, setSelectedSortOption] = useState('가나다순');
>>>>>>> ff4bb25 (Merge branch develop into main)
  const [activeLink, setActiveLink] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [linksVisible, setLinksVisible] = useState(false);

<<<<<<< HEAD
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

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
  /** 가게 아이디 user id 조회 ---------------------------------------------------------- */
  useEffect(() => {
    API.get('/api/product')
      .then(response => {
<<<<<<< HEAD
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
=======
        console.log('첫 storeId api 호출: ', response);
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
      fetchSortedProducts('가나다');
    }
  }, [storeId, userId]);

  /** 제품조회 API 완 ------------------------------------------------------------------ */
  const fetchSortedProducts = async (
>>>>>>> ff4bb25 (Merge branch develop into main)
    sortParameter: string,
    lastProductId?: number,
  ) => {
    try {
      const response = await productList(
        storeId,
        storageMethodFilter,
<<<<<<< HEAD
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

=======
        lastProductId,
        sortParameter,
      );
      const productAll = response.data.result;
      setSelectedProduct(response.data.result);

      console.log('응답 response data 값: ', productAll);
      setSortedProducts(prevProducts =>
        lastProductId ? [...prevProducts, ...productAll] : productAll,
      );
    } catch (error) {
      console.log(storeId);
>>>>>>> ff4bb25 (Merge branch develop into main)
      console.error('Error fetching sorted products:', error);
    }
  };

  const handleLoadMore = async () => {
    if (sortedProducts.length > 0) {
<<<<<<< HEAD
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
=======
      //마지막 제품 아이디
      const lastProductId = sortedProducts[sortedProducts.length - 1].id;
      fetchSortedProducts(
        selectedSortOption === '빈도' ? '빈도' : '가나다',
        lastProductId,
      );
    }
  };

  useEffect(() => {
    console.log('sortedProducts updated:', sortedProducts); //null
  }, [sortedProducts]);
>>>>>>> ff4bb25 (Merge branch develop into main)

  /** 가나다순, 빈도순 옵션 변경----------------------------------------------------- */
  const handleSortChange = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
<<<<<<< HEAD
    fetchSortedProducts(
      selectedCategory,
      selectedOption === '빈도순' ? '빈도' : '가나다',
    );
=======
    fetchSortedProducts(selectedOption === '빈도' ? '빈도' : '가나다');
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD

=======
  /** condition별 api 호출 완------------------------------------------------------ */
>>>>>>> ff4bb25 (Merge branch develop into main)
  const handleLinkClick = async (category: string, lastProductId?: number) => {
    setSelectedSortOption('가나다순');
    setActiveLink(category);
    setSelectedCategory(category);
<<<<<<< HEAD
    console.error(category);

    try {
      await fetchSortedProducts(category, '가나다', lastProductId);
=======

    try {
      const products = await getProductByCategory(
        category,
        storeId,
        storageMethodFilter,
        lastProductId,
        '가나다',
      );
      console.log('컨디션 별 호출 성공', products);
      setSortedProducts(products);
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
    router.push(`/home/product/${productId}`);
=======
    router.push(`/product/${productId}`);
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
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
=======
      <S.MainSection>
        {Array.isArray(sortedProducts) ? (
          sortedProducts.map(product => (
            <S.MainItem
              key={product.id}
              onClick={() => handleItemClick(product.id)}
            >
              <Link href={`home/product/${product.id}`} passHref>
                <S.MainItemImg>
                  {product.image && (
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt={product.name}
                      width={140}
                      height={140}
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
>>>>>>> ff4bb25 (Merge branch develop into main)
    </>
  );
};

export default Ingredients;
