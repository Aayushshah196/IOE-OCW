import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Video from "../components/CourseView/Videoplayer";
import { Input, Paper } from "@material-ui/core";
// import Comment from "./Comment";
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import { Avatar, Button, Grid } from "@mui/material";
import {TextField} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const drawerWidth = "35%";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CourseView() {
  const youtubeID = "PH5qlHo3TxE"
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={0}>
            <Grid item xs={8.5}>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default"}}>
          {/* <Box sx={{bgcolor:"#474342",p:"1%"}}>
          <Video title="Chapter 1" src="https://media.istockphoto.com/videos/abstract-technology-background-video-id1264206256"/>
        </Box> */}
        <Box>
        <iframe className='video'
                width="560"
                height="315"
                title='Youtube player'
                allowfullscreen="allowfullscreen"
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
        </iframe>
        </Box>
                
        <Box padding="1% 0% 0% 1.5%">
            <Divider/>
            <Typography variant="h4">
                 About This Course
            </Typography>
         <Divider/>
          <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          <Box id="Comment">
      <Paper style={{ padding: "2% 0%" }}>            
        <Typography variant="h5">
          Comments
          <div style={{ padding: "1%" }}>
          <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth margin="0% 1%">
            <h5 style={{ margin: 0, textAlign: "left" }}>
              Adithya
            </h5>
            <TextField label="Comment" variant="filled" /><br/>
             <Typography>
               {(new Date()).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ margin: "0% 0" }} />
    </div>
        </Typography>
        {/* {[...Array(10).keys()].map((text,index)=>(
        // <Comment comment="Hello World" date="2020/11/20" user="Adithya" img="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
        ))} */}

      </Paper>  
      </Box>
      </Box>
        
      </Box>
            </Grid>
      <Grid item xs={3.5} pl={1}>
        <Typography variant="h3">
            Lessons
        </Typography> 
        <div>
      {[...Array(4).keys()].map((text, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Lesson title {index}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
        {/* <List>
        {[...Array(4).keys()].map((text, index) => (
            // <ListItem button key={text}>
            //   <ListItemIcon>
            //     <PlayCircleTwoToneIcon/>
            //   </ListItemIcon>
            //   <ListItemText primary={`Lesson `+text} />
            // </ListItem>
          ))}
        </List> */}
        
      <Button variant="contained" color="primary" style={{ margin: "1%"}}
        onClick={() => {console.log("Set the completion true")} }
      >
        Take the test
      </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
