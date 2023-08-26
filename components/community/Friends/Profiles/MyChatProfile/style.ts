import styled from 'styled-components';

const MyProfileText = styled.p`
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  padding: 3rem 2rem 1.7rem;
`;

const MyProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem 0 2rem;

  img {
    border-radius: 50%;
    margin-right: 1.9rem;
  }
`;

const MyInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.9rem;

  p:first-child {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: normal;
  }

  p:first-child::after {
    content: '|';
    padding: 0 0.5rem 0 0.7rem;
  }

  p:last-child {
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
  }
`;

const MyPhoneText = styled.p`
  color: #dadada;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`;

const MyPageButton = styled.button`
  margin-left: auto;
  position: relative;

  div {
    position: absolute;
    top: -0.2rem;
    left: -2.7rem;
    width: 2.7rem;
    height: 1.5rem;
    border-radius: 0.8rem;
    background-image: url('/assets/imgs/community/bg-img/reqFriendBg.svg');
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: normal;
  }

  img {
    margin-right: 0;
    border-radius: 0;
  }
`;

export { MyProfileText, MyProfileBox, MyInfoBox, MyPhoneText, MyPageButton };
