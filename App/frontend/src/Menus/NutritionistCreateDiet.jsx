import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import NutritionistCreateDailyDiet from "./NutritionistCreateDailyDiet";
import NutritionistCreateWeeklyDiet from "./NutritionistCreateWeeklyDiet";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function NutritionistCreateDiet(props) {
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");

  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const [dietaDiaria, setDietaDiaria] = useState({
    nombre: "",
    desayuno: "",
    mediaMañana: "",
    comida: "",
    merienda: "",
    cena: "",
    preEntreno: "",
    postEntreno: "",
    otros: "",
  });

  const [enableDietaDiaria, setEnableDietaDiaria] = useState(false);
  const [enableDietaSemanal, setEnableDietaSemanal] = useState(false);

  const changeName = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "nombreDieta":
        setNombreDieta(e.target.value);
        break;
      case "caloriasDieta":
        setCaloriasDieta(e.target.value);
        break;
      case "alergiasDieta":
        setAlergiasDieta(e.target.value);
        break;
      case "otrosDieta":
        setOtrosDieta(e.target.value);
        break;
      default:
        break;
    }
  };

  const createDieta = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "create-dieta-diaria":
        setEnableDietaSemanal(false);
        setEnableDietaDiaria(true);
        break;
      case "create-dieta-semanal":
        setEnableDietaSemanal(true);
        setEnableDietaDiaria(false);
        break;
      case "cancel-dieta":
        setEnableDietaSemanal(false);
        setEnableDietaDiaria(false);
        setDietaDiaria({
          nombre: "",
          desayuno: "",
          mediaMañana: "",
          comida: "",
          merienda: "",
          cena: "",
          preEntreno: "",
          postEntreno: "",
          otros: "",
        });
        break;
      default:
        break;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const changeDietaDiaria = async (e) => {
    e.preventDefault();
    setDietaDiaria({ ...dietaDiaria, [e.target.id]: e.target.value });
  };

  const guardar = async (e) => {
    e.preventDefault();

    let dieta = {
      nombre:
        "[" +
        nombreDieta +
        "][" +
        caloriasDieta +
        "kcal][Alergias:" +
        alergiasDieta +
        "][otros:" +
        otrosDieta +
        "]",
      desayuno: dietaDiaria.desayuno,
      mediaMañana: dietaDiaria.mediaMañana,
      comida: dietaDiaria.mediaMañana,
      merienda: dietaDiaria.merienda,
      cena: dietaDiaria.cena,
      preEntreno: dietaDiaria.preEntreno,
      postEntreno: dietaDiaria.postEntreno,
      otros: dietaDiaria.otros,
    };

    const url = `http://localhost:8080/alimentacion-diaria/create-update-alimentacion`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, dieta, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setOpenSnackBar(true);
          setEnableDietaSemanal(false);
          setEnableDietaDiaria(false);
          setDietaDiaria({
            nombre: "",
            desayuno: "",
            mediaMañana: "",
            comida: "",
            merienda: "",
            cena: "",
            preEntreno: "",
            postEntreno: "",
            otros: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={createDieta}
          id="create-dieta-diaria"
          variant="contained"
        >
          Crear dieta diaria
        </Button>

        <Button
          onClick={createDieta}
          id="create-dieta-semanal"
          variant="contained"
        >
          Crear dieta semanal
        </Button>
      </Paper>
      {!enableDietaSemanal && !enableDietaDiaria ? null : (
        <Paper
          elevation={3}
          style={{
            height: "12%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px 20px 10px 20px",
            marginTop: "10px",
          }}
        >
          <div>
            Nombre de la dieta:
            {nombreDieta !== "" ? "  [" + nombreDieta + "]" : ""}
            {caloriasDieta !== "" ? "[" + caloriasDieta + "kcal]" : ""}
            {alergiasDieta !== "" ? "[Alergias:" + alergiasDieta + "]" : ""}
            {otrosDieta !== "" ? "[otros:" + otrosDieta + "]" : ""}
          </div>
          <div>
            <TextField
              style={{ marginRight: "10px" }}
              id="nombreDieta"
              size="small"
              label="Nombre"
              variant="outlined"
              onChange={changeName}
            ></TextField>
            <TextField
              id="caloriasDieta"
              style={{ marginRight: "10px" }}
              size="small"
              label="Nº Calorias"
              variant="outlined"
              onChange={changeName}
            ></TextField>
            <TextField
              id="alergiasDieta"
              style={{ marginRight: "10px" }}
              size="small"
              label="Alergias/Intolerancias"
              variant="outlined"
              onChange={changeName}
            ></TextField>
            <TextField
              id="otrosDieta"
              style={{ marginRight: "10px" }}
              size="small"
              label="Otros"
              variant="outlined"
              onChange={changeName}
            ></TextField>
          </div>
        </Paper>
      )}
      {enableDietaDiaria && !enableDietaSemanal ? (
        <NutritionistCreateDailyDiet
          changeDietaDiaria={changeDietaDiaria}
          createDieta={createDieta}
          dietaDiaria={dietaDiaria}
          guardar={guardar}
        />
      ) : null}

      {enableDietaSemanal && !enableDietaDiaria ? (
        <NutritionistCreateWeeklyDiet dailyDietList={props.dailyDietList} />
      ) : null}

      {!enableDietaSemanal && !enableDietaDiaria ? (
        <>
          <Paper
            elevation={3}
            style={{
              height: "12%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px 20px 10px 20px",
              marginTop: "10px",
            }}
          ></Paper>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "65%",
              padding: "20px 20px 20px 20px",
              marginTop: "10px",
            }}
          ></Paper>
        </>
      ) : null}

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Guardado correctamente
        </Alert>
      </Snackbar>
    </div>
  );
}
export default NutritionistCreateDiet;
