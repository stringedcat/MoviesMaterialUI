import React from "react";
import SecondBar from "../SecondBar/SecondBar.jsx";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./Series";
import CardMade from "../CardMade/CardMade.jsx";
const Series = () => {
    const styles = useStyles();
    const series = useSelector((state) => state.series);
    const AZ = (a, b) => {
        return a.title > b.title ? 1 : -1;
      };
  return (
    <>
      <SecondBar title="Popular Series" />
      <Container className={styles.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {series
            .slice(0, 20)
            .sort(AZ)
            .map((serie, i) => (
              <CardMade
                key={i}
                description={serie.description}
                releaseYear={serie.releaseYear}
                title={serie.title}
                image={serie.images["Poster Art"].url}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Series;
