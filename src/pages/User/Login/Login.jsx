import React,{useState} from 'react';
import { Container, Box, TextField, Button, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import instance  from '../../../service/AxiosOrder';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin= () =>{
    
    if(email != '' && password != ''){
      const data ={
        email:email,
        password:password,
      }
      instance.post('/user/login',data)
      .then(function(res){
        console.log(res.data.token);
        localStorage.setItem('stu-login', res.data.token);
        window.location.reload
      })
      .catch(function(error){
        console.log(error);
      });
    }
   
  }

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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField onChange={(val)=>setEmail(val.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(val)=>setPassword(val.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button onClick={()=>onLogin()}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
