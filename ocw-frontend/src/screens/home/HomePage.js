import React, {useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from'@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import CourseCard from '../../components/CourseCard';
import './HomePage.css';
import { pageLoadAction } from "../../actions/pageActions";
import Loader from '../../components/Loader';

export default function HomePage () {
    const dispatch = useDispatch();
    const pageLoad = useSelector((state) => state.pageLoad);
    const { error, loading, courses } = pageLoad;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(pageLoadAction());
    }, [dispatch]);

    // useEffect(() => {
    //     axios({
    //         "method": "GET",
    //         "url": `/api/course/?format=json`
    //     }).then(async (response)=>{
    //         await setCourses(response.data);
    //     }).catch((e)=>{
    //         console.log(e);
    //     });
    // }, []);
    
    return (
        <div>
        { loading ? (
            // <h1>fetching the courses from backend</h1>
            <Loader loading={loading} />
        ) : error ? (
            <h1>Error on loading the courses</h1> 
        ) : (
            <div className="homepage">
            
            <section className="featured">
                <Box 
                sx={{ width: '100%' }}
                justifyContent="space-between"
                display="flex"
                >
                    <Typography gutterBottom variant="h4" component="div">
                    Featured Courses
                    </Typography>
                    <Button>See More</Button>
                </Box>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                <Grid item xs={12} sm={6} md={3}>
                {courses && courses.featured && 
                    courses.featured.map(course => 
                            <CourseCard course={course} key={course.id}  />
                    )
                }
                </Grid>

                </Grid>
            </section>

            <section className="trending">
                <Box 
                sx={{ width: '100%' }}
                justifyContent="space-between"
                display="flex"
                >
                    <Typography gutterBottom variant="h4" component="div">
                    Trending Courses
                    </Typography>
                    <Button>See More</Button>
                </Box>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                <Grid item xs={12} sm={6} md={3}>
                {courses && courses.trending && 
                    courses.trending.map(course => 
                            <CourseCard course={course} key={course.id}  />
                    )
                }
                </Grid>

                </Grid>
            </section>

            <section className="recently-added">
                <Box 
                sx={{ width: '100%' }}
                justifyContent="space-between"
                display="flex"
                >
                    <Typography gutterBottom variant="h4" component="div">
                    Recently Added Courses
                    </Typography>
                    <Button>See More</Button>
                </Box>

                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                <Grid item xs={12} sm={6} md={3}>
                {courses && courses.recently && 
                    courses.recently.map(course => 
                            <CourseCard course={course} key={course.id}  />
                    )
                }
                </Grid>

                </Grid>
            </section>

            <section className="starting-soon">
                <Box 
                sx={{ width: '100%' }}
                justifyContent="space-between"
                display="flex"
                >
                    <Typography gutterBottom variant="h4" component="div">
                    Soon Starting Courses
                    </Typography>
                    <Button>See More</Button>
                </Box>

                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                <Grid item xs={12} sm={6} md={3}>
                {courses && courses.upcoming && 
                    courses.upcoming.map(course => 
                            <CourseCard course={course} key={course.id}  />
                    )
                }
                </Grid>

                </Grid>
            </section>
        </div>
        )
    }
    </div>
    )
};