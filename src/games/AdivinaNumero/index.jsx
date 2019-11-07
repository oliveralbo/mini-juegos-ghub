import React, { Fragment, useState } from "react";
import Instructions from "../../components/Instructions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import TransitionsModal from "../../components/Modal";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const instructionStyle = {
  // marginLeft: "250%",
  float: "right"
};

const subTitleStyle = {
  marginTop: "10%"
};

const buttonStyle = {
  marginTop: "2%"
};

const messageStyle = {
  marginTop: "2%",
  fontWeight: "bold"
};

function AdivinaNumero() {
  const [userNumber, setUserNumber] = useState(0);
  const [sysNumber, setSysNumber] = useState(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState(null);
  const [message2, setMessage2] = useState(null);
  const [trysP1, setTrysP1] = useState(0);
  const [trysP2, setTrysP2] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [playerActive, setPlayerActive] = useState("uno");
  const [players, setPlayers] = React.useState("uno");

  const handleChangeOption = event => {
    setPlayers(event.target.value);
    closeModal();
  };

  const handleChange = event => {
    setUserNumber(parseInt(event.target.value));
  };

  const handleClick = () => {
    playerActive === "uno" ? setTrysP1(trysP1 + 1) : setTrysP2(trysP2 + 1);

    setMessage(
      userNumber > sysNumber
        ? "el numero por adivinar es menor."
        : userNumber < sysNumber
        ? "el numero por adivinar es mayor."
        : `ganaste, acertaste en ${
            playerActive === "uno" ? trysP1 : trysP2
          } intentos!!!`
    );

    setMessage2(
      trysP1 > trysP2 ? "Gano el jugador 2 !!" : "Gano el jugador 1 !!"
    );

    if (userNumber === sysNumber) {
      playerActive === "uno" ? setOpenModal(true) : setOpenModal2(true);
    }
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setOpenModal2(false);
    setUserNumber("");
    setTrysP1(0);
    setTrysP2(0);
    setMessage(null);
    setSysNumber(Math.floor(Math.random() * 100));
  };

  const closeModal2P = () => {
    if (playerActive === "dos") {
      closeModal();
    } else {
      setOpenModal(false);
      setOpenModal2(true);
      setUserNumber("");
      setPlayerActive("dos");
      setMessage(null);
      setSysNumber(Math.floor(Math.random() * 100));
    }
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={players}
              onChange={handleChangeOption}
            >
              <FormControlLabel
                value="uno"
                control={<Radio color="primary" />}
                label="1 Jugador"
              />
              <FormControlLabel
                value="dos"
                control={<Radio />}
                label="2 Jugadores"
              />
            </RadioGroup>
          </FormControl>

          <Instructions style={instructionStyle} adivinaNumero />
          <h4>{playerActive === "uno" ? "Jugador N°1" : "Jugador N°2"} </h4>
          <h3 style={subTitleStyle}>Que número eligió el sistema ?</h3>
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            autoFocus
            label="Ingrese número"
            value={userNumber}
            onChange={handleChange}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <p>Intentos : </p>
          {players === "uno" ? (
            <Fab color="primary" aria-label="add">
              {trysP1}
            </Fab>
          ) : (
            <>
              <Fab color="primary" aria-label="add">
                {trysP1}
              </Fab>
              <Fab color="secondary" aria-label="add">
                {trysP2}
              </Fab>
            </>
          )}
        </Grid>

        <Grid item sm={12}>
          <div>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleClick}
            >
              Aceptar
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid item sm={12} style={messageStyle}>
        <h4>{message && message}</h4>
      </Grid>
      <TransitionsModal
        handleOpen={openModal}
        handleClose={players === "uno" ? closeModal : closeModal2P}
        message={message}
      />
      <TransitionsModal
        handleOpen={openModal2}
        handleClose={closeModal}
        message={message2}
      />
    </Fragment>
  );
}

export default AdivinaNumero;
