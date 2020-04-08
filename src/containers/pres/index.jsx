import React, { useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LayoutPres from "../../components/layouts/LayoutPres";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  fab: {
    marginLeft: "5%",
    width: "30%",
    heigth: "30%",
  },
  h1: {
    marginLeft: "275px",
    marginTop: "200px"
  },
  fabes: {
    marginLeft: "16%",
  }
}));

const Pres = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url(http://www.solofondosdepantalla.net/fondos-de-pantalla/Juegos/Fondo-de-pantalla-Retro-console.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = " no-repeat";
    document.body.style.backgroundSize = "cover";
    // background-attachment: fixed;

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  const title = "MINI-JUEGOS"

  const classes = useStyles();

  return (
    <LayoutPres>
      <Grid item xl={12} className={classes.h1}>
        <Typography variant='h1'>{title}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.fabes} >
        <Link to='/home'>
          <Fab variant='extended' aria-label='delete' className={classes.fab}>
            JUGAR...
        </Fab>
        </Link>
        <a href='https://www.google.com.ar'>
          <Fab
            variant='extended'
            aria-label='delete'
            // onClick={() => setMiEstado("PASAR")}
            className={classes.fab}
          >
            Salir..
        </Fab>
        </a>
      </Grid>
    </LayoutPres>
  );
};

export default Pres;
