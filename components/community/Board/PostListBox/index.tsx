import Link from "next/link";
import { useRecoilValue } from "recoil";
import { filteredPostsState } from "recoil/states";
import PostItemBox from "components/community/Board/PostListBox/PostItemBox";
import * as S from "./style";

const PostListBox = ({
  id,
  isSetting,
  checked,
}: {
  id?: string;
  isSetting?: boolean;
  checked?: boolean;
}) => {
  let postList = useRecoilValue(filteredPostsState);
  if (id && postList) {
    postList = postList.filter((post) => post.writer === id);
  }
  return (
    <S.Box>
      {postList &&
        postList.map((value) => (
          // <Link key={value.id} href={`/community/board/${value.id}`}>
          <PostItemBox
            key={value.id}
            title={value.title}
            content={value.content}
            views={value.views}
            commentCount={value.commentCount}
            likes={value.likes}
            isSetting={isSetting}
            checked={checked}
          />
          // </Link>
        ))}
    </S.Box>
  );
};

export default PostListBox;
