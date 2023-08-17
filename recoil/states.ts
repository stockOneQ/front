import { atom, selector, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

/** ----------------메인 페이지------------- */

// export interface ProductItem {
//   id: number;
//   category: string;
//   productName: string;
//   price:  number;
//   seller: string;
//   receiptYear: string;
//   receiptMonth: string;
//   receiptDay: string;
//   expirationYear: string;
//   expirationMonth: string;
//   expirationDay: string;
//   ingredientLocation: string;
//   requiredQuantity: string;
//   quantity: string;
//   orderingSite: string;
//   orderingFrequency: string;
//   imageInfo: string;
//   storageMethod: string;
// };

export interface ProductItem {
  id: number;
  name: string;
  image: string | null;
}

export const mainPostListState = atom<ProductItem[]>({
  key: 'mainPostListState',
  default: [],
});

export const handleProductClick = () => {
  const setSelectedProductState = useSetRecoilState(selectedProductState);
  return useCallback(
    (item: GradientsListItem) => {
      setSelectedProductState(item);
    },
    [setSelectedProductState],
  );
};
//유통기한 임박재료
export const approachingExpirationState = atom<string[]>({
  key: 'approachingExpirationState',
  default: [],
});

//유통기한 지난 재료
export const expiredIngredientsState = atom<number[]>({
  key: 'expiredIngredientsState',
  default: [],
});

//부족한 재료
export const insufficientIngredientsState = atom<number[]>({
  key: 'insufficientIngredientsState',
  default: [],
});

//보관 방식
export const storageMethodState = atom<string[]>({
  key: 'storageMethodState',
  default: [],
});

export const postMainTitleState = atom<string>({
  key: 'postMainTitleState',
  default: '',
});

export const newpostListState = atom({
  key: 'newpostListState',
  default: [],
});

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: '',
});

export const searchResultsState = selector({
  key: 'searchResultsState',
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const newpostList = get(newpostListState);

    if (searchTerm.trim() !== '') {
      return newpostList.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      return newpostList;
    }
  },
});

export const filteredItemsState = selector({
  key: 'filteredItemsState',
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const searchResults = get(searchResultsState);

    if (searchTerm.trim() !== '') {
      return searchResults;
    } else {
      return searchResults;
    }
  },
});

export type IngredientsListItem = {
  id: number;
  category: string;
  productName: string;
};

export const ingredientsListState = atom<IngredientsListItem[]>({
  key: 'ingredientsListState',
  default: [],
});

export const filteredIngredientsListState = selector<IngredientsListItem[]>({
  key: 'filteredIngredientsListState',
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    const searchTerm = get(searchTermState);
    const postList = get(ingredientsListState);

    return postList.filter(
      item =>
        (selectedCategory === '전체' || item.category === selectedCategory) &&
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
});

/** 제품상세페이지 이동 */
export const selectedProductState = atom<IngredientsListItem | null>({
  key: 'selectedProductState',
  default: null,
});
/** 제품 카테고리 */
export const selectedCategoryState = atom<string>({
  key: 'selectedCategoryState',
  default: '전체',
});
/** 제품 검색 */
export const searchTermState = atom<string>({
  key: 'searchTermState',
  default: '',
});

/** ----------------- 게시판 페이지 ----------------- */
export interface IPostPreviewTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  comment: number;
  likes: number;
}

/** 게시글 제목 */
export const postTitleState = atom<string>({
  key: 'postTitleState',
  default: '',
});

/** 게시글 내용 */
export const postContentState = atom<string>({
  key: 'postContentState',
  default: '',
});

/** 게시글 목록 */
export const postListState = atom<IPostPreviewTypes[]>({
  key: 'postListState',
  default: [],
});

export const myPostListState = atom<IPostPreviewTypes[]>({
  key: 'myPostListState',
  default: [],
});

/** 게시글 정렬 */
export const sortTypeState = atom<string>({
  key: 'sortTypeState',
  default: '최신순',
});

// export const sortedPostsState = selector({
//   key: 'sortedPostsState',
//   get: ({ get }) => {
//     const sortType = get(sortTypeState);
//     const posts = get(postListState);

//     switch (sortType) {
//       case '최신순':
//         return [...posts].sort((a, b) => {
//           return Number(b.uploadTime) - Number(a.uploadTime);
//         });

//       /** 조회순 */
//       default:
//         return [...posts].sort((a, b) => {
//           return Number(b.views) - Number(a.views);
//         });
//     }
//   },
// });

/* 게시글 검색 */
export const searchTypeState = atom<string>({
  key: 'searchTypeState',
  default: '글 제목',
});

export const searchInputState = atom<string>({
  key: 'searchInputState',
  default: '',
});

// export const searchedPostsState = selector({
//   key: 'searchedPostsState',
//   get: ({ get }) => {
//     const searchType = get(searchTypeState);
//     const searchInput = get(searchInputState);
//     const posts = get(postListState);

//     switch (searchType) {
//       case '글 제목':
//         return posts.filter(post => post.title.includes(searchInput));
//       case '글 내용':
//         return posts.filter(post => post.content.includes(searchInput));
//       case '작성자':
//         return posts.filter(
//           post =>
//             post.writer.includes(searchInput) || post.writer === searchInput,
//         );
//     }
//   },
// });

// /** 정렬 & 검색 필터링 공통 뽑아내기 */
// export const filteredPostListState = selector({
//   key: 'filteredPostListState',
//   get: ({ get }) => {
//     const sortedPosts = get(sortedPostsState);
//     const searchedPosts = get(searchedPostsState);

//     return (
//       searchedPosts && sortedPosts.filter(post => searchedPosts.includes(post))
//     );
//   },
// });

/** 게시글 좋아요 클릭 여부 */
export const isLikeState = atom<boolean>({
  key: 'isLikeState',
  default: false,
});

/** 게시글 댓글 */

export interface IPostCommentTypes {
  id: number;
  writerName: string;
  createdDate: string;
  content: string;
}

export const postCommentInputState = atom<string>({
  key: 'postCommentInputState',
  default: '',
});

export const commentsRenderTriggerState = atom<boolean>({
  key: 'commentsLengthState',
  default: false,
});

export const recommentsRenderTriggerState = atom<boolean>({
  key: 'recommentsRenderTriggerState',
  default: false,
});

export const isCurrentPathMainState = atom<boolean>({
  key: 'isCurrentPathMainState',
  default: true,
});

/** 내가 쓴 글 페이지 */

export const deleteCheckedItemsState = atom<number[]>({
  key: 'deleteCheckedItemsState',
  default: [],
});

export const isDeleteModeState = atom<boolean>({
  key: 'isDeleteModeState',
  default: false,
});
