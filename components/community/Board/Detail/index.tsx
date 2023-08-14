import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import {
  commentsRenderTriggerState,
  isCurrentPathMainState,
} from 'recoil/states';

import PostInfoBox from './PostInfoBox';
import PostContentBox from './PostContentBox';
import PostCommentListBox from './PostCommentListBox';
import PostCommentInputBox from './PostCommentInputBox';

import * as S from './style';

import CloseSVG from 'public/assets/icons/community/close.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';

import { API } from 'pages/api/api';

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  likes: number;
  createdDate: string;
  writerId: string;
  writerName: string;
}

interface ICommentTypes {
  id: number;
  image: Array<string>;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

const Detail = ({ id }: { id: number }) => {
  const router = useRouter();

  const [post, setPost] = useState<IPostTypes>();
  const [commentList, setCommentList] = useState<ICommentTypes[]>();
  const [totalElements, setTotalElements] = useState(0);
  const commentRenderTrigger = useRecoilValue(commentsRenderTriggerState);

  const isCurrentPathMain = useRecoilValue(isCurrentPathMainState);

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
  }, [id]);

  useEffect(() => {
    console.log(commentRenderTrigger);
    API.get(`/api/comments/${id}`, {
      params: {
        page: 0,
      },
    })
      .then(res => {
        console.log(`${id}번 게시글의 댓글 목록 불러오기 성공`);
        console.log(res.data.CommentListResponse);
        setCommentList(res.data.CommentListResponse);
        setTotalElements(res.data.pageInfo.totalElements);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }, [id, commentRenderTrigger]);

  /** 게시글 상세 페이지 창 닫기 */
  const handleClose = () => {
    isCurrentPathMain
      ? router.push('/community/board')
      : router.push('/community/board/myPosts');
  };

  return (
    <S.Box>
      <S.ButtonContainer>
        {/** 현재 임시 토큰은 사용자 2번임 */}
        {post?.writerId === 'manager2id' && (
          <Link href={`/community/board/edit/${id}`}>
            <S.EditButton>수정</S.EditButton>
          </Link>
        )}
        <S.CloseButton onClick={handleClose}>
          <Image src={CloseSVG} alt="close" />
        </S.CloseButton>
      </S.ButtonContainer>
      {post && (
        <S.PostBox>
          <PostInfoBox
            writerName={post.writerName}
            createdDate={post.createdDate}
          />
          <PostContentBox
            title={post.title}
            content={post.content}
            hit={post.hit}
            likes={post.likes}
          />
        </S.PostBox>
      )}

      <PostCommentInputBox />

      <S.CommentList>
        <S.CommentCount>
          <Image src={CommentsSVG} alt="comment" />
          <span>댓글 {totalElements}</span>
        </S.CommentCount>
        <PostCommentListBox list={commentList} />
      </S.CommentList>
    </S.Box>
  );
};

export default Detail;
