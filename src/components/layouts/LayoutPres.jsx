import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
const cont = {
  marginTop: "20%",
  marginLeft: "25%",
};

function LayoutPres(props) {
  return (
    <Container fixed>
      <Grid container>{props.children}</Grid>
    </Container>
  );
}

export default LayoutPres;
