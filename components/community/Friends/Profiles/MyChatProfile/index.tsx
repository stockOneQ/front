import Image from 'next/image';
import myProfile from 'public/assets/imgs/community/myProfile.png';
import myPageIcon from 'public/assets/icons/community/myPageIcon.svg';
import * as S from './style';
<<<<<<< HEAD
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { API } from 'pages/api/api';

type userInfoType = {
  name: string;
  phoneNumber: string;
  storeName: string;
};

/** 나의 채팅 프로필 */
const MyChatProfile = () => {
  // FIXME: 페이지 이동 시 상태 날아가는 오류
  const [reqFriendsListLen, setReqFriendsListLen] = useState(0);
  const [userInfo, setUserInfo] = useState<userInfoType>({
    name: '',
    storeName: '',
    phoneNumber: '',
  });
  const { name, storeName, phoneNumber } = userInfo;

  useEffect(() => {
    const getData = async () => {
      let wanting_offset = -1;

      while (true) {
        // TODO: Promise.allSettled 적용 해보기
        try {
          const reqFriendsRes = await API.get(
            `/api/friends/requested?last=${wanting_offset}`,
          );
          const reqFriendsData = reqFriendsRes.data.friends;
          const reqFriendsListLen = reqFriendsData.length;

          setReqFriendsListLen(prev => (prev += reqFriendsListLen));
          wanting_offset = reqFriendsData[reqFriendsListLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

          if (reqFriendsListLen < 5) break; // 더 이상 받아올 친구 목록 없으면 break;
        } catch (err) {
          console.error(err);
          throw err;
        }
      }

      try {
        const userInfoRes = await API.get('/api/user/information');
        const userInfoData = userInfoRes.data;

        setUserInfo(userInfoData);
      } catch (err) {
        console.error(err);
        throw err;
      }
    };
    getData();
  }, []);

=======
import { IProfilesProps } from '..';

/** 나의 채팅 프로필 */
const MyChatProfile = ({ setReqFriends }: IProfilesProps) => {
>>>>>>> ff4bb25 (Merge branch develop into main)
  return (
    <div>
      <S.MyProfileText>나</S.MyProfileText>
      <S.MyProfileBox>
<<<<<<< HEAD
        <Image
          src={myProfile}
          alt="my_profile"
          width={75}
          height={75}
          placeholder="blur"
        />
        <div>
          <S.MyInfoBox>
            <p>{name}</p>
            <p>{storeName}</p>
          </S.MyInfoBox>
          <S.MyPhoneText>{phoneNumber}</S.MyPhoneText>
        </div>
        <S.MyPageButton>
          <Link href="/community/friends/request">
            <div>{reqFriendsListLen}</div>
            <Image
              src={myPageIcon}
              alt="my_page_icon"
              width={19.64}
              height={26.84}
            />
          </Link>
=======
        <Image src={myProfile} alt="my_profile" width={75} height={75} placeholder="blur" />
        <div>
          <S.MyInfoBox>
            <p>이나영</p>
            <p>이디아 상앙점</p>
          </S.MyInfoBox>
          <S.MyPhoneText>010-0000-0000</S.MyPhoneText>
        </div>
        <S.MyPageButton>
        <div onClick={() => setReqFriends(prev => !prev)}>
          <button>6</button>
          <Image src={myPageIcon} alt="my_page_icon" width={19.64} height={26.84} />
        </div>
>>>>>>> ff4bb25 (Merge branch develop into main)
        </S.MyPageButton>
      </S.MyProfileBox>
    </div>
  );
};

<<<<<<< HEAD
export default MyChatProfile;
=======
export default MyChatProfile;
>>>>>>> ff4bb25 (Merge branch develop into main)
