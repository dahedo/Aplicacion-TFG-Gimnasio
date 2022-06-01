import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function NutritionistCreateDailyDiet(props) {
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");

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
      desayuno: props.dietaDiaria.desayuno,
      mediaMañana: props.dietaDiaria.mediaMañana,
      comida: props.dietaDiaria.mediaMañana,
      merienda: props.dietaDiaria.merienda,
      cena: props.dietaDiaria.cena,
      preEntreno: props.dietaDiaria.preEntreno,
      postEntreno: props.dietaDiaria.postEntreno,
      otros: props.dietaDiaria.otros,
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
          console.log("a");
          props.setOpenSnackBar(true);
          props.setEnableDietaSemanal(false);
          props.setEnableDietaDiaria(false);
          props.setDietaDiaria({
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

  return (
    <>
      <Paper
        elevation={3}
        style={{
          height: "80px",
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

      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px 20px 20px",
          marginTop: "10px",
          height: "410px",
        }}
      >
        <TextField
          id="desayuno"
          size="small"
          label="Desayuno"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.desayuno}
        ></TextField>
        <TextField
          id="mediaMañana"
          size="small"
          style={{ marginTop: "10px" }}
          label="Media Mañana"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.mediaMañana}
        ></TextField>
        <TextField
          id="comida"
          size="small"
          style={{ marginTop: "10px" }}
          label="Comida"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.comida}
        ></TextField>
        <TextField
          id="merienda"
          size="small"
          style={{ marginTop: "10px" }}
          label="Merienda"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.merienda}
        ></TextField>
        <TextField
          id="cena"
          size="small"
          style={{ marginTop: "10px" }}
          label="Cena"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.cena}
        ></TextField>
        <TextField
          id="preEntreno"
          size="small"
          style={{ marginTop: "10px" }}
          label="Pre-Entreno"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.preEntreno}
        ></TextField>
        <TextField
          id="postEntreno"
          size="small"
          style={{ marginTop: "10px" }}
          label="Post-Entreno"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.postEntreno}
        ></TextField>
        <TextField
          id="otros"
          size="small"
          style={{ marginTop: "10px" }}
          label="Otros"
          onChange={props.changeDietaDiaria}
          value={props.dietaDiaria.otros}
        ></TextField>
        <div>
          <Button onClick={guardar}>Guardar</Button>
          <Button id="cancel-dieta" onClick={props.createDieta}>
            Cancelar
          </Button>
        </div>
      </Paper>
    </>
  );
}

export default NutritionistCreateDailyDiet;
