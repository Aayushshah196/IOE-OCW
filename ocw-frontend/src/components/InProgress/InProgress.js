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

const styles = (theme) => ({
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
});

function InProgress(props) {
  const { classes } = props;

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
            Machine Learning
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
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
        <IconButton className={classes.moreButton}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
InProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InProgress);
