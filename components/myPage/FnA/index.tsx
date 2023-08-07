import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './style';

interface Post {
    id: string;
    title: string;
    date: string;
    author: string;
  }


const MypageFnA = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      // 여기에서 실제 API를 호출하여 데이터를 가져와야 하지만, 현재는 임의의 데이터로 대체
      const fakeData: Post[] = [
        { id: '03', title: '알바생은 채팅기능 사용가능한가요?', date: '2023.03.17', author: '담당자' },
        { id: '02', title: '알바생 공지사항', date: '2023.03.15', author: '담당자' },
        { id: '01', title: '매장 점검 공지사항', date: '2023.03.18', author: '담당자' },
      ];
      setPosts(fakeData);
    }, []);
  
    return (
        <>
        <div>
            <S.FnaTitle>F&A</S.FnaTitle>
        <S.HorizontalRule />
            <S.FnaBoard>
                <S.PostId>번호</S.PostId>
                <S.PostTitle>제목</S.PostTitle>
                <S.PostDate>작성 일자</S.PostDate>
                <S.PostAuthor>작성자</S.PostAuthor>
            </S.FnaBoard>
        <S.HorizontalRule />
        {posts.map((post) => (
        <S.PostContainer key={post.id}>
          <p> {post.id}</p>  
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDate> {post.date}</S.PostDate>
          <S.PostAuthor> {post.author}</S.PostAuthor>
          <hr />
        </S.PostContainer>
      ))}
        </div>
        </>
      
    );
};

export default MypageFnA;
