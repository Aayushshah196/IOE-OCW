import './App.css';
import * as React from 'react';

import Accounts from './components/Accounts';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from './screens/home/index';

import Courses from './screens/Courses';
import Navbar from './components/NavbarElements/navbar';
import Footer from './components/Footer/footer';
import CourseDetails from './screens/CourseDetails/CourseDetails';
import CourseView from './screens/CourseView'; 
import CourseForm from './forms/CourseForm';
import LessonForm from './forms/LessonForm';
import ResetPassword from './components/Accounts/ResetPassword';
import Dashboard from './components/dashboard/dashboard';
import SearchPage from './screens/SearchPage';
import SearchNotFound from './screens/error';
function App(){

  return (  
    <div className="App">
      <div>
        <Routes>
            <Route path="password/*" element={<div></div>} />
            <Route path="account/*" element={<div></div>} />
            <Route path="/*" element={<Navbar />} />
        </Routes>
      </div>

      <div>
      
        <Routes>
            <Route path="/search" element={<SearchNotFound/>} />
            <Route path="/test" element={<SearchPage/>} />
            <Route path="/dash" element={<Dashboard/>} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="account/*" element={<Accounts />} />
            <Route path="/home" element={<IndexPage />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/course/:courseId/:lessonId" element={<CourseView />} />
            <Route path="/course/:courseId/edit" element={<CourseForm />} />
            <Route path="/course/:courseId/:lessonId/edit" element={<LessonForm />} />
            <Route path="password/reset/confirm/:id/:token" element={<ResetPassword/>} />  
            <Route path="*" element={<h1>Error: Page Not Found</h1>} />
        </Routes>
    
      </div>

      <div>  
        <Routes>
          <Route path="password/*" element={<div></div>} />
          <Route path="account/*" element={<div></div>} />
          <Route path="/*" element={<Footer />} />
        </Routes>
      </div>

      </div>
      
  );
}

export default App;
