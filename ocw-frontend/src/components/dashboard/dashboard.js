import { Grid } from "@material-ui/core"
import {Chart} from './chart';
import Sample from './card';

export default function Dashboard(){
    return(
        <Grid container spacing={2}>
            <Grid item xs={2} md={2}>
                <Sample context={"Total Course"} value={123} />
            </Grid> 
            <Grid item xs={2} md={2}>
                <Sample context={"Total Enrollments"} value={123} />
            </Grid> 
            <Grid item xs={2} md={2}>
                <Sample context={"New Enrollments"} value={123} />
            </Grid> 
            <Grid item xs={2} md={2}>
                <Sample context={"New Revenue"} value={123} />
            </Grid> 
            <Grid item xs={2} md={2}>
                <Sample context={"Net Revenue"} value={123} />
            </Grid>
            <Grid item xs={2} md={2}>
                <Sample context={"Online Users"} value={123} />
            </Grid>
            <Grid item xs={10}>
                <Chart />
            </Grid> 
            <Grid item xs={10}>
                <Chart />
            </Grid>       
        </Grid>
    )
}