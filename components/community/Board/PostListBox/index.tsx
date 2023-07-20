import Link from "next/link";
import { useRecoilValue } from "recoil";
import { postListState } from "recoil/states";
import PostItemBox from "components/community/Board/PostListBox/PostItemBox";
import * as P from "./style";

const PostListBox = () => {
  const postList = useRecoilValue(postListState);

  return (
    <P.Box>
      {postList.map((value) => (
        <Link key={value.id} href={`/community/board/${value.id}`}>
          <PostItemBox
            key={value.id}
            title={value.title}
            content={value.content}
            views={value.views}
            commentCount={value.commentCount}
            likes={value.likes}
          />
        </Link>
      ))}
    </P.Box>
  );
};

export default PostListBox;
