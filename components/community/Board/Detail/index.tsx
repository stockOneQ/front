import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { postCommentListState } from 'recoil/states';

import WriterInfoBox from './WriterInfoBox';
import PostContentBox from './PostContentBox';
import PostCommentListBox from './PostCommentListBox';
import PostCommentInputBox from './PostCommentInputBox';

import * as S from './style';

import CloseSVG from 'public/assets/icons/community/close.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import Link from 'next/link';

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  likes: number;
  createdDate: string;
  writer: string;
}

const Detail = (props: IPostTypes) => {
  const router = useRouter();
  const { id, title, content, hit, likes, createdDate, writer } = props;
  const postCommentList =
    useRecoilValue(postCommentListState); /** 더미 데이터 */

  /** 게시글 상세 페이지 창 닫기 */
  const handleClose = () => {
    router.push('/community/board');
  };

  return (
    <S.Box>
      <S.ButtonContainer>
        {/** 수정하기 버튼은 추후 로그인 한 사용자의 데이터와 대응 시킬 것. 일단 모든 게시글에 존재. */}
        <Link href={`/community/board/edit/${id}`}>
          <S.EditButton>수정</S.EditButton>
        </Link>
        <S.CloseButton onClick={handleClose}>
          <Image src={CloseSVG} alt="close" />
        </S.CloseButton>
      </S.ButtonContainer>

      <S.PostSection>
        <WriterInfoBox writer={writer} createdDate={createdDate} />
        <PostContentBox
          title={title}
          content={content}
          hit={hit}
          likes={likes}
        />
      </S.PostSection>

      <PostCommentInputBox />

      <S.CommentListContainer>
        <S.CommentCountContainer>
          <Image src={CommentsSVG} alt="comment" />
          <span>댓글 {postCommentList.length}</span>
        </S.CommentCountContainer>
        <PostCommentListBox />
      </S.CommentListContainer>
    </S.Box>
  );
};

export default Detail;
