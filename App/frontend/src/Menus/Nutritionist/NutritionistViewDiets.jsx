import { Button, Paper } from "@mui/material";
import NutritionistViewDailyDiets from "./NutritionistViewDailyDiets";
import NutritionistViewWeeklyDiets from "./NutritionistViewWeeklyDiets";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NutritionistViewDiets(props) {
  const [viewDietaDiaria, setViewDietaDiaria] = useState(false);
  const [viewDietaSemanal, setViewDietaSemanal] = useState(false);

  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
  };

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
          setOpenSnackBarOK={setOpenSnackBarOK}
          setOpenSnackBarKO={setOpenSnackBarKO}
        />
      ) : null}

      {!viewDietaDiaria && viewDietaSemanal ? (
        <NutritionistViewWeeklyDiets
          dailyDietList={props.dailyDietList}
          weeklyDietList={props.weeklyDietList}
          setOpenSnackBarOK={setOpenSnackBarOK}
          setOpenSnackBarKO={setOpenSnackBarKO}
        />
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

      <Snackbar
        open={openSnackBarOK}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Guardado correctamente
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackBarKO}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Error al guardar
        </Alert>
      </Snackbar>
    </div>
  );
}
export default NutritionistViewDiets;
