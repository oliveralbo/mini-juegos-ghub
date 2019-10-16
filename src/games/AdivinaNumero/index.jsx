import React, { Fragment, useState } from "react";
import Instructions from "../../components/Instructions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import TransitionsModal from "../../components/Modal";

const instructionStyle = {
  // marginLeft: "250%",
  float: "right"
};

const subTitleStyle = {
  marginTop: "20%"
};

const buttonStyle = {
  marginTop: "2%"
};

const messageStyle = {
  marginTop: "2%",
  fontWeight: "bold"
};

function AdivinaNumero() {
  const [userNumber, setUserNumber] = useState(null);
  const [sysNumber, setSysNumber] = useState(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState(null);
  const [trys, setTrys] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = event => {
    setUserNumber(parseInt(event.target.value));
  };

  const handleClick = () => {
    setTrys(trys + 1);

    setMessage(
      userNumber > sysNumber
        ? "el numero por adivinar es menor."
        : userNumber < sysNumber
          ? "el numero por adivinar es mayor."
          : `ganaste, acertaste en ${trys} intentos!!!`
    );
    if (userNumber === sysNumber) {
      setOpenModal(true);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setUserNumber("");
    setTrys(0);
    setMessage(null);
    setSysNumber(Math.floor(Math.random() * 100));
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Instructions style={instructionStyle} />

          <h3 style={subTitleStyle}>Que número eligió el sistema ?</h3>
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            label="Ingrese número"
            value={userNumber}
            onChange={handleChange}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <p>Intentos : </p>
          <Fab color="primary" aria-label="add">
            {trys}
          </Fab>
        </Grid>

        <Grid item sm={12}>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={handleClick}
          >
            Aceptar
            </Button>
        </Grid>
      </Grid>

      <Grid item sm={12} style={messageStyle}>
        <h4>{message && message}</h4>
      </Grid>
      <TransitionsModal
        handleOpen={openModal}
        handleClose={closeModal}
        message={message}
      />
    </Fragment>
  );
}

export default AdivinaNumero;