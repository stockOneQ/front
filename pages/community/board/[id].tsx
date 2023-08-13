import { useRouter } from 'next/router';
<<<<<<< HEAD

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
import Detail from 'components/community/Board/Detail';

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Detail id={Number(id)} />;
};

export default PostDetailPage;
