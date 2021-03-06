import InProgress from "../../components/InProgress/InProgress";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import { getCourseAction } from "../../actions/pageActions";
import Loader from '../../components/Loader';
import axios from 'axios';

export default function MyCourses() { 
    const [myCourses, setCourses] = useState([]);
    // const dispatch = useDispatch();
    // const myCourseLoad = useSelector((state) => state.myCourseLoad);
    // const { error, loading, myCourses } = myCourseLoad;
    useEffect(() => {
        // dispatch(getCourseAction());
        const uid=JSON.parse(localStorage.getItem('userInfo'))['id'];
        axios.get( `${process.env.REACT_APP_URL}/api/mycourse/${uid}?format=json`).then(
            res => {
                setCourses(res.data);
                console.log(res.data);
                
                console.log(myCourses);
            }
        );
        // setCourses(data);
    }, []);
    return (
        <div>
            
            <h1>My Courses</h1>
            {/* { loading ? (
                <h1>fetching the courses from backend</h1>
                // <Loader loading={loading} />
            ) : error ? (
                <h1>Error on loading the courses</h1> 
            ) : ( */}
                <div>
                {myCourses && myCourses.map(course => <InProgress course={course}/> )}
                    {/* // <InProgress course={course}/>)} */}
                {/* <InProgress/> */}
                </div>
            {/* } */}

        </div>
    )
}