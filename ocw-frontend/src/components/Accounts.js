import React from 'react';
import ForgotPassword from './Accounts/ForgotPassword';
import ResetPassword from './Accounts/ResetPassword';
import SignIn from './Accounts/SignIn';
import SignUp from './Accounts/SignUp';
import { Route,Routes } from 'react-router-dom';
import Logout from './Accounts/Logout';
import { setStatus } from './Accounts/Authvariables';

function Accounts() {
  setStatus();
  return(
    <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="/password/reset/confirm/:id/:token" element={<ResetPassword/>} />
          <Route path='logout' element={<Logout/>}/>
      </Routes>
  );
}

export default Accounts;
