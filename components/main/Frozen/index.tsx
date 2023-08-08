import styled from 'styled-components';
import Ingredients from '../Ingredients/index';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
`
const FrozenPageComp = () => {
    const postList = useRecoilValue(mainPostListState);
    const productsToShow = postList.filter((product) => product.storageMethod === "냉동");


    return (
        <MainSection>
            <Ingredients productsToShow={productsToShow} storageMethodFilter="냉동" />
        </MainSection>
    );
};

export default FrozenPageComp;