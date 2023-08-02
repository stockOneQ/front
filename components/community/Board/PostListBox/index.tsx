import Link from "next/link";
import { useRecoilValue } from "recoil";
import { filteredPostsState } from "recoil/states";
import PostItemBox from "components/community/Board/PostListBox/PostItemBox";
import * as S from "./style";

const PostListBox = ({
  writerId,
  isSetting,
}: {
  writerId?: number;
  isSetting?: boolean;
}) => {
  let postList = useRecoilValue(filteredPostsState);
  if (writerId && postList) {
    postList = postList.filter((post) => post.writerId === 82831);
  }
  return (
    <S.Box>
      {postList &&
        postList.map((value) => (
          // <Link key={value.id} href={`/community/board/${value.id}`}>
          <PostItemBox
            key={value.postId}
            postId={value.postId}
            title={value.title}
            content={value.content}
            views={value.views}
            commentCount={value.commentCount}
            likes={value.likes}
            isSetting={isSetting}
          />
          // </Link>
        ))}
    </S.Box>
  );
};

export default PostListBox;
