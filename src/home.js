import react from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./HomepageComponent/card.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const font = "'Pacifico', cursive";

const HomePage = () => {
  return (
    <>
      <Typography variant="h3" className="mainHeading" component="h2">
        Movie recommendation using collaborative filtering
      </Typography>
      <Typography variant="h6" className="subHeading" component="h2">
        Select 5 of the below movies to get recommendations
      </Typography>
      <CardCollection />
    </>
  );
};

const CardCollection = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} lg={12}>
        <Grid item lg={3} xs={12}>
          <Card className={classes.paper}>xs=3</Card>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Card className={classes.paper}>xs=3</Card>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Card className={classes.paper}>xs=3</Card>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Card className={classes.paper}>xs=3</Card>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Card className={classes.paper}>xs=3</Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
