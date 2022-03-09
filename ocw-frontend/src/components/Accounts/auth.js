import axios from 'axios';
import {isLoggedIn, setStatus } from './Authvariables';

function setHeader(){
    const access=localStorage.getItem('data')["access"].toString();
    axios.defaults.headers.common['Authorization'] = "JWT "+access.toString()
}

function clearToken(){
    localStorage.removeItem('userInfo');
    delete axios.defaults.headers.common["Authorization"];
}

function logout(body){
    clearToken();
    window.location.assign("/");
    return;
}

async function getInfo(){
    setHeader();
    var me=await axios.get(`${process.env.REACT_APP_URL}/api/auth/users/me/`,null)
    .then(res=>res.data)
    .then((info)=>{return info})
    .catch((err)=>{return null})
    
    return me;
}

async function signin(body){
    await axios.post(`${process.env.REACT_APP_URL}/api/auth/jwt/create/`,body)
    .then((response)=>{
        localStorage.setItem('userInfo',response.data);
        setHeader();
        window.location.assign("/")
    })
    .catch((err)=>{
        clearToken();
    })
    return false;
}

async function signup(body){
    var a=await axios.post(`${process.env.REACT_APP_URL}/auth/users/`,body)
            .then((res)=>console.log(res.data))
            .then((res)=>signin({email:body.get('email'),password:body.get('password')}))
            .catch((err)=>{return false})    
    return a;
}

export {signin,signup,logout,getInfo,setHeader,clearToken}