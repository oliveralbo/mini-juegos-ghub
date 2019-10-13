import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cont: {
    marginTop: "20%",
    marginLeft: "25%"
  }
});

function Layout(props) {
  const classes = useStyles();

  return <div className={classes.cont}>{props.children}</div>;
}

export default Layout;
