import Editor from 'components/community/Board/New/Editor';
import { useRouter } from 'next/router';
import { API } from 'pages/api/api';
import { useEffect, useState } from 'react';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    API.get(`/api/boards/${id}`)
      .then(res => {
        console.log(`${id}번의 게시글 제목, 내용 불러오기 성공`);
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [id]);

  return (
    <Editor isEdit={true} id={Number(id)} title={title} content={content} />
  );
};

export default Edit;
