import React, { useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LayoutPres from "../../components/layouts/LayoutPres";
import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from '../../lib/utils/useMediaHooks'

const useStyles = makeStyles(theme => ({

  fab: {
    marginLeft: "5%",
    width: "30%",
    heigth: "30%",
  },
  h1: {
    marginLeft: "275px",
    marginTop: "15%"
  },
  fabes: {
    marginLeft: "16%",
  }
}));

const smallBtn = {
  marginTop: "8%",
  marginLeft: "0",
  float: "left",
  width: "100%",
  heigth: "30%",
}
const smallTitle = {
  marginLeft: "5%",
  marginTop: "200px",
  color: "white"

}

const Pres = () => {

  const fondoCelu = "https://i.pinimg.com/originals/1f/3b/29/1f3b296902dd948d7702ead940172c88.jpg"
  const fondoDesktop = "http://www.solofondosdepantalla.net/fondos-de-pantalla/Juegos/Fondo-de-pantalla-Retro-console.jpg"
  const small = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    document.body.style.backgroundImage = small ? `url(${fondoCelu})` : `url(${fondoDesktop})`;
    document.body.style.backgroundAttachment = small ? "" : "fixed";
    document.body.style.backgroundPosition = small ? "" : "center center";
    document.body.style.backgroundRepeat = small ? "" : "no-repeat";
    document.body.style.backgroundSize = "cover";
    // background-attachment: fixed;

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, [small]);






  const title = "MINI-JUEGOS"

  const classes = useStyles();

  return (
    <LayoutPres>
      <Grid className={classes.h1} style={small ? smallTitle : null}>
        <Typography variant={small ? "h4" : 'h1'} >{title}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.fabes} >
        <Link to='/home'>
          <Fab variant='extended' aria-label='delete' style={small ? smallBtn : null} className={classes.fab}>
            JUGAR...
        </Fab>
        </Link>
        <a href='https://www.google.com.ar'>
          <Fab
            style={small ? smallBtn : null}
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
