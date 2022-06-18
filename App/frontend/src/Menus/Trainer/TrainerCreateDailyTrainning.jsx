import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function TrainerCreateDailyTrainning(props) {
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
          id="nombreEntreno"
          size="small"
          label="Nombre"
          variant="outlined"
        ></TextField>
        <TextField
          required
          id="caloriasEntreno"
          style={{ marginRight: "10px" }}
          size="small"
          label="Descripción"
          variant="outlined"
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
      ></Paper>
    </>
  );
}

export default TrainerCreateDailyTrainning;
