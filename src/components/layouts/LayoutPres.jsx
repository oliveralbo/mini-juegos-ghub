import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";


function LayoutPres(props) {
  return (
    <Container fixed>
      <Grid container>{props.children}</Grid>
    </Container>
  );
}

export default LayoutPres;
