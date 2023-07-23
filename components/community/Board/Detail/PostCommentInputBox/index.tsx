import * as S from "./style";
import { getDetailDate, getStringDate } from "utils/date";
import PostInfoBox from "components/community/Board/Detail/PostInfoBox";
import PostCommentInput from "components/community/Board/Detail/PostCommentInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postCommentListState, postCommentState } from "recoil/states";

let id = 3;
const getId = () => {
  return id++;
};

const PostCommentInputBox = () => {
  const [comment, setComment] = useRecoilState(postCommentState);
  const setPostCommentList = useSetRecoilState(postCommentListState);

  const handleSubmit = () => {
    if (comment.length < 1) return alert("1자 이상 입력해 주세요.");

    setPostCommentList((com) => [
      ...com,
      {
        id: getId(),
        writer: "임하림",
        uploadTime: getStringDate(getDetailDate()),
        content: comment,
      },
    ]);

    setComment("");
  };

  return (
    <S.Box>
      <PostInfoBox writer={"임하림"} date={getStringDate(getDetailDate())} />
      <PostCommentInput />
      <S.SubmitButton onClick={handleSubmit}>
        <span>댓글 등록</span>
      </S.SubmitButton>
    </S.Box>
  );
};

export default PostCommentInputBox;
