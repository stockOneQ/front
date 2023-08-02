import { styled } from 'styled-components';

export const Box = styled.div``;

export const Text = styled.span`
  padding-left: 1.2rem;
  background: #f7f7f9;
  color: #000000;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;

  display: flex;
  align-items: center;

  height: 4.5rem;
`;

export const Input = styled.textarea`
  resize: none;
  border: none;

  width: 107.5rem;
  height: 47.7rem;
  border-radius: 0rem 0rem 3rem 3rem;
  padding: 1.5rem 2.7rem;

  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8rem;

  color: #000000;

  &:focus {
    outline: none;
  }
`;
