import React from 'react';
import { logout } from './auth';

function Logout() {
  logout();
  return <div></div>;
}

export default Logout;
