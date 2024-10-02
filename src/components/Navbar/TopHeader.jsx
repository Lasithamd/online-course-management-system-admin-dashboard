import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
const TopHeader = () => {
  const logOut=() =>{
    localStorage.removeItem('stu-login');
    window.location.reload();
  }
  return (
    <AppBar position="static" >
      <Container maxWidth="sm">
      <Toolbar>
        {/* Logo on the left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        {/* Centered Menu Items */}
        <Button color="inherit" component={Link} to="/student">Student</Button>
        <Button color="inherit" component={Link} to="/course">Course</Button>
        <Button color="inherit" component={Link} to="/video">Video</Button>

        {/* Logout Button on the right */}
        <Button onClick={()=>logOut()} color="inherit">Logout</Button>
      </Toolbar>
      </Container>
      
    </AppBar>
  );
};

export default TopHeader;