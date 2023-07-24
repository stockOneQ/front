import Image from "next/image";
import * as S from "./style";

import Upload from "public/assets/imgs/community/upload.png";
import {  postCommentState } from "recoil/states";
import { useRecoilState} from "recoil";


const PostCommentInput = () => {
  const [comment, setComment] = useRecoilState(postCommentState);

  return (
    <S.Box>
      <S.UploadButton>
        <Image src={Upload} alt="upload" />
      </S.UploadButton>
      <S.Input
        value={comment}
        maxLength={1000}
        onChange={(e: {
          target: { value: string | ((currVal: string) => string) };
        }) => setComment(e.target.value)}
      />
    </S.Box>
  );
};

export default PostCommentInput;
