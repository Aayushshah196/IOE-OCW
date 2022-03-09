import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  pageLoadReducer,
  myCourseLoadReducer,
  courseDetailReducer,
  userLoginReducer,
  courseEnrollmentReducer,
} from "./reducers/pageReducers";

const reducer = combineReducers({
  pageLoad: pageLoadReducer,
  myCourseLoad: myCourseLoadReducer,
  courseDetail: courseDetailReducer,
  userLogin: userLoginReducer,
  courseEnroll: courseEnrollmentReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") 
  ? JSON.parse(localStorage.getItem("userInfo")) 
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;