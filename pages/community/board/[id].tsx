import { useRouter } from 'next/router';

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

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<IPostTypes>();

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
