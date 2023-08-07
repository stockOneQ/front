import { useRouter } from 'next/router';
<<<<<<< HEAD

import Detail from 'components/community/Board/Detail';
import { useEffect, useState } from 'react';
import { API } from 'pages/api/api';

interface IPostTypes {
  id: number;
  title: string;
  file: string[];
  content: string;
  hit: number;
  likes: number;
  createdDate: string;
  writer: string;
}
=======
import { useRecoilValue } from 'recoil';
import { postListState } from 'recoil/states';

import Detail from 'components/community/Board/Detail';
>>>>>>> e9526d33bbf0d21f0ef1a0f37258e6acdfd952b6

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

<<<<<<< HEAD
  const [post, setPost] = useState<IPostTypes>();
=======
  const postList = useRecoilValue(postListState);
  const post = postList.filter(post => post.id === Number(id));
>>>>>>> e9526d33bbf0d21f0ef1a0f37258e6acdfd952b6

  useEffect(() => {
    API.get(`/api/boards/${id}`)
      .then(response => {
        console.log(`${id}번의 게시글 상세 불러오기 성공`);
        console.log(response.data);
        setPost(response.data);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [id]);

  return (
    <>
      {post && (
        <Detail
          id={post.id}
          title={post.title}
          content={post.content}
          hit={post.hit}
          likes={post.likes}
          createdDate={post.createdDate}
          writer={post.writer}
        />
      )}
    </>
  );
};

export default PostDetailPage;
