import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { postListState } from 'recoil/states';

import Detail from 'components/community/Board/Detail';

const PostDetailPage = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  const postList = useRecoilValue(postListState);
  const post = postList.find(post => post.postId === Number(id));
  console.log(post);

  return (
    <>
      {post && (
        <Detail
          writer={post.writer}
          uploadTime={post.uploadTime}
          title={post.title}
          content={post.content}
          views={post.views}
          likes={post.likes}
        />
      )}
    </>
  );
};

export default PostDetailPage;
