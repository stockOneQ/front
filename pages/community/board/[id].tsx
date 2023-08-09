import { useRouter } from 'next/router';
import Detail from 'components/community/Board/Detail';

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isAll } = router.query;
  console.log(router.query);

  return <Detail id={Number(id)} isAll={isAll === 'true'} />;
};

export default PostDetailPage;
