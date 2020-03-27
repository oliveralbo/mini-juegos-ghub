import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginRight: "6%",
        marginBottom: "6%",
        width: "25%",

    },
    img: {
        width: "50%",
        objectFit: "contain"
    }
}));



export default function Grilla(props) {
    const { img, action, data } = props
    const classes = useStyles();


    // const makeGrilla = () => {




    // }
    console.log(data)
    return (
        <div>
            <Grid container spacing={6}>
                <Grid container item xs={12} spacing={12}>

                    {data.map((x, i) => {


                        return (

                            <Paper onClick={() => action(i)} className={classes.paper} key={Math.random()}>
                                <img src={x.grilla === i && x.clickeado && x.player === 2 ? img.cruz : x.grilla === i && x.clickeado && x.player === 1 ? img.circulo : null} className={classes.img} />
                            </Paper>


                        )
                    })}
                </Grid>
            </Grid>
        </div>
    );
}
