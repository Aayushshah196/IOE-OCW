import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { isLoggedIn, setStatus } from './Authvariables';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ResetPassword(){
  useEffect(()=>{
    setStatus();
    if(isLoggedIn)
      window.location.assign('/');
    },[])
  const [password,setPassword]=useState('');
  const [match,setMatch]=useState(true);
  const [passwordValid, setpasswordValid] = useState(true);

  const {id,token}=useParams();


  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();

    console.log({passwordValid,match});
    if(!passwordValid || !match)
        return;
        
        axios.post(`${process.env.REACT_APP_URL}/auth/users/reset_password_confirm/`,{
          ['uid']:id,
          ['token']:token,
          ['new_password']:data.get('password'),
      })
      .then(window.location.assign('/'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} width="75%">
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!passwordValid}
                onBlur={(e)=>{setPassword(e.target.value);setpasswordValid(!!e.target.value.toString().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/))}}
              />
                {!passwordValid && <Alert severity="error">
                    Password must have at least eight character,a number,lower and uppercase letter,special characters.
                </Alert>}
                <TextField
                margin="normal"
                required
                fullWidth
                name="repassword"
                label="Retype Password"
                type="password"
                id="repassword"
                autoComplete="current-password"
                onBlur={(e)=>{setMatch(password===e.target.value)}}
                error={!match}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
  
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}