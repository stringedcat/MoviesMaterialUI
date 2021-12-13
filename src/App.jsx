import React from "react";
import useStyles from "./styles";
import Appbar from "./components/Appbar/Appbar.jsx";
import Home from "./components/Home/Home.jsx";
import { Route } from "react-router-dom";
import Movies from "./components/Movies/Movies.jsx";
import Series from "./components/Series/Series.jsx";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const App = () => {
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    history.push("/home");
  }, []);
  return (
    <>
      <Route path="/">
        <Appbar />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/movies">
        <Movies />
      </Route>
      <Route exact path="/series">
        <Series />
      </Route>
      {/*       <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Titulo
            </Typography>
            <Typography
              variant="h5"
              align="center"
              coor="textSecondary"
              paragraph
            >
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              illum laboriosam molestiae in omnis voluptatem placeat nesciunt
              officia nobis. Nostrum rerum eos a voluptate harum obcaecati
              quisquam, eius possimus voluptatem?
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    {" "}
                    Ver mis Fotos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="sm">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      this isa a media card. you can use this section to
                      describe the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main> */}
    </>
  );
};

export default App;
