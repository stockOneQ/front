import { css, styled } from 'styled-components';

export const Box = styled.div`
  width: 40.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2.3rem;

  padding-top: 8.5rem;
`;

export const PageNum = styled.span<{ disabled: boolean; active: boolean }>`
  width: 5rem;
  height: 3.2rem;
  border-radius: 1.8rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => (props.disabled ? '#e1e1e1' : '#000000')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  ${props =>
    props.active &&
    !props.disabled &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const PageMoveButton = styled.button`
  margin-top: 0.4rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
