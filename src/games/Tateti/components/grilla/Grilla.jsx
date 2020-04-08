import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '../../../../lib/utils/useMediaHooks'




const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: "1%",
        width: "30%",
        height: "165px"
    },
    img: {
        width: "90%",
    },
    img2: {
        width: "80%",
        height: "90%"
    },
    bloque: {
        width: "550px",
        height: "550px",
        backgroundColor: "black",
    }

}));


const smallBloque = {
    width: "100%",
}
const smallPaper = {
    height: "30%"
}






export default function Grilla(props) {
    const { img, action, data } = props
    const small = useMediaQuery('(max-width: 600px)')
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={6} className={classes.bloque} style={small ? smallBloque : null}>
                <Grid container item xs={12} spacing={12}>
                    {data.map((x, i) => {
                        return (
                            <Paper onClick={() => action(i)} style={small ? smallPaper : null} className={classes.paper} key={Math.random()}>
                                {x.grilla === i && x.clickeado && x.player === 2 ?
                                    <img src={img.cruz} className={classes.img} /> : x.grilla === i && x.clickeado && x.player === 1 ?
                                        <img src={img.circulo} className={classes.img2} /> : null}
                            </Paper>
                        )
                    })}

                </Grid>
            </Grid>
        </>
    );
}
