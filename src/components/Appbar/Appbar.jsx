import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./Appbar";
import { useEffect } from "react";
import { getMovies, getSeries } from "../../actions/Actions";
const Appbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getSeries());
  }, []);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const styles = useStyles(theme);
  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" className={styles.AppBar}>
          <Toolbar>
            <Typography variant="h3" className={styles.typografy}>
              MOVIES AND SERIES
            </Typography>
            <Button color="inherit" className={styles.Button1}>
              Log in
            </Button>
            <Button color="inherit" className={styles.Button2}>
              Start your free trial
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Appbar;
