import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import TodayIcon from "@mui/icons-material/Today";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SpeedIcon from "@mui/icons-material/Speed";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { CourseDetailAction, CourseEnrollAction } from "../../actions/pageActions";
import Loader from '../../components/Loader';

import axios from '../../Axios';

const styles = (theme) => ({
  layout: {
    width: "auto",
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing(6)}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },

  card: {
    position: "absolute",
    right: "100px",
    top: "200px",
    width: "600px",
    "@media (max-width: 780px)": {
      position: "static",
    },

    border: "3px solid green",
  },
  cardDetails: {
    flex: 1,
    justifyContent: "left",
  },
  cardMedia: {
    width: "100%",
  },

  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const courseMetaData = {
  title: "Data Privacy and Technology",
  subtitle: "Explore the risks and rewards of data privacy and collection",
  date: "Nov 11",
  description: `Where is the line between the benefits of gathering information for public health and personal privacy? What about the balance between security and surveillance? Should data gathered about you be used to personalize the ads you see, or the prices you pay? As a decision-maker, you're constantly moving back and forth on a continuum, weighing the benefits and risks of using personal data. 

  Technology isn’t value-neutral. In an age where more technology is incorporated into daily life at an increasing pace, the protection of privacy can often be an afterthought. Data Privacy and Technology will encourage you to think critically about the trade-offs and challenges presented by today’s ever-changing role of technology.
     
  Privacy is a complex and multifaceted concept and this course aims to help you become a contributing member of privacy-forward communities, business task forces, and data-sharing practices. By the end of the course, you will be a better informed citizen of the Internet, be able to think about the trade-offs around data collection, and be able to lead your organization as it grapples with the interaction between big data and privacy.   
  `,
  duration: "5 weeks long",
  timeCommitment: "4 - 5 hours per week",
  pace: "Instructor-led",

  subject: "Data Science",
  difficulty: "Introductory",
  credit: "Certificate of Completion",
  topic: "digital Marketing",
  language: "English",
  instructors: ["Aaditya Pokhrel", "Aayush Sah Kanu"],
};


const social = ["GitHub", "Twitter", "Facebook"];

function CourseDetails(props) {
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const courseEnroll = useSelector((state) => state.courseEnroll);
  const { errorStatus, loadingEnroll, enrollStatus } = courseEnroll;


  const { classes } = props;
  const grid_align_left = {
    justifyContent: "flex-start",
    paddingRight: "10%",
    width: "100%",
  };

  const onEnroll = () => {

    // const { userInfo } = userLogin;
    // console.log(userLogin);
    if (!userInfo?.access) {
      window.location.assign('/account/signin');
    }
    else{
      dispatch(CourseEnrollAction(userInfo.id, courseData.id));
    }
  }

  

  // const [courseData, setCourseData] = useState({});
  const location = useLocation();
  const {uid} = location.state;

  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courseDetail);
  const { error, loading, courseData } = courseDetail;



  useEffect(() => {
    dispatch(CourseDetailAction(uid));
  }, [dispatch, uid]);

  // useEffect(() => {
  //   console.log("inside enroll useEffect");
  //   if(courseEnroll.enrollStatus){
  //     console.log(`Course Enrolled by user ${userInfo.email}`);
  //     window.location.assign('/');
  //   }
  // }, [dispatch]);


    // useEffect(() => {
    //     axios({
    //         "method": "GET",
    //         "url": `/api/course/${uid}?format=json`
    //     }).then(async (response)=>{
    //         await setCourseData(response.data[0]);
    //     }).catch((e)=>{
    //         console.log(e);
    //     });
    // }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      { loading ? (
            // <h1>fetching the courses from backend</h1>
            <Loader loading={loading} />
        ) : error ? (
            <h1>Error on loading the courses</h1> 
        ) : (
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {courseData.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {courseData.summary}
                  </Typography>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={onEnroll}
                  >
                    Enroll Now
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {errorStatus && <h1>Course Enrollment Failed</h1>}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            <Grid item key={courseData.title}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="194"
                  image={require("./2.png")}
                  alt="Paella dish"
                />
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Grid container justifyContent="flex-start">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <TodayIcon></TodayIcon>
                          <Typography>Duration</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseData.duration}  {" weeks long"}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <AccessAlarmIcon></AccessAlarmIcon>
                          <Typography>Time Management</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseMetaData.timeCommitment}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <SpeedIcon></SpeedIcon>
                          <Typography>Pace</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseData.pace}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <SchoolIcon></SchoolIcon>
                          <Typography>Subject</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseData.subject}</Typography>
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <LanguageIcon></LanguageIcon>
                          <Typography>Language</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseMetaData.language}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={6} style={grid_align_left}>
                        <IconButton color="inherit">
                          <AccountBalanceIcon></AccountBalanceIcon>
                          <Typography>Credit</Typography>
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{courseMetaData.credit}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}

            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h3" gutterBottom>
                  Description
                </Typography>
                <Typography
                  padding="30px"
                  style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}
                >
                  {courseData.description}
                </Typography>
              </Paper>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Archives
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Social
              </Typography>
              {social.map((network) => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      )}
    </React.Fragment>
  );
}

CourseDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetails);
