import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { filteredPostListState } from 'recoil/states';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';
import * as S from './style';

const PostListBox = ({
  writerId,
}: {
  writerId?: number; // 내가 쓴 글을 보여주기 위한
}) => {
  let postList = useRecoilValue(filteredPostListState);

  if (writerId && postList) {
    postList = postList.filter(post => post.writerId === 82831);
  }

  return (
    <S.Box>
      {postList &&
        postList.map(value => (
          <PostItemBox
            key={value.postId}
            postId={value.postId}
            title={value.title}
            content={value.content}
            views={value.views}
            commentCount={value.commentCount}
            likes={value.likes}
          />
        ))}
    </S.Box>
  );
};

export default PostListBox;
