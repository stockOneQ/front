import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding-bottom: 4.5rem;

  gap: 2.6rem;
`;

export const TextContainer = styled.div`
  padding: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
  white-space: nowrap;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 6.6rem;
  font-size: 1.8rem;

  padding-left: 1.6rem;

  background: #ffffff;
  border: 0.1rem solid #f7f7f9;
  border-radius: 3rem;
`;
