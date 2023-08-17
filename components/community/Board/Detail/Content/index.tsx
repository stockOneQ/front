import Image from 'next/image';
import * as S from './style';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import LikedSVG from 'public/assets/icons/community/liked.svg';
import UnLikedSVG from 'public/assets/icons/community/unLiked.svg';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLikeState } from 'recoil/states';
import { API } from 'pages/api/api';

type IPostContentType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  likes: number;
  alreadyLike: boolean;
};

const Content = ({
  id,
  title,
  content,
  hit,
  likes,
  alreadyLike,
}: IPostContentType) => {
  const [isLike, setIsLike] = useRecoilState(isLikeState);

  useEffect(() => {
    setIsLike(alreadyLike);
  }, []);

  const handleLike = () => {
    if (!isLike) {
      API.post(`/api/boards/${id}/likes`)
        .then(res => {
          if (res.status !== 409) console.log('게시글 좋아요 등록 성공');
          setIsLike(prev => !prev);
        })
        .catch(e => {
          throw e;
        });
    } else {
      API.delete(`/api/boards/${id}/likes`)
        .then(() => {
          console.log('게시글 좋아요 취소 성공');
          setIsLike(prev => !prev);
        })
        .catch(e => {
          throw e;
        });
    }
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <S.Title>{title}</S.Title>
        <S.InteractionSection>
          <S.Container color="#F2B2CF">
            <Image alt="views" src={ViewsSVG} width={25} />
            <span>{hit}</span>
          </S.Container>
          <S.Container color="#7BAED7">
            <button onClick={handleLike}>
              {isLike ? (
                <Image alt="afterLike" src={LikedSVG} width={29} />
              ) : (
                <Image alt="beforeLike" src={UnLikedSVG} width={29} />
              )}
            </button>

            <span>{likes}</span>
          </S.Container>
        </S.InteractionSection>
      </S.HeaderSection>
      <S.Content>{content}</S.Content>
    </S.Box>
  );
};

export default Content;
