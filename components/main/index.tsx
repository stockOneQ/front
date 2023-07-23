import styled from 'styled-components';
import Ingredients from './Ingredients';

const MainSection = styled.section`
  gap: 7.1rem;
`

/** 메인 홈 화면 **/
const MainPage = () => {
    return (
        <MainSection>
            <Ingredients />
        </MainSection>
    );
};

export default MainPage;