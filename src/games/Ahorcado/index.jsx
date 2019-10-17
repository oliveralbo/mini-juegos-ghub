import React, { Fragment, useState } from "react";
import Instructions from "../../components/Instructions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import TransitionsModal from "../../components/Modal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

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

const messageStyle = {
  marginTop: "2%",
  fontWeight: "bold"
};

function Ahorcado() {
  const [userNumber, setUserNumber] = useState(null);
  const [sysNumber, setSysNumber] = useState(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState(null);
  const [trys, setTrys] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const classes = useStyles();

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

          <h3 style={subTitleStyle}>Ahorcado</h3>
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
          <Card className={classes.card}>
            {/* <CardActionArea> */}
            <CardMedia
              className={classes.media}
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cb967b6-2823-4f74-8822-22291a6b48fe/ddifopa-e5e412ec-ebbf-4a99-bea2-13d51aa55ca2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYjk2N2I2LTI4MjMtNGY3NC04ODIyLTIyMjkxYTZiNDhmZVwvZGRpZm9wYS1lNWU0MTJlYy1lYmJmLTRhOTktYmVhMi0xM2Q1MWFhNTVjYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BXn0SW29u_7bqZzQrZywohDUxfVP_6H83oT4IKwCCZw"
              title="Contemplative Reptile"
            />
            {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent> */}
            {/* </CardActionArea> */}
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
          </Card>
        </Grid>

        <Grid item sm={12}>
          <Button style={buttonStyle} variant="contained" onClick={handleClick}>
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

export default Ahorcado;
