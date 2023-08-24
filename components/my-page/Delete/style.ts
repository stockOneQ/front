import styled from 'styled-components';

export const DeleteSection = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  flex-direction: column;
  height: 100%; //스크롤 주려면 100vh
  width: 50vw;
  margin: 0 auto;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 0.3rem solid transparent;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: 0.8rem;
    background-color: #eee;
  }
`;

export const DeleteReasonForm = styled.div`
  display: grid;
  margin: 7% 0;

  label {
    font-size: 18px;
    margin-bottom: 3%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: 21px;

    display: flex;
    gap: 1.2rem;
  }

  input {
    width: 2rem;
  }
`;

export const SubmitButton = styled.button`
  box-sizing: border-box;

  width: 202px;
  height: 110px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #e1e1e1;
  }
`;

export const DeleteAgreement = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #979797;
  box-shadow: inset 4px 4px 11px rgba(0, 0, 0, 0.15);
  border-radius: 13px;

  flex-direction: column;
  height: 32.6rem;
  width: 56.7rem;
  position: relative;

  padding: 4.5rem 2rem 2rem 2rem;
`;

export const DeleteTitle = styled.h1`
  font-size: 24px;
  margin-top: 3%;
`;

export const AgreementText = styled.div`
  p {
    padding-top: 3%;
    font-size: 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
  }
`;
export const DeletContents = styled.div`
  top: 10%;
  left: 10%;
  position: relative;

  h1 {
    top: 3%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.2rem;
  padding-top: 6.7rem;
  padding-bottom: 2.6rem;

  width: 56.7rem;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }

  p {
    color: #55abd7;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
`;
