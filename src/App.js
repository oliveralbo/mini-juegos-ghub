import React from "react";
import { Pres } from "./containers";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cont: {
    marginTop: "15%"
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.cont}>
      <Pres />
    </Container>
  );
}

export default App;
