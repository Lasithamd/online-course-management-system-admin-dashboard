import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
          © 2023 My Company
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;