import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------


export default function SearchNotFound() {
  return (
    <Box>
      <Typography gutterBottom align="center" variant="h1" sx={{margin:3}}>
        Error 404
      </Typography>
      <Typography gutterBottom align="center" variant="h4" sx={{margin:3}}>
        Page Not found
      </Typography>
      <Typography variant="body2" align="center" sx={{margin:5}}>
        Go to <strong style={{cursor: "pointer"}} onClick={()=>{window.location.assign('/')}}>HomePage</strong>, if you are lost !!!
      </Typography>
    </Box>
  );
}