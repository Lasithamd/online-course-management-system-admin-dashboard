// src/components/AddStudentForm.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import instance  from '../../../service/AxiosOrder';

const AddCourseForm = ({ onClose }) => {
  
  const [name, setName] = useState('');
  const [description, setPhone] = useState('');

  const onSubmit =()=>{
    const course = {
      name: name,
      description: description,
    };
 
    
    instance.post('/course/',course)
      .then(function (res) {
      })
      .catch(function (error) {
        console.log(error);
      });
    
    onClose();
  }

  
  return (
    <Container maxWidth="sm">
    <Box component="form" sx={{ marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Course
      </Typography>
      <TextField
        name="name"
        label="Name"
     
        onChange={(val)=>setName(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="description"
        label="description"
        onChange={(val)=>setPhone(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      
      <Button type="button" onClick={onSubmit} variant="contained" color="primary">
        Create Student
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary" sx={{ marginLeft: 1 }}>
        Cancel
      </Button>
    </Box>
    </Container>
  );
};

export default AddCourseForm;
