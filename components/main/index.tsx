//main index.tsx
import styled from 'styled-components';
import Ingredients from './Ingredients';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
<<<<<<< HEAD
`;

/** 메인 홈 화면 **/
const MainPage = () => {
  const categoryFilter = '냉동';
  const postList = useRecoilValue(mainPostListState);
  //RECOIL 쓰지말고 걍 CATEGORYFILTER로 넘겨주면 되려나
  const productsToShow = postList.filter(
    product => product.storageMethod === '냉동',
  );

  return (
    <MainSection>
      <Ingredients storageMethodFilter="냉동" />
    </MainSection>
  );
};

export default MainPage;
=======
`

/** 메인 홈 화면 **/
const MainPage = () => {
    const categoryFilter = '냉동';
    const postList = useRecoilValue(mainPostListState);
    const productsToShow = postList.filter((product) => product.storageMethod === "냉동");


    return (
        <MainSection>
            <Ingredients productsToShow={productsToShow} storageMethodFilter="냉동" />
        </MainSection>
    );
};

export default MainPage;
>>>>>>> ff4bb25 (Merge branch develop into main)
