import * as S from "./style";

const HeadingText = ({ children }: { children: string }) => {
  return (
    <S.Box>
      <S.Text>{children}</S.Text>
    </S.Box>
  );
};

export default HeadingText;
