import * as React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    margin: "30px",
    padding: "20px",
    maxWidth: "950px",
  },
  cardImage:{
    width: 151,
    
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  button: {
    height: "40px",
    margin: "10px",
  },
  moreButton: {
    marginTop: "1px",
    marginRight: "0px",
  },
  moreBox: {
    marginLeft:"10px",
  }
}));

function CourseCard({course}) {
  console.log(course);
  const classes = useStyles(); 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log(course)
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require("./1.png")}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Course | Standford University
          </Typography>
          <Typography component="div" variant="h5">
            {course.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {course.summary}
            You have reached this for don't stop keep going. You can finish it
            on time.
          </Typography>
        </CardContent>
      </Box>
      <Box className={classes.buttonBox}>
        <Button variant="contained" className={classes.button}>
          Go To Course
        </Button>
      </Box>
      <Box className={classes.moreBox}>
        <IconButton className={classes.moreButton} onClick={handleClick}>
          <MoreVertIcon  />
        
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Edit Course Details</MenuItem>
                <MenuItem onClick={handleClose}>Edit Lesson Details</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </IconButton>
      </Box>
    </Card>
  );
}
CourseCard.propTypes = {
    course: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default CourseCard;
