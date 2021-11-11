import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import  useStyles  from "./SecondBar";
const SecondBar = ({ title }) => {
  const styles = useStyles();
  return (
    <>
      <AppBar position="relative" className={styles.AppBar}>
        <Toolbar>
          <Typography variant="h4" className={styles.typografy}>
            {title ? title : "Popular Titles"}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SecondBar;
