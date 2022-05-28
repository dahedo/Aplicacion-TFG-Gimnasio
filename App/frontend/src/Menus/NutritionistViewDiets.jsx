import { Button, Paper } from "@mui/material";
import React, { useState } from "react";

function NutritionistViewDiets(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          //   onClick={createDieta}
          id="create-dieta-diaria"
          variant="contained"
        >
          Ver dietas diarias
        </Button>

        <Button
          //   onClick={createDieta}
          id="create-dieta-semanal"
          variant="contained"
        >
          Ver dietas semanales
        </Button>
      </Paper>

      <Paper
        elevation={3}
        style={{
          height: "85%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 20px 10px 20px",
        }}
      ></Paper>
    </div>
  );
}
export default NutritionistViewDiets;
