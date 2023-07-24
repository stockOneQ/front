import styled from 'styled-components';
import Ingredients from '../Ingredients/index';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
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