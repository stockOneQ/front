import styled from 'styled-components';

const ConnectionProfileBox = styled.div`
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
    background-color: #68b7e8;
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
