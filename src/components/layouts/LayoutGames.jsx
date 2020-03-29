
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

function LayoutGames(props) {
  return (
    <Box mt={10}>
      <Container>
        <Grid container>{props.children}</Grid>
      </Container>
    </Box>
  );
}

export default LayoutGames;
