import styled from 'styled-components';
import Ingredients from '../Ingredients/index';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
<<<<<<< HEAD
`;

/** 냉장 홈 화면 **/
const ColdPage = () => {
  const categoryFilter = '냉장';
  const postList = useRecoilValue(mainPostListState);

  const productsToShow = postList.filter(
    product => product.storageMethod === '냉장',
  );

  return (
    <MainSection>
      <Ingredients storageMethodFilter="냉장" />
    </MainSection>
  );
};

export default ColdPage;
=======
`

/** 냉장 홈 화면 **/
const ColdPage = () => {
    const categoryFilter = '냉장';
    const postList = useRecoilValue(mainPostListState);

    const productsToShow = postList.filter((product) => product.storageMethod === "냉장");


    return (
        <MainSection>
            <Ingredients productsToShow={productsToShow} storageMethodFilter="냉장" />
        </MainSection>
    );
};

export default ColdPage;
>>>>>>> ff4bb25 (Merge branch develop into main)
