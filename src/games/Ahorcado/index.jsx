import React, { Fragment, useState, useEffect, useReducer } from "react";
import Instructions from "../../components/Instructions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import TransitionsModal from "../../components/Modal";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import services from "../../api/services";
import img from "./imgs";

const useStyles = makeStyles({
  card: {
    maxWidth: "150%"
  },
  media: {
    height: 190
  }
});

const instructionStyle = {
  float: "right"
};

const subTitleStyle = {
  marginTop: "10%"
};

const fabStyle = {
  width: "8%",
  heigth: "15%",
  fontWeight: "bold"
};

function Ahorcado() {
  const [word, setWord] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openSelectLetter, setOpenSelectLetter] = useState(false);
  const [oneLetter, setOneLetter] = useState("");
  const [deathLetter, setDeathLetter] = useState(null);
  const [wrong, setWrong] = useState(0);
  const [images, setImages] = useState(img.img1);
  const [message, setMessage] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setWrong(wrong + 1);
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // const data = await services.getWords();
      // let letter = data.data.word.split("");
      // setDeathLetter(data.data.word);
      setDeathLetter("casa");
      let letter = "casa".split("");
      let myLetter = [];
      letter.map(x => {
        myLetter.push({ letter: x, status: "hidden" });
        return false;
      });
      setWord(myLetter);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = event => {
    setOneLetter(event.target.value);
  };

  const handleClick = () => {
    setOpenSelectLetter(true);
  };

  const closeSelectLetter = () => {
    setOneLetter(null);
    setOpenSelectLetter(false);
  };

  const closeModal = () => {
    setMessage(null);
    setOpenModal(false);
    setWrong(1);
    setImages(img.img1);
    fetchData();
  };

  const aceptLetter = async () => {
    let myLetter = [];
    let win = 0;

    word.map(x => {
      if (x.letter === oneLetter) {
        myLetter.push({ letter: x.letter, status: "visible" });
      } else {
        if (x.status === "visible") {
          myLetter.push({ letter: x.letter, status: "visible" });
        } else {
          myLetter.push({ letter: x.letter, status: "hidden" });
        }
      }
      if (myLetter[myLetter.length - 1].status != "hidden") {
        win = win + 1;
      }

      if (word.length === win) {
        setMessage("Ganaste, lograste salvar tu vida");
        setOpenModal(true);
      }
    });
    debugger;
    if (!deathLetter.includes(oneLetter)) {
      setImages(
        wrong === 1
          ? img.img2
          : wrong === 2
          ? img.img3
          : wrong === 3
          ? img.img4
          : wrong === 4
          ? img.img5
          : wrong === 5
          ? img.img6
          : wrong === 6
          ? img.img7
          : wrong === 7
          ? img.img8
          : null
      );
      setWrong(wrong + 1);
      if (wrong === 7) {
        lost();
        return false;
      }
    }

    setWord(myLetter);
    closeSelectLetter();
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      aceptLetter();
    }
  };

  const lost = () => {
    setMessage("Perdiste, no adivinaste la palabra");
    closeSelectLetter();
    setOpenModal(true);
  };

  return (
    <Fragment>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Instructions style={instructionStyle} ahorcado />

          <h3 style={subTitleStyle}>Ahorcado</h3>
        </Grid>

        <Grid item xs={12} sm={8}>
          {word
            ? word.map(letter => {
                return (
                  <Fab color="primary" aria-label="add" style={fabStyle}>
                    <span style={{ visibility: letter.status }}>
                      {letter.letter}
                    </span>
                  </Fab>
                );
              })
            : null}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={images}
              title="Contemplative Reptile"
            />
          </Card>
        </Grid>

        <Grid item sm={12}>
          <Button variant="contained" onClick={handleClick}>
            Elegir letra
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={openSelectLetter}
        onClose={closeSelectLetter}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Elija una letra</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Letra"
            className={classes.textField}
            value={oneLetter}
            onChange={handleChange}
            margin="normal"
            inputProps={{ maxLength: 1 }}
            onKeyPress={handleKeyPress}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSelectLetter} color="primary">
            Cancel
          </Button>
          <Button onClick={aceptLetter} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      <TransitionsModal
        handleOpen={openModal}
        handleClose={closeModal}
        message={message}
      />
    </Fragment>
  );
}

export default Ahorcado;
