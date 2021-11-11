import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    image:{
        width:"100%",
        height:"100%"
    },
    card:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        "&:hover":{
          opacity:"0.6",
          border:"7px solid #ffff"
          }
    },
}));

export default useStyles;
