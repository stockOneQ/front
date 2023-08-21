import { styled } from 'styled-components';

export const Box = styled.div`
  width: 40.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;

  padding-top: 8.5rem;
`;

export const PageNum = styled.span<{ disabled: boolean }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: ${props => (props.disabled ? '#e1e1e1' : '#000000')};

  &:focus {
    color: white;
    background-color: black;
    border-radius: 1.6rem;
    padding: 0.1rem 1.6rem;
  }
`;

export const PageMoveButton = styled.button`
  margin-top: 0.4rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
