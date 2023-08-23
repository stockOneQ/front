import { useRef } from 'react';

export type Item = {
  label: string;
  url: string;
  end: string;
};

/** side nav 값 자겨오기 */
const useGetSideMenuBarItems = (currentPath: string) => {
  const sideMenuBarItems = useRef<Item[]>([]);

  if (currentPath.startsWith('/home') || currentPath === '/') {
    return (sideMenuBarItems.current = [
      {
        label: '냉동',
        url: '/home/frozen',
        end: `${currentPath === '/' ? '' : 'frozen'}`,
      },
      { label: '냉장', url: '/home/coldStorage', end: 'coldStorage' },
      { label: '상온', url: '/home/roomTemperature', end: 'roomTemperature' },
    ]);
  }
  if (currentPath.startsWith('/community')) {
    return (sideMenuBarItems.current = [
      { label: '친구', url: '/community/friends/search', end: 'friends' },
      { label: '게시판', url: '/community/board', end: 'board' },
    ]);
  }
  if (currentPath.startsWith('/connect')) {
    return (sideMenuBarItems.current = [
      { label: '자료', url: '/connect/data', end: 'data' },
      { label: '연결', url: '/connect/connection', end: 'connection' },
    ]);
  }
  if (currentPath.startsWith('/my-page')) {
    return (sideMenuBarItems.current = [
      { label: '회원정보수정', url: '/my-page/edit', end: 'edit' },
      { label: 'F & A', url: '/my-page/questions', end: 'questions' },
      { label: '회원탈퇴', url: '/my-page/secession', end: 'secession' },
    ]);
  }
};

export default useGetSideMenuBarItems;
