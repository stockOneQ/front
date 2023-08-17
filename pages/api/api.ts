import axios, { AxiosResponse } from 'axios';
import { ProductItem, Product } from 'recoil/states';
import Cookies from 'js-cookie';

//제품개수
interface CountItem {
  name: string;
  total: number;
}

interface ProductCounts {
  approachingExpirationCount: number;
  expiredIngredientsCount: number;
  insufficientIngredientsCount: number;
  totalCount: number;
}

// let accessToken = localStorage.getItem('accessToken');
// const refreshToken = localStorage.getItem('refreshToken');

let accessToken = Cookies.get('accessToken');
let refreshToken = Cookies.get('refreshToken');
let fcmToken = Cookies.get('fcmToken');

console.log('accesstoken은 : ', accessToken);

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_URL,
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

export const APIRE = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${refreshToken}`,
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_URL,
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

const updateTokensInCookies = (newAccessToken, newRefreshToken) => {
  // accessToken과 refreshToken을 쿠키에 업데이트
  Cookies.set('accessToken', newAccessToken, { expires: 7 }); // 예: 7일 유효
  Cookies.set('refreshToken', newRefreshToken, { expires: 30 }); // 예: 30일 유효
};

API.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config; // 요청 원본 설정을 가져옴

    // 401 Unauthorized 에러이면서 요청이 재시도되지 않았을 때만 처리
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도 플래그를 설정하여 무한 재시도를 방지

      try {
        // refreshToken을 사용하여 새로운 토큰을 가져오기 위해 API 호출
        const refreshResponse = await APIRE.post(
          `/api/token/reissue`, // refreshToken을 보내 새로운 토큰을 받음
          { fcmToken },
        );

        const newAccessToken = refreshResponse.data.accessToken; // 새로운 accessToken
        accessToken = newAccessToken; // 현재 스크립트 범위의 accessToken을 업데이트
        const newRefreshToken = refreshResponse.data.refreshToken; // 새로운 accessToken
        refreshToken = newRefreshToken; // 현재 스크립트 범위의 accessToken을 업데이트

        // 업데이트된 토큰을 쿠키에 저장하는 함수 호출
        updateTokensInCookies(newAccessToken, newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 요청 헤더에 새로운 accessToken 추가

        // 업데이트된 accessToken을 사용하여 원래의 요청을 다시 시도
        return API(originalRequest);
      } catch (refreshError) {
        // refreshToken으로 새로운 토큰을 받아오지 못한 경우
        // 로그아웃 등의 처리를 할 수 있음
        return Promise.reject(refreshError);
      }
    }

    // 다른 에러의 경우는 그대로 반환
    return Promise.reject(error);
  },
);

interface ApiResponse {
  status: string;
  errorCode: string;
  message: string;
  result: Product[];
}

// 정렬 제품 api 호출
export const productList = (
  store: number,
  condition: string,
  last: number,
  sort: string,
): Promise<AxiosResponse<ApiResponse>> =>
  API.get('/api/product/all', {
    params: {
      store,
      condition,
      last,
      sort,
    },
  });

//제품개수
export const fetchProductCounts = async (
  store: string,
  condition: string,
): Promise<ProductCounts> => {
  try {
    const response = await API.get('/api/product/count', {
      params: {
        store,
        condition,
      },
    });

    const result: CountItem[] = response.data.result;

    const totalCountItem = result.find(item => item.name === 'Total');
    const passCountItem = result.find(item => item.name === 'Pass');
    const closeCountItem = result.find(item => item.name === 'Close');
    const lackCountItem = result.find(item => item.name === 'Lack');

    return {
      totalCount: totalCountItem?.total ?? 0,
      approachingExpirationCount: closeCountItem?.total ?? 0,
      expiredIngredientsCount: passCountItem?.total ?? 0,
      insufficientIngredientsCount: lackCountItem?.total ?? 0,
    };
  } catch (error) {
    console.error('Error fetching product counts:', error);
    return {
      totalCount: 0,
      approachingExpirationCount: 0,
      expiredIngredientsCount: 0,
      insufficientIngredientsCount: 0,
    };
  }
};

export const getProductByCategory = async (
  category: string, //전체 임박, 경과, 부족
  store: number,
  condition: string,
  last: number,
  sort: string,
) => {
  let response;

  if (category === 'beforeDate') {
    response = await API.get('/api/product/close', {
      params: {
        store: store, //가게
        condition: condition, //냉장냉동상온
        last: last,
        sort: sort, //가나다순
      },
    });
  } else if (category === 'afterDate') {
    response = await API.get('/api/product/pass', {
      params: {
        store: store, //가게
        condition: condition, //냉장냉동상온
        last: last,
        sort: sort, //가나다순
      },
    });
  } else if (category === 'no') {
    response = await API.get('/api/product/lack', {
      params: {
        store: store, //가게
        condition: condition, //냉장냉동상온
        last: last,
        sort: sort, //가나다순
      },
    });
  } else {
    // Default: "전체"
    response = await API.get('/api/product/all', {
      params: {
        store: store, //가게
        condition: condition, //냉장냉동상온
        last: last,
        sort: sort, //가나다순
      },
    });
  }

  return response.data.result;
};

/** 제품 삭제  */
export const handleDeleteProduct = async (productId: number) => {
  try {
    await API.delete(`/api/product/delete/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

/** 제품 수정  */
export const addProduct = async (
  id: number,
  formDatas: FormData,
): Promise<void> => {
  try {
    await API.patch(`/api/product/edit/${id}`, formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('제품 수정 성공');
  } catch (error) {
    console.error('Error adding product:', error);
    throw new Error('Error adding product: ');
  }
};

export const fetchProductDetails = async (id: number): Promise<ProductItem> => {
  try {
    const response = await API.get(`/api/product/${id}`);
    if (response.data) {
      return response.data.result;
    } else {
      throw new Error('Response data is undefined or has unexpected structure');
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw new Error('Error fetching product details: ');
  }
};

//제품검색
export const searchProducts = async (
  storageMethodFilter: string,
  searchValue: string,
): Promise<AxiosResponse<ProductItem[]>> => {
  try {
    const response = await API.get('/api/product', {
      params: {
        store: storageMethodFilter,
        condition: '전체', //activelink로 바뀔 예정
        name: searchValue,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching search results: ' + error);
  }
};
