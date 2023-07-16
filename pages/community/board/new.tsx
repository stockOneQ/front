import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import { postContentState, postListState, postTitleState } from "recoil/states";

import Editor from "components/editor";
import Title from "components/common/pageTitle";

let id = 1;
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
        uploadTime: getDate(),
        title: title,
        content: content,
        views: 4,
        commentCount: 1,
        likes: 8,
      },
    ]);

    setTitle("");
    setContent("");

    router.push("/community/board");
  };

  return (
    <Box>
      <Title title="게시글 작성" />
      <ActionButtonBox>
        <Link href="/community/posts">
          <Button>취소</Button>
        </Link>
        <Button onClick={handleSubmit}>저장</Button>
      </ActionButtonBox>
      <Editor />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;

  gap: 8px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;

{
  /* 컴포넌트로 분리하려다 잘 안돼서 일단 공통 버튼 컴포넌트 한 곳에서 작업 */
}
const Button = styled.button`
  width: 71px;
  height: 35px;

  /* 텍스트 가운데 정렬 */
  padding-top: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.children === "취소" ? "#979797" : "#000000")};
  border-radius: 23px;

  &:hover {
    background: ${(props) =>
      props.children === "취소"
        ? "#3d3d3d"
        : " linear-gradient(137.84deg, #F9E499 -4.47%, #F2B2CF 94.43%)"};
  }
`;
export default New;
