import SignIn from 'components/login/SignIn';
<<<<<<< HEAD
import Header from '../../layouts/Header';
import AgreementTerms from 'components/login/signUp/AgreementTerms';
import SignUp from 'components/login/signUp/SignUp';
import FindingInfo from 'components/login/FindingInfo';
import React, { useState } from 'react';

const LoginPage = () => {
  return <SignIn />;
=======
// import Header from '../../layouts/Header';
// import AgreementTerms from 'components/login/signUp/AgreementTerms';
// import SignUp from 'components/login/signUp/SignUp';
// import FindingInfo from 'components/login/FindingInfo';

const LoginPage = () => {
  return (
    <>
      <SignIn />
      {/* <AgreementTerms /> */}
      {/* <SignUp /> */}
      {/* <FindingInfo /> */}
    </>
  );
>>>>>>> ff4bb25 (Merge branch develop into main)
};

export default LoginPage;
