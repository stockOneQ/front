import Image from "next/image";
import { useRecoilState } from "recoil";
import { postCommentState } from "recoil/states";
import * as S from "./style";
import PhotoUploadSVG from "public/assets/icons/community/photoUpload.svg";

const PostCommentInput = () => {
  const [comment, setComment] = useRecoilState(postCommentState);

  return (
    <S.Box>
      <S.UploadButton>
        <Image src={PhotoUploadSVG} alt="upload" />
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
