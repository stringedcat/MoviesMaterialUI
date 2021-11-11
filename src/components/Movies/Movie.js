import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
cardGrid:{
    marginLeft:"5%",
    marginTop:"1%",
    [theme.breakpoints.down('md')]: {
        marginLeft:"0"
      },
}
}));

export default useStyles;