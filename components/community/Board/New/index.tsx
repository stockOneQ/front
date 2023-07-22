import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState, useSetRecoilState } from "recoil";
import { postContentState, postListState, postTitleState } from "recoil/states";

import Editor from "./Editor/index";
import PageTitleContainer from "../../../common/PageTitleContainer";

import * as S from "./style";

let id = 4;
const getId = () => {
  return id++;
};

const getDate = () => {
  const date = new Date();
  const Year = String(date.getFullYear());
  const Month = String(date.getMonth() + 1).padStart(2, "0");
  const Day = String(date.getDay()).padStart(2, "0");
  const Hour = String(date.getHours()).padStart(2, "0");
  const Minute = String(date.getMinutes()).padStart(2, "0");
  const Second = String(date.getSeconds()).padStart(2, "0");
  const MSecond = String(date.getMilliseconds()).padStart(3, "0");

  return Year + Month + Day + Hour + Minute + Second + MSecond;
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
        uploadTime: getDate(),
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
      <PageTitleContainer title="게시글 작성" />
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
