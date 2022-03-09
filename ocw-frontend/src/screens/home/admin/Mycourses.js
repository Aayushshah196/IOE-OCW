import CourseCard from "./CourseCard";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { getCourseAction } from "../../../actions/pageActions";
import Loader from '../../../components/Loader';
import axios from 'axios';

export default function AdminCourses() { 
    const [myCourses, setCourses] = useState([]);

    let navigate = useNavigate();

    // const dispatch = useDispatch();
    // const myCourseLoad = useSelector((state) => state.myCourseLoad);
    // const { error, loading, myCourses } = myCourseLoad;
    useEffect(() => {
        // dispatch(getCourseAction());
        const uid=JSON.parse(localStorage.getItem('userInfo'))['id'];
        axios.get( `${process.env.REACT_APP_URL}/api/mycourse/${uid}?format=json`).then(
            res => {
                setCourses(res.data);
                console.log(res.data)
            }
        );
        // setCourses(data);
    }, []);
    return (
        <div>
            <Grid container alignItems="center">
            <h1>My Courses</h1>
            <Button onClick={(e) => {
                navigate('/hull');
            }}>
                New Course
            </Button>

            {/* { loading ? (
                <h1>fetching the courses from backend</h1>
                // <Loader loading={loading} />
            ) : error ? (
                <h1>Error on loading the courses</h1> 
            ) : ( */}

                <div>
                {myCourses && myCourses.map(course => <CourseCard course={course}/> )}
                </div>
            
            </Grid>
        </div>
    )
}