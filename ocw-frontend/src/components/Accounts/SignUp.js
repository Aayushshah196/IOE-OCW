import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import {signup} from './auth'
import { setStatus,isLoggedIn } from './Authvariables';

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

export default function NewSignUp(){
  useEffect(()=>{
    setStatus();
    if(isLoggedIn)
      window.location.assign('/');
    },[])
    const [isInstructor,setInstructor]=useState(true);
    const [dob,setDob]=useState();
    const [FnameValid, setFnameValid] = useState(true);
    const [LnameValid, setLnameValid] = useState(true);
    const [EmailValid,setEmailValid]=useState(true);
    const [passwordValid, setpasswordValid] = useState(true);
    const [profileImage, setprofileImage] = useState("https://pcampus.edu.np/wp-content/uploads/2021/01/cropped-pcamus-header-image1-1.jpg");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    data.append('isInstructor',isInstructor);
    // console.log(data.get('isInstructor'));
    // console.log(data.get('first_name'));
    // console.log(data.get('last_name'));
    // console.log(data.get('email'));
    // console.log(data.get('password'));
    // console.log(data.get('dob'));
    // console.log(data.get('image'));

        signup(data)
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
              SignUp
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} width="75%">
            <Grid fullwidth>
                  <Button sx={{width:"50%"}} color={!isInstructor?"secondary":"primary"} variant='contained' onClick={()=>setInstructor(false)}>Student</Button>
                  <Button sx={{width:"50%"}} color={isInstructor?"secondary":"primary"} variant='contained' onClick={()=>setInstructor(true)}>Instructor</Button>  
            </Grid> 
            <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoFocus
                error={!FnameValid}
                onBlur={(e)=>{setFnameValid(!(/[^a-zA-Z]/.test(e.target.value)));}}
              />
               
               <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoFocus
                error={!LnameValid}
                onBlur={(e)=>{setLnameValid(!(/[^a-zA-Z]/.test(e.target.value)));}}
              />
               
              <TextField
                type="email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={!EmailValid}
                onBlur={(e)=>{setEmailValid((e.target.value).toString().toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))}}
              />
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
                onBlur={(e)=>{ setpasswordValid(e.target.value.toString().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/))}}
              />
                {!passwordValid && <Alert severity="error">
                    Password must have at least eight character,a number,lower and uppercase letter,special characters.
                </Alert>}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker inputFormat="yyyy-MM-dd"    value={dob}   onChange={(e)=>setDob(e)}  
                    renderInput={(params) => <TextField 
                    {...params}
                    label="DOB"
                    name="dob"
                    margin="normal"
                    required
                    fullWidth/>}
                  />      
                </LocalizationProvider>

                 <input  onChange={(e)=>{setprofileImage(URL.createObjectURL(e.target.files[0]))}} name="image" accept="image/*" type="file" id="select-image"  style={{ display: 'none' }} fullwidth required/><br/>
                <label htmlFor="select-image">
                      <Button variant="contained" color="primary" component="span" margin="normal" 
                      fullWidth>
                              Profile Picture
                        </Button>
                  </label>   
                  <br/><br/>
                  <Grid align="center" margin="normal" >
                    <Avatar alt="Profile pic" src={profileImage} sx={{ width: 56, height: 56 }}/>
                  </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="signin" variant="body2">
                    Sign In
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="forgotpassword" variant="body2">
                    {"Forgot Password"}
                  </Link>
                </Grid>
              </Grid>
                
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}