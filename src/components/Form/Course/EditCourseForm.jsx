
import React, { useState,useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import instance  from '../../../service/AxiosOrder';

const EditCourseForm = ({ id, onClose  }) => {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
  
    instance.get(`/course/${id}`)
    .then(response => {
      const course = response.data[0];
 
      setName(course.name); // Fallback to empty string
      setDescription(course.description); // Fallback to empty string

    })
      .catch(error => {
        console.error("Error fetching Course data:", error);
      });
  }, [id]);

  const onSubmit = () => {
    const course = {
      name,
      description
    };

    instance.put(`/course/${id}`, course) 
      .then(() => {
        console.log("Course updated successfully");
        onClose(); // Close the form after successful update
      })
      .catch(error => {
        console.error("Error updating Course:", error);
      });
  };

  
  return (
    <Container maxWidth="sm">
    <Box component="form" sx={{ marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Edit Course
      </Typography>
      <TextField
        name="name"
        label="Name"
        value={name}
        onChange={(val)=>setName(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={(val)=>setDescription(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      
      <Button type="button" onClick={onSubmit} variant="contained" color="primary">
        Edit Course
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary" sx={{ marginLeft: 1 }}>
        Cancel
      </Button>
    </Box>
    </Container>
  );
};

export default EditCourseForm;
