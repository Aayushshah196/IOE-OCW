import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Sample from '../static/images/sample.jpg';
import { Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CourseCard from '../components/CourseCard';
import mockData from '../mocks/courses';

export default function Courses({courses}) {
    const theme = useTheme();
    return (
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
      >
      {mockData && 
          mockData.map(course => 
            
      <Grid item xs={12} sm={4} md={3}>
              <CourseCard course={course} key={course.key} />
      </Grid>
          )
      }

      </Grid>
    )
}

