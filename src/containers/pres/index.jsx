import React, { useEffect, useState, Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    marginLeft: "13%"
  }
}));

const Pres = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(http://www.solofondosdepantalla.net/fondos-de-pantalla/Juegos/Fondo-de-pantalla-Retro-console.jpg)";
    document.body.style.backgroundSize = "73%";
  }, []);

  const [miEstado, setMiEstado] = useState("MINI-JUEGOS");

  const classes = useStyles();
  console.log(miEstado);
  return (
    <Fragment>
      <h1>{miEstado}</h1>
      <Fab
        variant="extended"
        aria-label="delete"
        onClick={() => setMiEstado("PASAR")}
        className={classes.fab}
      >
        Extendedd
      </Fab>
      <Fab
        variant="extended"
        aria-label="delete"
        onClick={() => setMiEstado("PASAR")}
        className={classes.fab}
      >
        Salir...
      </Fab>
    </Fragment>
  );
};

export default Pres;
