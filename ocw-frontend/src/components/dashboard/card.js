import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@material-ui/core';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  width: 130,
  height: 130,
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
}));

export default function Sample({ context, value }) {
  return (
      <Item elevation={3}>
        <Typography
          sx={{color:'#ff0000',
          backgroundColor: '#1565c0'}}
          component="div"
          variant="h5"
        >
        {value}
        </Typography>
        <Typography variant="h6">
          {context}
        </Typography>
      </Item>
  );
}
