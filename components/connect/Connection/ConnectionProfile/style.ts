import styled from 'styled-components';

interface IConnectionProfileBoxProps {
  id: number;
}

const ConnectionProfileBox = styled.div<IConnectionProfileBoxProps>`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  text-align: center;
  font-size: 1.3rem;
  line-height: normal;

  img {
    border-radius: 6rem;
    margin-right: 1.7rem;
  }

  p:nth-child(2) {
    width: 5.5rem;
    height: 1.9rem;
    color: var(--color-white);
    background-color: ${({ id }) =>
      id % 9 === 0
        ? 'rgb(100, 185, 220)'
        : id % 9 === 1
        ? 'rgb(140, 185, 220)'
        : id % 9 === 2
        ? 'rgb(180, 185, 220)'
        : id % 9 === 3
        ? 'rgb(220, 185, 220)'
        : id % 9 === 4
        ? 'rgb(240, 180, 220)'
        : id % 9 === 5
        ? 'rgb(240, 180, 200)'
        : id % 9 === 6
        ? 'rgb(240, 180, 180)'
        : id % 9 === 7
        ? 'rgb(240, 180, 160)'
        : id % 9 === 8
        ? 'rgb(240, 220, 180)'
        : ''};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2.25rem;
    font-weight: 700;
  }

  p:nth-child(3) {
    font-weight: 500;
  }

  p:last-child {
    color: #dadada;
    font-weight: 500;
  }

  p:not(:last-child) {
    margin-right: 0.6rem;
  }
`;

export { ConnectionProfileBox };
