import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Sample from "../static/images/sample.jpg";


export default function CourseCard ({course}) {
    return (
        
        // <Grid
        //     container
        //     spacing={2}
        //     direction="row"
        //     justify="flex-start"
        //     alignItems="flex-start"
        // >
        //     { courses && courses.map(course => 
            
        //         <Grid item xs={12} sm={6} md={3}  key={course.id} >
                    <Link 
                        to={`/course/${course.title}`} 
                        state= {{ uid: course.id }} 
                        style={{ textDecoration: 'none'}}>
                    <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={Sample}
                        alt="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        {course.title}
                        </Typography>
                        <Box
                            fontSize={17}
                            component="div" 
                            overflow="hidden"            
                            whiteSpace="pre-line"
                            textOverflow="ellipsis"
                            height={95}       
                            textAlign="left"   
                        >
                        {course.description}{course.id}
                        </Box>
                        
                    </CardContent>
                    
                    <CardActions style={{justifyContent:"space-around"}}>
                        <Typography fontSize={13} variant="h7" >FREE*</Typography>
                        <Typography fontSize={13} variant="h7">{course.duration} WEEKS LONG</Typography>
                        <Typography fontSize={13} variant="h7">AVAILABLE NOW</Typography>
                    </CardActions>
                    </Card>
                    </Link>
        //         </Grid>
                
        //     )}
        // </Grid>
    );
}