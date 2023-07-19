import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>{id}번 게시글입니다.</>;
};

export default PostDetailPage;
