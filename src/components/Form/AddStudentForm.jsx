// src/components/AddStudentForm.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import instance  from '../../service/AxiosOrder';

const AddStudentForm = ({ onClose }) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [app_password, setApp_password]=useState('');

  const onSubmit =()=>{
    const student = {
      name: name,
      phone: phone,
      email: email,
      app_password: app_password
    };
    console.log(student);
    
    instance.post('/student/',student)
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
        Add Student
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
        name="phone"
        label="Phone"
        onChange={(val)=>setPhone(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        onChange={(val)=>setEmail(val.target.value)}
        fullWidth
        required
        margin="normal"
      />
       <TextField
        name="app_password"
        label="App Password"
        type="password"
        onChange={(val)=>setApp_password(val.target.value)}
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

export default AddStudentForm;
