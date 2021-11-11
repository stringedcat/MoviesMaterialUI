import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  image: {
    paddingTop: "100%",
  },
  cardGrid: {
    padding: "20px 0px",
   left:"0",
   marginLeft:"6%"
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    cursor:"pointer"
  },
}));

export default useStyles;
