import axios, { AxiosResponse } from 'axios';
import { ProductItem } from 'recoil/states';

interface User {

}

interface ProductCounts {
    approachingExpirationCount: number;
    expiredIngredientsCount: number;
    insufficientIngredientsCount: number;
    totalCount: number;
}


const API = axios.create({
    baseURL: ' ',
    headers: {
        'Content-type': 'application/json',
        'X-ACCESS-TOKEN': 'access_token_here',
    },
});


//정렬 제품 api 호출
export const productList = (
    store: string,
    condition: string,
    last: number,
    sort: string
): Promise<AxiosResponse<ProductItem[]>> =>
    API.get('/api/product/all', {
        params: {
            store,
            condition,
            last,
            sort,
        },
    });

export const countingProduct = async (
    store: string,
    condition: string
): Promise<AxiosResponse<ProductCounts>> => {
    try {
        const response = await axios.get('/api/product/count', {
            params: {
                store,
                condition,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product counts:', error);
        throw error;
    }
};

export const getProductByCategory = async (
    category: string,
    storageMethodFilter: string,
    selectedSortOption: string
  ) => {
    let response;
  
    if (category === 'beforeDate') {
      response = await axios.get('/api/product/close', {
        params: {
          store: storageMethodFilter,
          condition: 'beforeDate',
          last: 'lastProductId',
          sort: selectedSortOption,
        },
      });
    } else if (category === 'afterDate') {
      response = await axios.get('/api/product/pass', {
        params: {
          store: storageMethodFilter,
          condition: 'afterDate',
          last: 'lastProductId',
          sort: selectedSortOption,
        },
      });
    } else if (category === 'no') {
      response = await axios.get('/api/product/lack', {
        params: {
          store: storageMethodFilter,
          condition: 'no',
          last: 'lastProductId',
          sort: selectedSortOption,
        },
      });
    } else {
      // Default: "전체"
      response = await axios.get('/api/product/all', {
        params: {
          store: storageMethodFilter,
          condition: '전체',
          last: 'lastProductId',
          sort: selectedSortOption,
        },
      });
    }
  
    return response.data;
  };

  export const fetchProductDetails = async (
    id: number
    ): Promise<AxiosResponse<ProductItem>> => {
    try {
      const response = await axios.get(`/api/product/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching product details: " + error.message);
    }
  };

  //제품검색
  export const searchProducts = async (
    storageMethodFilter: string,
    searchValue: string
  ): Promise<AxiosResponse<ProductItem[]>> => {
    try {
      const response = await axios.get("/api/product", {
        params: {
          store: storageMethodFilter,
          condition: "전체", //activelink로 바뀔 예정
          name: searchValue,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error fetching search results: " + error.message);
    }
  };

  

  
