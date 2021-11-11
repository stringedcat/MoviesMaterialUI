import React from "react";
import SecondBar from "../SecondBar/SecondBar.jsx";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./Movie.js";
import CardMade from "../CardMade/CardMade.jsx";
const Movies = () => {
  const styles = useStyles();
  const AZ = (a, b) => {
    return a.title > b.title ? 1 : -1;
  };
  const movies = useSelector((state) => state.movies);
  return (
    <>
      <SecondBar title="Popular Movies" />
      <Container className={styles.cardGrid} maxWidth="lg">
        <Grid container spacing={4} >
          {movies
            .slice(0, 20)
            .sort(AZ)
            .map((movie, i) => (
              <CardMade
                key={i}
                description={movie.description}
                releaseYear={movie.releaseYear}
                title={movie.title}
                image={movie.images["Poster Art"].url}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Movies;
