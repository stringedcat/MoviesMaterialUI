import React from "react";
import {
  Grid,
  Card,
  Typography,
  Popover,
} from "@material-ui/core";
import useStyles from "./CardMade.js";
const CardMade = ({ image, title, description, releaseYear }) => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
        <Card className={styles.card} key={title} onClick={handleClick} >
          <img src={image} className={styles.image} alt={title} />
        </Card>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Typography gutterBottom variant="h5">{title}</Typography>
          <Typography variant="p">{description}</Typography>
          <Typography gutterBottom variant="h5">{releaseYear}</Typography>
          <img src={image} alt="" width="200px" />
        </Popover>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
      </Grid>
    </>
  );
};

export default CardMade;
