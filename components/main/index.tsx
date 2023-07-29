//main index.tsx
import styled from 'styled-components';
import Ingredients from './Ingredients';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../recoil/states';

const MainSection = styled.section`
  gap: 7.1rem;
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