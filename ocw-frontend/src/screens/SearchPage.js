import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from '../components/CourseCard';
import { pageLoadAction } from "../actions/pageActions";
import Loader from '../components/Loader';


export default function SearchPage(){
    
    const dispatch = useDispatch();
    const pageLoad = useSelector((state) => state.pageLoad);
    const { error, loading, courses } = pageLoad;

    useEffect(() => {
        dispatch(pageLoadAction());
    }, [dispatch]);

    return(
        <div>
            { loading ? (
            // <h1>fetching the courses from backend</h1>
                <Loader loading={loading} />
            ) : error ? (
                <h1>Error on loading the courses</h1> 
            ) : (
                <div>
                {courses && courses.featured && 
                    <CourseCard courses={courses.featured.concat(courses.featured, courses.featured, courses.featured, courses.featured, courses.featured, courses.featured, courses.featured, courses.featured, courses.featured,courses.featured, courses.featured, courses.featured, courses.featured, courses.featured, courses.featured,courses.featured, courses.featured, courses.featured, courses.featured)} />
                }
                </div>
            )
        }
        </div>
    )
}