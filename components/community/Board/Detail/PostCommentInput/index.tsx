import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { postCommentInputState } from 'recoil/states';
import * as S from './style';
import PhotoUploadSVG from 'public/assets/icons/community/photoUpload.svg';
import { ChangeEvent } from 'react';

const PostCommentInput = () => {
  const [input, setInput] = useRecoilState(postCommentInputState);

  return (
    <S.Box>
      <S.UploadButton>
        <Image src={PhotoUploadSVG} alt="upload" />
      </S.UploadButton>
      <S.Input
        value={input}
        maxLength={1000}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
      />
    </S.Box>
  );
};

export default PostCommentInput;
