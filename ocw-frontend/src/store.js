import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  pageLoadReducer,
  courseDetailReducer,
  userLoginReducer,
  courseEnrollmentReducer,
} from "./reducers/pageReducers";

const reducer = combineReducers({
  pageLoad: pageLoadReducer,
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