import { styled } from "styled-components";

export const Box = styled.div`
  position: relative;
  margin-top: 2.6rem;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.1rem;
  height: 4.7rem;

  padding: 1.8rem 2.5rem;
  margin-top: 2rem;
  background: #000000;

  border-radius: 30px;

  span {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
    white-space: nowrap;
    margin-top: 0.2rem;
  }
`;
