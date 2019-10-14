import React, { useEffect, useState, Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";
import LayoutPres from "../../components/layouts/LayoutPres";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    marginLeft: "5%",
    width: "30%",
    heigth: "30%"
  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Pres = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(http://www.solofondosdepantalla.net/fondos-de-pantalla/Juegos/Fondo-de-pantalla-Retro-console.jpg)";
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  const [miEstado, setMiEstado] = useState("MINI-JUEGOS");

  const classes = useStyles();

  return (
    <LayoutPres>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">{miEstado}</Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Link to="/home">
          <Fab variant="extended" aria-label="delete" className={classes.fab}>
            JUGAR...
          </Fab>
        </Link>
        <Fab
          variant="extended"
          aria-label="delete"
          // onClick={() => setMiEstado("PASAR")}
          className={classes.fab}
        >
          Salir..
        </Fab>
      </ThemeProvider>
    </LayoutPres>
  );
};

export default Pres;
