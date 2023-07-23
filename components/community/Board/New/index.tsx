import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState, useSetRecoilState } from "recoil";
import { postContentState, postListState, postTitleState } from "recoil/states";

import Editor from "./Editor/index";
import HeadingText from "../../../common/HeadingText";

import { getDetailDate } from "utils/date";

import * as S from "./style";

let id = 4;
const getId = () => {
  return id++;
};

const New = () => {
  const router = useRouter();

  const [title, setTitle] = useRecoilState(postTitleState);
  const [content, setContent] = useRecoilState(postContentState);
  const setPostList = useSetRecoilState(postListState);

  /* 게시글 작성 페이지 - 저장 버튼 클릭 처리 함수 */
  const handleSubmit = () => {
    if (title.length < 1) return alert("제목을 1자 이상 입력해 주세요.");
    if (content.length < 1) return alert("내용을 1자 이상 입력해 주세요.");

    setPostList((posts) => [
      ...posts,
      {
        id: getId(),
        writer: "임하림",
        uploadTime: getDetailDate(),
        title: title,
        content: content,
        views: 30,
        commentCount: 1,
        likes: 8,
      },
    ]);

    setTitle("");
    setContent("");

    router.push("/community/board");
  };

  return (
    <S.Box>
      <HeadingText>게시글 작성</HeadingText>
      <S.ActionButtonBox>
        <Link href="/community/board">
          <S.Button>취소</S.Button>
        </Link>
        <S.Button onClick={handleSubmit}>저장</S.Button>
      </S.ActionButtonBox>
      <Editor />
    </S.Box>
  );
};

export default New;
