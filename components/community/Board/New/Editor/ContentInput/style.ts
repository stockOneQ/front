import { styled } from 'styled-components';

export const Box = styled.div``;

export const TextContainer = styled.div`
  padding: 1.2rem 2rem;
  background: #f7f7f9;
`;

export const Text = styled.span`
  color: black;

  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;

export const Container = styled.div`
  position: relative;
  width: 107.5rem;
  height: 47.7rem;
  border-radius: 0rem 0rem 3rem 3rem;

  padding-right: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const Input = styled.textarea`
  margin-left: 3rem;
  padding-right: 1.2rem;

  position: absolute;
  width: 101.9rem;
  height: 41.2rem;
  resize: none;
  border: none;

  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1rem;

  color: #000000;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #090000;
    border-radius: 1rem;
  }
`;
