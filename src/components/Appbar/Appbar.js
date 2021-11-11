import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#0184fe",
    boxShadow: "2px 2px 5px #404140",
  },
  
  AppBar2: {
    backgroundColor: "#404140",
  },
  typografy: {
    margin: "0.5% 0px",
    marginLeft: "5%",
    [theme.breakpoints.down('md')]: {
      fontSize:"50px"
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {

      },
  },
  Button1: {
      position:"relative",
      marginLeft:"50%",
      [theme.breakpoints.down('md')]: {
        marginLeft:"0"
      },
  },
  Button2: {
    position:"relative",
    backgroundColor:"#404140",
    marginLeft:"0.5%",
},
}));

export default useStyles;
