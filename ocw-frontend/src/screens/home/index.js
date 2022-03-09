import React, {useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@material-ui/core';

import HomePage from './HomePage';
import MyCourses from './MyCourses';
import CompletedCourses from './CompletedCourse';

import AdminCourses from './admin/Mycourses';

import Dashboard from '../../components/dashboard/dashboard';

export default function IndexPage () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const role = localStorage.getItem("userInfo") 
        ? JSON.parse(localStorage.getItem('userInfo'))['role']
        : null;
    
    
    return (
        <div>
            
                {(role && role==1) ? (
                    <Tabs value={value} onChange={handleChange} textColor="Black" variant="fullWidth">
                        <Tab label="Dashboard" />
                        <Tab label="My courses" />
                    </Tabs>
                ) : (
                    <Tabs value={value} onChange={handleChange} textColor="Black" variant="fullWidth">
                    <Tab label="Home" />
                    <Tab label="In progress" />
                    <Tab label="Completed" />
                    </Tabs>
                )}

            
            <Divider/>
        
        <div>
            {(role && role==1) ? (
                <div>
                    
                {value===0 && <Dashboard /> } 
                { value===1 && <AdminCourses />}
                </div>
                ) : (
                    <div>
                {value===0 && <HomePage />} 
                {value===1 && <MyCourses />} 
                {value===2 && <CompletedCourses />}
                </div>
            )}
        </div>
    </div>
    )
};