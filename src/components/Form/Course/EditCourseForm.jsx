// src/components/AddStudentForm.js
import React, { useState,useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import instance  from '../../service/AxiosOrder';

const EditCourseForm = ({ id, onClose  }) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [app_password, setApp_password]=useState('');

  useEffect(() => {
  
    
    instance.get(`/student/${id}`)
    .then(response => {
      const student = response.data;
      console.log(student[0]);
      setName(student[0].name); // Fallback to empty string
      setPhone(student[0].phone); // Fallback to empty string
      setEmail(student[0].email); // Fallback to empty string
      setApp_password(student[0].app_password);
 
     
       // Fallback to empty string
    })
      .catch(error => {
        console.error("Error fetching student data:", error);
      });
  }, [id]);

  const onSubmit = () => {
    const student = {
      name,
      phone,
      email,
      app_password
    };

    instance.put(`/student/${id}`, student) // Update student data
      .then(() => {
        console.log("Student updated successfully");
        onClose(); // Close the form after successful update
      })
      .catch(error => {
        console.error("Error updating student:", error);
      });
  };

  
  return (
    <Container maxWidth="sm">
    <Box component="form" sx={{ marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Edit Student
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
        name="phone"
        label="Phone"
        value={phone}
        onChange={(val)=>setPhone(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(val)=>setEmail(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
       <TextField
        name="app_password"
        label="App Password"
        type="password"
        value={app_password}
        onChange={(val)=>setApp_password(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <Button type="button" onClick={onSubmit} variant="contained" color="primary">
        Edit Student
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary" sx={{ marginLeft: 1 }}>
        Cancel
      </Button>
    </Box>
    </Container>
  );
};

export default EditStudentForm;
