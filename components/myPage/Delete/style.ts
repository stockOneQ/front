import styled from "styled-components";

export const DeleteSection = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
    border-radius: 30px;
    flex-direction: column;
    height: 100%;//스크롤 주려면 100vh
    width: 50vw;
    margin: 0 auto;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;

    
  &::-webkit-scrollbar {
    display: ${props => props.hideScroll ? 'none' : 'inline-block'};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: .3rem solid transparent;
    height: 4rem;
    border-radius: .8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
    background-color: #eee;
  }
`;

export const DeleteReasonForm = styled.div`
    display: grid;
    margin: 7% 0;

    label {
        font-size: 18px;
        margin-bottom: 3%;
    }
`;

export const SubmitButton = styled.button`

`;

export const DeleteAgreement = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
    border-radius: 30px;
    flex-direction: column;
    height: 50vh;
    width: 40vw;
    position: relative;
`;

export const DeleteTitle = styled.h1`
    font-size: 24px;
    margin-top: 3%;
`;

export const AgreementText = styled.div`
    padding: 7%;
    p { 
        padding-top: 3%;
        font-size: 15px;
    }
`;
export const DeletContents = styled.div`
    top: 10%;
    left: 10%;
    position: relative;

    h1 {
        top:3%;
    }
`;