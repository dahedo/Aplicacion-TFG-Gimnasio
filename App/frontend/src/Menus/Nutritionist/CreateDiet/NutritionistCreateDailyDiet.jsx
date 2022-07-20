import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function NutritionistCreateDailyDiet(props) {
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");
  const [disableButton, setDisableButton] = useState(true);
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

  const changeDietaDiaria = async (e) => {
    e.preventDefault();
    setDietaDiaria({ ...dietaDiaria, [e.target.id]: e.target.value });
  };
  const cancel = () => {
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
    props.setEnableDietaSemanal(false);
    props.setEnableDietaDiaria(false);
  };

  const guardar = (e) => {
    let dieta = {
      nombre: nombreDieta + caloriasDieta + alergiasDieta + otrosDieta,
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
          props.setOpenSnackBarOK(true);
          props.setEnableDietaSemanal(false);
          props.setEnableDietaDiaria(false);
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
          props.reloadDiets();
        },
        (error) => {
          props.setOpenSnackBarKO(true);
        }
      );
  };

  const changeName = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "nombreDieta":
        setNombreDieta(e.target.value.replace(/ /g, "_") + " ");
        break;
      case "caloriasDieta":
        setCaloriasDieta(
          e.target.value === ""
            ? ""
            : e.target.value.replace(/ /g, "_") + "kcal"
        );
        break;
      case "alergiasDieta":
        setAlergiasDieta(
          e.target.value === ""
            ? ""
            : " Alergias:" + e.target.value.replace(/ /g, "_")
        );
        break;
      case "otrosDieta":
        setOtrosDieta(
          e.target.value === ""
            ? ""
            : " Otros:" + e.target.value.replace(/ /g, "_")
        );
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "50px",
          padding: "10px 20px 10px 20px",
          marginTop: "3px",
        }}
      >
        <TextField
          required
          style={{ marginRight: "10px" }}
          id="nombreDieta"
          size="small"
          label="Nombre"
          variant="outlined"
          onChange={changeName}
        ></TextField>
        <TextField
          required
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
      </Paper>

      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px 20px 5px 20px",
          marginTop: "3px",
          height: "484px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(0, 0, 0, 0.65)",
            height: "40px",
          }}
        >
          Nombre: {nombreDieta}
          {caloriasDieta}
          {alergiasDieta}
          {otrosDieta}
        </div>
        <TextField
          id="desayuno"
          size="small"
          label="Desayuno"
          onChange={changeDietaDiaria}
          value={dietaDiaria.desayuno}
        ></TextField>
        <TextField
          id="mediaMañana"
          size="small"
          style={{ marginTop: "10px" }}
          label="Media Mañana"
          onChange={changeDietaDiaria}
          value={dietaDiaria.mediaMañana}
        ></TextField>
        <TextField
          id="comida"
          size="small"
          style={{ marginTop: "10px" }}
          label="Comida"
          onChange={changeDietaDiaria}
          value={dietaDiaria.comida}
        ></TextField>
        <TextField
          id="merienda"
          size="small"
          style={{ marginTop: "10px" }}
          label="Merienda"
          onChange={changeDietaDiaria}
          value={dietaDiaria.merienda}
        ></TextField>
        <TextField
          id="cena"
          size="small"
          style={{ marginTop: "10px" }}
          label="Cena"
          onChange={changeDietaDiaria}
          value={dietaDiaria.cena}
        ></TextField>
        <TextField
          id="preEntreno"
          size="small"
          style={{ marginTop: "10px" }}
          label="Pre-Entreno"
          onChange={changeDietaDiaria}
          value={dietaDiaria.preEntreno}
        ></TextField>
        <TextField
          id="postEntreno"
          size="small"
          style={{ marginTop: "10px" }}
          label="Post-Entreno"
          onChange={changeDietaDiaria}
          value={dietaDiaria.postEntreno}
        ></TextField>
        <TextField
          id="otros"
          size="small"
          style={{ marginTop: "10px" }}
          label="Otros"
          onChange={changeDietaDiaria}
          value={dietaDiaria.otros}
        ></TextField>
        <div
          style={{ display: "flex", justifyContent: "right", height: "50px" }}
        >
          <Button
            disabled={
              nombreDieta !== "" &&
              caloriasDieta !== "" &&
              (dietaDiaria.desayuno !== "") |
                (dietaDiaria.mediaMañana !== "") |
                (dietaDiaria.comida !== "") |
                (dietaDiaria.merienda !== "") |
                (dietaDiaria.cena !== "") |
                (dietaDiaria.preEntreno !== "") |
                (dietaDiaria.postEntreno !== "") |
                (dietaDiaria.otros !== "")
                ? false
                : true
            }
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={guardar}
            variant="contained"
          >
            Guardar
          </Button>

          <Button
            style={{ margin: "10px 0px 10px 10px" }}
            id="cancel-dieta"
            variant="contained"
            onClick={cancel}
          >
            Cancelar
          </Button>
        </div>
      </Paper>
    </>
  );
}

export default NutritionistCreateDailyDiet;
