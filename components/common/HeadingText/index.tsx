import { ReactNode } from 'react';
import * as S from './style';

const HeadingText = ({ children }: { children: ReactNode }) => {
  return (
    <S.Box>
      <S.Text>{children}</S.Text>
    </S.Box>
  );
};

export default HeadingText;
