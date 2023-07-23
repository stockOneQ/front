import { useRecoilValue } from "recoil";
import * as S from "./style";
import { postCommentListState } from "recoil/states";
import PostCommentItemBox from "./PostCommentItemBox";

const PostCommentListBox = () => {
  const postCommentList = useRecoilValue(postCommentListState);

  return (
    <S.Box>
      {postCommentList.map((value) => (
        <PostCommentItemBox
          key={value.id}
          writer={value.writer}
          content={value.content}
          date={value.uploadTime}
        />
      ))}
    </S.Box>
  );
};

export default PostCommentListBox;
