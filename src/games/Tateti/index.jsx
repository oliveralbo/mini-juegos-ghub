import React, { Fragment, useState, useEffect } from "react";
import Instructions from "../../components/Instructions";
import Grid from "@material-ui/core/Grid";
import Grilla from './components/grilla/Grilla'
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import img from "./imgs";


const instructionStyle = {
    // marginLeft: "250%",
    float: "right"
};

const subTitleStyle = {
    marginTop: "10%"
};


function TaTeTi() {


    const INITIAL_STATE = [{
        grilla: 0,
        clickeado: false,
        player: 2
    }, {
        grilla: 1,
        clickeado: false,
        player: 2
    }, {
        grilla: 2,
        clickeado: false,
        player: 2
    }, {
        grilla: 3,
        clickeado: false,
        player: 2
    }, {
        grilla: 4,
        clickeado: false,
        player: 2
    }, {
        grilla: 5,
        clickeado: false,
        player: 2
    }, {
        grilla: 6,
        clickeado: false,
        player: 2
    }, {
        grilla: 7,
        clickeado: false,
        player: 2
    }, {
        grilla: 8,
        clickeado: false,
        player: 2
    }]

    const [message, setMessage] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [playerActive, setPlayerActive] = useState(1);
    const [players, setPlayers] = useState("uno");
    const [images, setImages] = useState(img);
    const [data, setData] = useState(INITIAL_STATE)
    const [empate, setEmpate] = useState(0)


    const handleChangeOption = event => {
        setPlayers(event.target.value);
        // closeModal();
    };

    const handleClick = (i) => {


        setData(data.map((x, index) => {
            if (index === i) {
                if (x.clickeado === true) {
                    return x
                } else {
                    setPlayerActive(playerActive === 1 ? 2 : 1);
                    return {
                        ...x, clickeado: true, player: playerActive
                    }
                }
            }
            return x
        })
        )
        setEmpate(empate + 1)
    }



    useEffect(() => {
        let opcionesPosibles = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < opcionesPosibles.length; i++) {
            const [ta, te, ti] = opcionesPosibles[i];

            if (data[ta].clickeado && data[te].clickeado && data[ti].clickeado) {
                var p1Win = data[ta].player === 1 && data[te].player === 1 && data[ti].player === 1;
                var p2Win = data[ta].player === 2 && data[te].player === 2 && data[ti].player === 2

                if (p1Win) {
                    alert("gano el jugador 1")
                    setTimeout(() => { setData(INITIAL_STATE) }, 1000)
                    setEmpate(0)
                    break
                }
                if (p2Win) {
                    alert("gano el jugador 2")
                    setTimeout(() => { setData(INITIAL_STATE) }, 1000)
                    setEmpate(0)
                    break
                }

            }
        }
        if (empate === 9 && !p1Win && !p2Win) {

            alert("empate")
            setTimeout(() => { setData(INITIAL_STATE) }, 1000)
            setEmpate(0)

        }
    }, [data]);


    const closeModal = () => {
        setOpenModal(false);
        setMessage(null);

    };

    console.log(empate)
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

                    <Instructions style={instructionStyle} tateti />
                    <h4>{playerActive === 1 ? "Le toca al Jugador N°1" : "Le toca al Jugador N°2"} </h4>
                    <h3 style={subTitleStyle}>Ta Te Ti</h3>
                </Grid>



                <Grilla img={images} action={handleClick} data={data} />




            </Grid>


            {/* <TransitionsModal
                    handleOpen={openModal}

                    message={message}
                /> */}

        </Fragment>
    );
}

export default TaTeTi;
