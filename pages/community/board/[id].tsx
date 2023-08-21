import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import {
  currentPageNumState,
  startPageNumState,
  totalPagesState,
} from 'recoil/states';
import Detail from 'components/community/Board/Detail';

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const setStartPageNum = useSetRecoilState(startPageNumState);
  const setCurrentPageNum = useSetRecoilState(currentPageNumState);
  const setTotalPages = useSetRecoilState(totalPagesState);

  useEffect(() => {
    console.log('시작 페이지 번호, 현재 페이지, 전체 페이지 갯수 초기화');
    setStartPageNum(1);
    setCurrentPageNum(1);
    setTotalPages(0);
  }, []);

  return <Detail id={Number(id)} />;
};

export default PostDetailPage;
