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
  USER_LOGIN_LOGOUT,
  
} from "../constants/pageConstants";

export const pageLoadReducer = (state = { courses: {} }, action) => {
  switch (action.type) {
    case PAGE_LOAD_REQUEST:
      return { loading: true, ...state };

    case PAGE_LOAD_SUCCESS:
      return { loading: false, courses: action.payload };

    case PAGE_LOAD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const myCourseLoadReducer = (state = { myCourses: {} }, action) => {
  switch (action.type) {
    case MYCOURSE_LOAD_REQUEST:
      return { loading: true, ...state };

    case MYCOURSE_LOAD_SUCCESS:
      console.log(action.payload);
      return { loading: false, myCourses: action.payload };

    case MYCOURSE_LOAD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const courseDetailReducer = (state = { courseData: {} }, action) => {
  switch (action.type) {
    case COURSE_DETAIL_REQUEST:
      return { loading: true, ...state };

    case COURSE_DETAIL_SUCCESS:
      return { loading: false, courseData: action.payload };

    case COURSE_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const courseEnrollmentReducer = (state = { enrollStatus: false }, action) => {
  switch (action.type) {
    case ENROLLMENT_REQUEST:
      return { loadingEnroll: true, ...state };

    case ENROLLMENT_SUCCESS:
      return { loadingEnroll: false, enrollStatus: action.payload };

    case ENROLLMENT_FAIL:
      return { loadingEnroll: false, errorStatus: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGIN_LOGOUT:
      return {};

    default:
      return state;
  }
};