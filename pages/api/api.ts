import axios, { AxiosResponse } from 'axios';
import { ProductItem } from 'recoil/states';

interface User {

}

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


export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {

      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_URL,
      'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
  });

// export const fetchDataFromApi = async (storeId, userId) => {
//     try {
//       const response = await axios.post('/api/product', {
//         storeID: storeId,
//         userID: userId,
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data from API:', error);
//       throw error;
//     }
//   };

//정렬 제품 api 호출
export const productList = (
    store: number,
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

// export const countingProduct = async (
//     store: string,
//     condition: string
// ): Promise<AxiosResponse<ProductCounts>> => {
//     try {
//         const response = await axios.get('/api/product/count', {
//             params: {
//                 store,
//                 condition,
//             },
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Error fetching product counts:', error);
//         throw error;
//     }
// };


//제품개수 
export const fetchProductCounts = async (store: string, condition: string): Promise<ProductCounts> => {
    try {
        const response = await API.get("/api/product/count", {
            params: {
                store,
                condition,
            },
        });

        const result: CountItem[] = response.data.result;

        const totalCountItem = result.find((item) => item.name === "Total");
        const passCountItem = result.find((item) => item.name === "Pass");
        const closeCountItem = result.find((item) => item.name === "Close");
        const lackCountItem = result.find((item) => item.name === "Lack");

        return {
            totalCount: totalCountItem?.total ?? 0,
            approachingExpirationCount: closeCountItem?.total ?? 0,
            expiredIngredientsCount: passCountItem?.total ?? 0,
            insufficientIngredientsCount: lackCountItem?.total ?? 0,
        };
    } catch (error) {
        console.error("Error fetching product counts:", error);
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
    sort: string
) => {
    let response;

    if (category === 'beforeDate') {
        response = await API.get('/api/product/close', {
            params: {
                store: store,//가게
                condition: condition,//냉장냉동상온
                last: last,
                sort:sort,//가나다순
            },
        });
    } else if (category === 'afterDate') {
        response = await API.get('/api/product/pass', {
            params: {
                store: store,//가게
                condition: condition,//냉장냉동상온
                last: last,
                sort:sort,//가나다순
            },
        });
    } else if (category === 'no') {
        response = await API.get('/api/product/lack', {
            params: {
                store: store,//가게
                condition: condition,//냉장냉동상온
                last: last,
                sort:sort,//가나다순
            },
        });
    } else {
        // Default: "전체"
        response = await API.get('/api/product/all', {
            params: {
                store: store,//가게
                condition: condition,//냉장냉동상온
                last: last,
                sort:sort,//가나다순
            },
        });
    }

    return response.data.result;
};

//상세페이지
// export const fetchProductDetails = async (
//     id: number
// ): Promise<AxiosResponse<ProductItem[]>> => {
//     try {
//       const response = await API.get(`/api/product/${id}`);
//       return response.data.result;
//       console.log(response);
//     } catch (error) {
//       throw new Error("Error fetching product details: ");
//     }
//   };
  
export const fetchProductDetails = async (id: number): Promise<ProductItem> => {
    try {
      const response = await API.get(`/api/product/${id}`);
      if (response.data) {
        return response.data.result; 
      } else {
        throw new Error("Response data is undefined or has unexpected structure");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw new Error("Error fetching product details: " + error.message);
    }
  };
  
//제품검색
export const searchProducts = async (
    storageMethodFilter: string,
    searchValue: string
): Promise<AxiosResponse<ProductItem[]>> => {
    try {
        const response = await API.get("/api/product", {
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



