import React, { Fragment, useState, useEffect } from "react";
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

const useStyles = makeStyles({
  card: {
    maxWidth: "150%"
  },
  media: {
    height: 190
  }
});

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

const fabStyle = {
  width: "8%",
  heigth: "15%",
  fontWeight: "bold"
};

function Ahorcado() {
  const [word, setWord] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openSelectLetter, setOpenSelectLetter] = useState(false);
  const [oneLetter, setOneLetter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const data = await services.getWords();
        // let letter = data.data.word.split("");

        let letter = "palabra".split("");
        let myLetter = [];
        letter.map(x => {
          myLetter.push({ letter: x, status: "hidden" });
        });
        setWord(myLetter);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  const classes = useStyles();

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
    setOpenModal(false);
    //clean()
  };

  const aceptLetter = () => {
    let myLetter = [];

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
    });
    setWord(myLetter);
    closeSelectLetter();
  };

  return (
    <Fragment>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Instructions style={instructionStyle} />

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
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cb967b6-2823-4f74-8822-22291a6b48fe/ddifopa-e5e412ec-ebbf-4a99-bea2-13d51aa55ca2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYjk2N2I2LTI4MjMtNGY3NC04ODIyLTIyMjkxYTZiNDhmZVwvZGRpZm9wYS1lNWU0MTJlYy1lYmJmLTRhOTktYmVhMi0xM2Q1MWFhNTVjYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BXn0SW29u_7bqZzQrZywohDUxfVP_6H83oT4IKwCCZw"
              title="Contemplative Reptile"
            />
          </Card>
        </Grid>

        <Grid item sm={12}>
          <Button style={buttonStyle} variant="contained" onClick={handleClick}>
            Elegir letra
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={openSelectLetter}
        onClose={closeSelectLetter}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Elija una letra.</DialogContentText>
          <TextField
            label="Letra"
            className={classes.textField}
            value={oneLetter}
            onChange={handleChange}
            margin="normal"
            inputProps={{ maxLength: 1 }}
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
        message="sfsfsf"
      />
    </Fragment>
  );
}

export default Ahorcado;
