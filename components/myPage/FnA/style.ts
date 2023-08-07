import styled from "styled-components";

export const FnaBoard = styled.div`
    display: flex;

    p {
        font-size: 15px;
    }
`;

export const FnaTitle = styled.h1`
    margin: 3%;
    font-size: 18px;
`;

export const PostContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 10px;
    margin: 3%;
    
    p {
        font-size: 15px;
    }
`;

export const PostTitle = styled.p`
    margin-left: 8%;
`;

export const PostId = styled.p`
    margin-left: 3%;
`;

export const PostDate = styled.p`
    margin-left: 8%;
    right: 20%;
    color: gray;
    position: absolute;
`;

export const HorizontalRule = styled.hr`
  margin: 20px 0;
`;

export const PostAuthor = styled.p`
    margin-left: 8%;
    right: 11%;
    position: absolute;
`;