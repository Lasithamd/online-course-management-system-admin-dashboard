import React,{useState} from 'react';
import { Container, Box, TextField, Button, Typography, Avatar,Snackbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import instance  from '../../../service/AxiosOrder';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const saveData = () => {
    
    console.log(password);
    
      if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
      }

      const data = {
          name: name,
          email: email,
          password: password,
      };

      instance.post('user/register', data)
          .then(function (res) {
              console.log(res);
              setSuccess(true);
              navigate('/login'); // Redirect to the login page after successful registration
          })
          .catch(function (error) {
              console.error(error);
              setError('Registration failed. Please try again.');
          });
  };

  const handleCloseSnackbar = () => {
      setError('');
      setSuccess(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid #ccc', // Add border here
            padding: '20px', // Add padding for better spacing inside the form
            borderRadius: '10px', // Add rounded corners
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        
        <form noValidate>
          <TextField onChange={(val)=>setName(val.target.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField onChange={(val)=>setEmail(val.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField onChange={(val)=>setPassword(val.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField onChange={(val) => setConfirmPassword(val.target.value)}
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={()=>saveData()}
          >
            Sign Up
          </Button>
        </form>
        <Snackbar
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={error}
                />
                <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message="Registration successful! Redirecting to login."
                />
        </Box>
     
    </Container>
  );
}

export default Register;
