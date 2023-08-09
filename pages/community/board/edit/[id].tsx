import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { API } from 'pages/api/api';
import Editor from 'components/community/Board/New/Editor';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query; // string type

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  /** 제목과 내용 불러오기 */
  useEffect(() => {
    API.get(`/api/boards/${id}`)
      .then(res => {
        console.log(`${id}번의 게시글 제목, 내용 불러오기 성공`);
        console.log(res.data.title, res.data.content);
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

export default EditPage;
