import { Button, Paper, TextField } from "@mui/material";
import React from "react";

function NutritionistCreateDailyDiet(props) {
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "65%",
        padding: "20px 20px 20px 20px",
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
        <Button onClick={props.guardar}>Guardar</Button>
        <Button id="cancel-dieta" onClick={props.createDieta}>
          Cancelar
        </Button>
      </div>
    </Paper>
  );
}

export default NutritionistCreateDailyDiet;
