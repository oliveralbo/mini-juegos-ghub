import React, { useEffect, useState, Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Pres = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(http://www.solofondosdepantalla.net/fondos-de-pantalla/Juegos/Fondo-de-pantalla-Retro-console.jpg)";
    document.body.style.backgroundSize = "73%";
  }, []);

  const [miEstado, setMiEstado] = useState("ssssdo");

  const classes = useStyles();
  console.log(miEstado);
  return (
    <Fragment>
      <h1>{miEstado}</h1>
      <Fab
        variant="extended"
        aria-label="delete"
        onClick={() => setMiEstado("sdsdsssss")}
        className={classes.fab}
      >
        Extended
      </Fab>
    </Fragment>
  );
};

export default Pres;
