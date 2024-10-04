import React, { useEffect, useState } from 'react';
import instance from '../../../service/AxiosOrder'
import { Card, CardContent, Typography, Box, Grid, CircularProgress } from '@mui/material';

function StudentCourseList(props){

    const [courses, setCourses] = useState([]); // State to store fetched courses

    useEffect(() => {
        // instance.get(`/student-course/${id}`)
        instance.get(`/student-course/${props.id}`)
          .then((response) => {
            setCourses(response.data); 
           console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      }, []);

    return (
      <Box>
      <Typography variant="h4" gutterBottom>Your Courses List</Typography>
      <Grid container spacing={3}>
        {
          courses.length > 0 ? (
            courses.map(course => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{course.course_name}</Typography>
                    <Typography variant="body2" color="text.secondary">{course.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No courses found</Typography> // Message if no courses are found
          )
        }
      </Grid>
    </Box>
    );

}

export default StudentCourseList;