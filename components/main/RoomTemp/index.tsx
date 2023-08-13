import styled from 'styled-components';
import Ingredients from '../Ingredients/index';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
<<<<<<< HEAD
`;
const RoomTempPage = () => {
  const postList = useRecoilValue(mainPostListState);
  const productsToShow = postList.filter(
    product => product.storageMethod === '상온',
  );

  return (
    <MainSection>
      <Ingredients storageMethodFilter="상온" />
    </MainSection>
  );
};

export default RoomTempPage;
=======
`
const RoomTempPage = () => {
    const postList = useRecoilValue(mainPostListState);
    const productsToShow = postList.filter((product) => product.storageMethod === "상온");


    return (
        <MainSection>
            <Ingredients productsToShow={productsToShow} storageMethodFilter="상온" />
        </MainSection>
    );
};

export default RoomTempPage;
>>>>>>> ff4bb25 (Merge branch develop into main)
