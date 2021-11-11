import {
  Container,
  Grid,
  Card,
  Typography,
} from "@material-ui/core";
import React from "react";
import SecondBar from "../SecondBar/SecondBar.jsx";
import series from "../../assets/series.png";
import movies from "../../assets/movies.png";
import useStyles from "./Home.js";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const styles = useStyles();
  const HandleClickCard1 = (e) => {
    history.push('/series')
  }
  const HandleClickCard2 = (e) => {
    history.push('/movies')
  }
  return (
    <>
      <SecondBar />
      <main>
        <Container maxWidth="sm" className={styles.cardGrid}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.card} onClick={(e) => HandleClickCard1(e)} >
                <img src={series} />
              </Card>
              <Typography className={styles.h5} gutterBottom variant="h6">
                Popular Series
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.card} onClick={(e) => HandleClickCard2(e)}>
                <img src={movies} />
              </Card>
              <Typography className={styles.h5} gutterBottom variant="h6">
                Popular Movies
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
