import { FormControlUnstyledContext } from '@mui/base';
import React, { useEffect, useState } from 'react';
import { getInfo } from './Accounts/auth';
import { isLoggedIn, setStatus } from './Accounts/Authvariables';

function Myinfo() {
  useEffect(()=>{
    setStatus();
    if(!isLoggedIn)
      window.location.assign('/');
  },[])

  const [image, setimage] = useState('');
  const [dob,setDob]=useState();
  const [isInstructor,setInstructor]=useState(true);
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email,setEmail]=useState('');
  

  useEffect(()=>{
    if(!isLoggedIn)
      window.location.assign('/signin')

   getInfo()
  .then((me)=>{
                setimage(me.image);
                setDob(me.dob);
                setInstructor(me.isInstructor);
                setfirst_name(me.first_name);
                setlast_name(me.last_name);
                setEmail(me.email)}
              )
    },[]);

  return( 
      <div>
        Email:{email}<br/>
        FirstName:{first_name}<br/>
        LastName:{last_name}<br/>
        LastName:{dob}<br/>
        <img src={image} height="90vh"/><br/>
        isInstructor:{isInstructor.toString()}<br/>   
        token:{localStorage.getItem('access')}<br/>    
      </div>
    )
}

export default Myinfo;
