import styled from 'styled-components';
import Gradients from './Gradients';

const MainSection = styled.section`
  gap: 7.1rem;
`

/** 메인 홈 화면 **/
const MainPage = () => {
    return (
        <MainSection>
            <Gradients />
        </MainSection>
    );
};

export default MainPage;