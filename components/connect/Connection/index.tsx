import Card from 'components/common/Card';
import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcBlack.svg';
import ConnectionProfile from './ConnectionProfile';
import useScroll from 'hooks/useScroll';
import * as S from './style';

/** connect - 연결 페이지 */
const Connection = () => {
  const { hideScroll, scrollHandler } = useScroll();

  return (
    <Card width="75rem" height="73.8rem" padding="2rem 2rem 5.2rem">
      <S.ConnectionHeaderBox>
        <p>나와 연결되어 있는 슈퍼바이저</p>
        <S.ConnectionInputBox>
          <input type="text" />
          <Image src={searchIcon} alt="search-icon" width={20} height={20} />
        </S.ConnectionInputBox>
      </S.ConnectionHeaderBox>
      <S.ConnectionBodyBox hideScroll={hideScroll} onScroll={scrollHandler}>
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
        <ConnectionProfile />
      </S.ConnectionBodyBox>
    </Card>
  );
};

export default Connection;
