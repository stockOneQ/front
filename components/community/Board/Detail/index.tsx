import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  commentsRenderTriggerState,
  currentPageNumState,
  isCurrentPathMainState,
  isLikeState,
  loginIdState,
  recommentsRenderTriggerState,
  startPageNumState,
  totalElementsState,
  totalPagesState,
} from 'recoil/states';
import { API } from 'pages/api/api';

import * as S from './style';

import PostInfo from './PostInfo';
import Content from './Content';
import CommentList from './CommentList';
import CommentInputSection from './CommentInputSection';

import CloseSVG from 'public/assets/icons/community/close.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';

interface IRecommentTypes {
  id: number;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

interface ICommentTypes extends IRecommentTypes {
  replyList: IRecommentTypes[] | undefined;
}

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  likes: number;
  createdDate: string;
  writerId: string;
  writerName: string;
  alreadyLike: boolean;
}

const Detail = ({ id }: { id: number }) => {
  const router = useRouter();

  const loginId = useRecoilValue(loginIdState);
  const [post, setPost] = useState<IPostTypes>();
  const [commentList, setCommentList] = useState<ICommentTypes[]>();
  const commentRenderTrigger = useRecoilValue(commentsRenderTriggerState);
  const recommentRenderTrigger = useRecoilValue(recommentsRenderTriggerState);
  const isLike = useRecoilValue(isLikeState);

  const startPageNum = useRecoilValue(startPageNumState);
  const currentPageNum = useRecoilValue(currentPageNumState);
  const [totalPages, setTotalPages] = useRecoilState(totalPagesState);
  const [totalElements, setTotalElements] = useRecoilState(totalElementsState);

  const isCurrentPathMain = useRecoilValue(isCurrentPathMainState);

  /** ----------------- 게시글 상세 조회 API ----------------- */
  useEffect(() => {
    API.get(`/api/boards/${id}`)
      .then(res => {
        console.log(`${id}번의 게시글 상세 불러오기 성공`);
        console.log(res.data);
        setPost(res.data);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }, [isLike]);

  /** ----------------- 댓글 목록 조회 API ----------------- */
  useEffect(() => {
    API.get(`/api/comments/${id}`, {
      params: {
        page: currentPageNum - 1,
      },
    })
      .then(res => {
        console.log(`${id}번 게시글의 댓글 목록 불러오기 성공`);
        console.log(res.data);
        setTotalPages(res.data.pageInfo.totalPages);
        setTotalElements(res.data.pageInfo.totalElements);
        setCommentList(res.data.CommentListResponse);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }, [
    startPageNum,
    currentPageNum,
    totalPages,
    commentRenderTrigger,
    recommentRenderTrigger,
  ]);

  /** 게시글 상세 페이지 창 닫기 */
  const handleClose = () => {
    isCurrentPathMain
      ? router.push('/community/board')
      : router.push('/community/board/myPosts');
  };

  return (
    <S.Box>
      {post && (
        <S.PostBox>
          <S.HeaderSection>
            <PostInfo
              writerName={post.writerName}
              createdDate={post.createdDate}
            />
            <S.ButtonContainer>
              {post?.writerId === loginId && (
                <Link href={`/community/board/edit/${id}`}>
                  <S.EditButton>수정</S.EditButton>
                </Link>
              )}
              <S.CloseButton onClick={handleClose}>
                <Image src={CloseSVG} alt="close" />
              </S.CloseButton>
            </S.ButtonContainer>
          </S.HeaderSection>
          <Content
            id={post.id}
            title={post.title}
            content={post.content}
            hit={post.hit}
            likes={post.likes}
            alreadyLike={post.alreadyLike}
          />
        </S.PostBox>
      )}

      <CommentInputSection />

      <S.CommentList>
        <S.CommentTotalCount>
          <Image src={CommentsSVG} alt="comment" />
          <span>댓글 {totalElements}</span>
        </S.CommentTotalCount>
        <CommentList list={commentList} totalPages={totalPages} />
      </S.CommentList>
    </S.Box>
  );
};

export default Detail;
