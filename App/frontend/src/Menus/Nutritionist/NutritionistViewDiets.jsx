import { Button, Paper } from "@mui/material";
import NutritionistViewDailyDiets from "./NutritionistViewDailyDiets";
import NutritionistViewWeeklyDiets from "./NutritionistViewWeeklyDiets";
import React, { useState } from "react";

function NutritionistViewDiets(props) {
  const [viewDietaDiaria, setViewDietaDiaria] = useState(false);
  const [viewDietaSemanal, setViewDietaSemanal] = useState(false);

  const showDiets = (e) => {
    switch (e.target.id) {
      case "show-daily-diets":
        setViewDietaDiaria(true);
        setViewDietaSemanal(false);
        break;
      case "show-weekly-diets":
        setViewDietaDiaria(false);
        setViewDietaSemanal(true);
        break;
      default:
        setViewDietaDiaria(false);
        setViewDietaSemanal(false);
        break;
    }
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
          height: "70px",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button onClick={showDiets} id="show-daily-diets" variant="contained">
          Ver dietas diarias
        </Button>
        <Button onClick={showDiets} id="show-weekly-diets" variant="contained">
          Ver dietas semanales
        </Button>
      </Paper>

      {viewDietaDiaria && !viewDietaSemanal ? (
        <NutritionistViewDailyDiets
          reloadDiets={props.reloadDiets}
          dailyDietList={props.dailyDietList}
        />
      ) : null}

      {!viewDietaDiaria && viewDietaSemanal ? (
        <NutritionistViewWeeklyDiets />
      ) : null}

      {!viewDietaDiaria && !viewDietaSemanal ? (
        <Paper
          elevation={3}
          style={{
            height: "calc(100% - 73px)",
            padding: "10px 20px 10px 20px",
            marginTop: "3px",
          }}
        />
      ) : null}
    </div>
  );
}
export default NutritionistViewDiets;
