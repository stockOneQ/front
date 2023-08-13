import styled from 'styled-components';

const MyProfileText = styled.p`
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  padding: 3rem 2rem 1.7rem;
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const MyProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem 0 2rem;
<<<<<<< HEAD

=======
  
>>>>>>> ff4bb25 (Merge branch develop into main)
  img {
    border-radius: 50%;
    margin-right: 1.9rem;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const MyInfoBox = styled.div`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  margin-bottom: 0.9rem;

=======
  margin-bottom: .9rem;
  
>>>>>>> ff4bb25 (Merge branch develop into main)
  p:first-child {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: normal;
  }
<<<<<<< HEAD

  p:first-child::after {
    content: '|';
    padding: 0 0.5rem 0 0.7rem;
=======
  
  p:first-child::after {
    content: "|";
    padding: 0 .5rem 0 .7rem;
>>>>>>> ff4bb25 (Merge branch develop into main)
  }

  p:last-child {
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
  }
<<<<<<< HEAD
`;

const MyPhoneText = styled.p`
  color: #dadada;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`;
=======
`

const MyPhoneText = styled.p`
  color: #DADADA;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`
>>>>>>> ff4bb25 (Merge branch develop into main)

const MyPageButton = styled.button`
  margin-left: auto;
  position: relative;

<<<<<<< HEAD
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
=======
  button {
    position: absolute;
    top: -.2rem;
    left: -2.7rem;
    width: 2.7rem;
    height: 1.5rem;
    border-radius: .8rem;
    background-image: url('/assets/imgs/community/bg-img/reqFriendBg.svg');
    color: var(--color-white);
    text-align: center;
    font-size: .9rem;
>>>>>>> ff4bb25 (Merge branch develop into main)
    font-weight: 600;
    line-height: normal;
  }

  img {
    margin-right: 0;
    border-radius: 0;
  }
<<<<<<< HEAD
`;

export { MyProfileText, MyProfileBox, MyInfoBox, MyPhoneText, MyPageButton };
=======
`

export { MyProfileText, MyProfileBox, MyInfoBox, MyPhoneText, MyPageButton }
>>>>>>> ff4bb25 (Merge branch develop into main)
