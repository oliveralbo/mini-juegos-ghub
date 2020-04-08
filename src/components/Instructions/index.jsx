import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Instructions(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={props.style}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Instrucciones
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Instrucciones de mini-juego"}
        </DialogTitle>
        <DialogContent>
          {props.adivinaNumero ? (
            <DialogContentText id="alert-dialog-description">
              Debés averiguar que número entre 0 y 100 eligio el sistema en la
              menor cantidad de intentos posibles.
            </DialogContentText>
          ) : props.ahorcado ? (
            <DialogContentText id="alert-dialog-description">
              Debés encontrar la palabra oculta antes de perder tu vida.
            </DialogContentText>
          ) : props.tateti ? (
            <DialogContentText id="alert-dialog-description">
              Clasico juego de TaTeTi tres en linea.
            </DialogContentText>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Instructions;
