import styled from 'styled-components';

const DetailHeaderBox = styled.div`
  text-align: center;
  position: relative;

  color: var(--color-black);
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 11rem;

  img {
    position: absolute;
    top: 1.5rem;
    right: 4.9rem;
    transform: translateY(-50%);
  }
`;

const DetailTitleBox = styled.div`
  height: 6.6rem;
  display: flex;
  align-items: center;
  gap: 2.6rem;
  color: var(--color-black);
  text-align: center;
  font-size: 1.8rem;
  line-height: normal;
  margin-bottom: 2.2rem;

  p {
    font-weight: 600;
    margin: 0 0 0 0.8rem;
    width: 5.8rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    font-weight: 500;
    border-radius: 3rem;
    border: 1px solid #f7f7f9;
    background: var(--color-white);
    padding: 2rem 3.3rem;
    width: 98.4rem;
    text-align: start;
  }
`;

const DetailFileBox = styled.div`
  width: 100%;
  height: 8.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  color: #979797;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`;

const DetailFileLabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  background-color: #f7f7f9;
  padding-left: 2.45rem;
  height: 3.4rem;
  overflow: hidden;

  img {
    margin-right: 0.2rem;
  }
`;

const DetailFileDownloadBox = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  padding: 0 2.7rem 0 7.2rem;
  border: 1px solid #f7f7f9;
  background: var(--color-white);

  img,
  p {
    cursor: pointer;
  }

  img {
    margin-left: auto;
  }

  p {
    border-radius: 1.5rem;
  }
`;

const DetailContentBox = styled.div`
  width: 100%;
  height: 43.6rem;
  margin-top: 2rem;

  border-radius: 3rem;
  overflow: hidden;
  background: var(--color-white);
`;

const DetailContentLabelBox = styled.p`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  height: 4.5rem;
  background-color: #f7f7f9;

  p {
    margin: 0 0 0 0.8rem;
    width: 5.8rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DetailContentTextBox = styled.div`
  height: 39.2rem;
  padding: 2.5rem;
  border-radius: 30px;
  background-color: var(--color-white);

  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
`;

export {
  DetailHeaderBox,
  DetailTitleBox,
  DetailFileBox,
  DetailFileLabelBox,
  DetailFileDownloadBox,
  DetailContentBox,
  DetailContentLabelBox,
  DetailContentTextBox,
};
