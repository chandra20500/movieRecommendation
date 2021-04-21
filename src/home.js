import react, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./HomepageComponent/card.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const movieList = [
  {
    title: "king kong vs godzilla",
    genres: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    selected: false
  },
  {
    title: "justice league",
    genres: [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    selected: false
  },
  {
    title: "Dont Brethe",
    genres: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    selected: false
  }
];

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

const addmovie = (props) => {
  //console.log(props);
  props.selected = props.selected ? false : true;
  console.log(movieList);
};

const CardCollection = () => {
  const classes = useStyles();
  const [selected, setselected] = useState([]);

  const changelist = (props) => {
    //console.log(props);
    const arr = selected;
    for (var i = 0; i < selected.length; i++) {
      if (selected[i] === props) {
        arr.splice(i, 1);
        // console.log(arr);
        setselected(arr);
        return;
      }
    }
    if (arr.length === 1) {
      console.log("OOPS only 5 selections allowed");
    }
    setselected([...selected, props]);
  };

  return (
    <>
      <Grid container spacing={3}>
        {movieList.map((movie, index) => (
          <Grid
            item
            lg={3}
            xs={12}
            key={index}
            onClick={() => changelist(movie.title)}
          >
            <Card
              className={classes.paper}
              title={movie.title}
              selected={movie.selected}
            ></Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
    </>
  );
};

export default HomePage;
