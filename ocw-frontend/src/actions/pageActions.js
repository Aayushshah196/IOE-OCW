import {
  PAGE_LOAD_REQUEST,
  PAGE_LOAD_SUCCESS,
  PAGE_LOAD_FAIL,

  MYCOURSE_LOAD_REQUEST,
  MYCOURSE_LOAD_SUCCESS,
  MYCOURSE_LOAD_FAIL,

  COURSE_DETAIL_REQUEST,
  COURSE_DETAIL_SUCCESS,
  COURSE_DETAIL_FAIL,

  ENROLLMENT_REQUEST,
  ENROLLMENT_SUCCESS,
  ENROLLMENT_FAIL,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

} from "../constants/pageConstants";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function setHeader(){
  // console.log(JSON.parse(localStorage.getItem('userInfo'))['id']);
  const access=JSON.parse(localStorage.getItem('userInfo'))['access'];
  axios.defaults.headers.common['Authorization'] = "JWT "+access.toString()
}

export const pageLoadAction = () => async (dispatch) => {
  try {
    dispatch({ type: PAGE_LOAD_REQUEST });
    const { data } = await axios.get( `${process.env.REACT_APP_URL}/api/course/?format=json`);
    dispatch({
      type: PAGE_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAGE_LOAD_FAIL,
      payload:
        error.response && error.response.data
          ? {message: false}
          : {message: false},
    });
  }
};

export const getCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: MYCOURSE_LOAD_REQUEST });
    const uid=JSON.parse(localStorage.getItem('userInfo'))['id'];
    const { data } = await axios.get( `${process.env.REACT_APP_URL}/api/mycourse/${uid}?format=json`);
    
    console.log(uid);
    console.log(data);
    dispatch({
      type: MYCOURSE_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MYCOURSE_LOAD_FAIL,
      payload:
        error.response && error.response.data
          ? {message: false}
          : {message: false},
    });
  }
};

export const CourseDetailAction = (uid) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAIL_REQUEST });
    uid = "e0584564-0713-4e53-a9e6-6564f0599e5c";
    let test;
    if(uid){
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/course/${uid}\?format=json`);
      test = data;
    }
    else if(!uid){
      test = {new:true};
    }
    
    dispatch({
      type: COURSE_DETAIL_SUCCESS,
      payload: test[0],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: COURSE_DETAIL_FAIL,
      payload:
        error.response && error.response.data
          ? {message: false}
          : {message: false},
    });
  }
};


export const CourseEnrollAction = ( userId, courseId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ENROLLMENT_REQUEST,
    });
    console.log("course enroll request");
    setHeader();
    const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/enroll/`, {userId:userId, courseId:courseId});
    dispatch({
      type: ENROLLMENT_SUCCESS,
      payload: data,
    });
    window.location.assign(`/course/${userId}/${courseId}`);
  } catch (error) {
    
    console.log(error);
    dispatch({
      type: ENROLLMENT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const loginAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/jwt/create/`,body);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { ...data },
    });
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...data })
    );
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};