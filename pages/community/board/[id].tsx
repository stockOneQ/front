import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { postListState } from 'recoil/states';

import Detail from 'components/community/Board/Detail';

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const postList = useRecoilValue(postListState);
  const post = postList.filter(post => post.id === Number(id));

  return <Detail postData={post[0]} />;
};

export default PostDetailPage;
