import axios from "axios";
import {clearToken,setHeader} from "./auth.js"
let isLoggedIn=false;

function setStatus(){
    const refresh=localStorage.getItem('refresh');
    console.log(refresh);
    if(!refresh){
        clearToken();
        isLoggedIn=false
        return;
    }
    
    axios.post(`${process.env.REACT_APP_URL}/auth/jwt/refresh`,{refresh})
    .then((response)=>{localStorage.setItem('access',response.data.access)})
    .catch((err)=>{clearToken()})
    
    const access=localStorage.getItem('access');
    console.log(access);
    if(!access){
        clearToken(); 
        isLoggedIn=false;
    }
    else
    {
        setHeader();        
        isLoggedIn=true;
    }
};

export  {isLoggedIn,setStatus};