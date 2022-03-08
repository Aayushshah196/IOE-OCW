import React, {useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@material-ui/core';

import HomePage from './HomePage';
import MyCourses from './MyCourses';
import CompletedCourses from './CompletedCourse';

export default function IndexPage () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }; 
    
    return (
        <div>
            <Tabs value={value} onChange={handleChange} textColor="Black" variant="fullWidth">
                <Tab label="Home" />
                <Tab label="In progress" />
                <Tab label="Completed" />
            </Tabs>
            <Divider/>
        
        <div>
            {value===0 ? (<HomePage />) : value===1 ? (<MyCourses />) : (<CompletedCourses />)}
            {/* {value===1 && <MyCourses />}
            {value===2 && <CompletedCourses />} */}
        </div>
    </div>
    )
};