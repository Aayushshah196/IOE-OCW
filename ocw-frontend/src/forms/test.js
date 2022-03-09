// import React, { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import FormControl from '@mui/material/FormControl';
// import Switch from '@mui/material/Switch';
// import InputLabel from '@mui/material/InputLabel';
// import DatePicker from '@mui/lab/DatePicker';

// import { Controller, useForm } from 'react-hook-form';

// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from 'react-router-dom';
// import { CourseDetailAction } from "../actions/pageActions";
// import Loader from '../components/Loader';

// export default function CourseForm() {
//     const { register, control, handleSubmit, errors } = useForm();
//     const onSubmit = (data) => {
//       console.log(data);
//     }

//     const [value, setValue] = React.useState(null);

//     // const location = useLocation();
//     // const {uid} = location.state;
//     // const dispatch = useDispatch();
//     // const courseDetail = useSelector((state) => state.courseDetail);
//     // const { error, loading, courseData } = courseDetail;

    

//     // useEffect(() => {
//     //   dispatch(CourseDetailAction(uid));
//     // }, [dispatch, uid]);


//     return (
//       <div style={{margin:50}}>
//       <Typography variant="h6" gutterBottom>
//         Course Details
//       </Typography>
//       {/* { loading ? (
//           <Loader loading={loading} />
//       ) : error ? (
//           <h1>Error on loading the courses</h1> 
//       ) : ( */}
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
          
//         <TextField
//                 required
//                 id="title"
//                 name="title"
//                 label="Title"
//                 fullWidth
//                 autoComplete="title"
//                 variant="standard"
//                 {...register('title')}
//           />
//         </Grid>
        
//         <Grid item xs={12}>
//         <TextField
//                   required
//                   id="summary"
//                   name="summary"
//                   label="Summary"
//                   fullWidth
//                   autoComplete="summary of course"
//                   variant="standard"
//                   // default={courseData?.summary}
//                   {...register('summary')}
//                 />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <FormControl variant="standard" 
//         fullWidth
//         autoComplete="Difficulty of course" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="difficulty-label">Difficulty</InputLabel>
//         <Select
//           fullWidth
//           id="difficulty"
//           label="difficulty"
//           name="difficulty"
//           {...register('difficulty')}
//         >
//           <MenuItem value={"beginner"}>Beginner</MenuItem>
//           <MenuItem value={"intermediate"}>Intermediate</MenuItem>
//           <MenuItem value={"advanced"}>Advanced</MenuItem>
//         </Select>
//       </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                     label="Start Date"
//                     name="startDate"
//                     variant="standard"
//                     {...register('startDate')}
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//             </LocalizationProvider>
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="subject"
//             name='subject'
//             label="Subject"
//             fullWidth
//             autoComplete="subject"
//             variant="standard"
//             {...register('subject')}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             required
//             id="pace"
//             name='pace'
//             label="Pace"
//             fullWidth
//             autoComplete="Course Pace"
//             variant="standard"
//             {...register('pace')}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             id="cost"
//             name='cost'
//             label="Cost"
//             fullWidth
//             variant="standard"
//             {...register('cost')}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             required
//             id="duration"
//             name='duration'
//             label="Duration"
//             fullWidth
//             autoComplete="Course Duration"
//             variant="standard"
//             {...register('duration')}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             id="time-management"
//             name='time-management'
//             label="Time Management"
//             fullWidth
//             variant="standard"
//             {...register('time-management')}
//           />
          
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//                 required
//                 id="outlined-multiline-static"
//                 name='description'
//                 label="Description"
//                 fullWidth
//                 autoComplete="Course Description"
//                 multiline
//                 rows={10}
//                 variant="outlined"
//                 {...register('description')}
//             />
            
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             required
//             id="instructor"
//             name='instructor'
//             label="Instructor uuid"
//             fullWidth
//             autoComplete="Course Instructor"
//             variant="standard"
//             {...register('instructor')}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//             id="thumbnail"
//             name='thumbnail'
//             label="Thumbnail"
//             fullWidth
//             variant="standard"
//             {...register('thumbnail')}
//           />
          
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             name='credit'
//             control={<Switch color="primary" />}
//             label="Certificate on Completion : "
//             labelPlacement="start"
//             {...register('credit')}
//           />
//         </Grid>
//         <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
//         Submit
//       </Button>
//       </Grid>
//       {/* )} */}
//       </div>
//   );
// }