import React, { useState,useEffect } from 'react';
import { Box, Button, Container, TextField, Typography,MenuItem,
    Select, InputLabel,FormControl} from '@mui/material';
import instance from '../../../service/AxiosOrder';

 function Course(){

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        instance.get('/course')
          .then((response) => {
            setCourses(response.data); // Store course list from API
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      }, []);

return(
    <FormControl fullWidth margin="normal">
            <InputLabel>Select Course</InputLabel>
            <Select  required >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
)
 }
 export default Course;