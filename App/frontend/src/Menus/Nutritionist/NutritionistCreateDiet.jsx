import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import NutritionistCreateDailyDiet from "./NutritionistCreateDailyDiet";
import NutritionistCreateWeeklyDiet from "./NutritionistCreateWeeklyDiet";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function NutritionistCreateDiet(props) {
  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);
  const [enableDietaDiaria, setEnableDietaDiaria] = useState(false);
  const [enableDietaSemanal, setEnableDietaSemanal] = useState(false);

  const createDieta = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "create-dieta-diaria":
        setEnableDietaSemanal(false);
        setEnableDietaDiaria(true);
        break;
      case "create-dieta-semanal":
        props.reloadDiets();
        setEnableDietaSemanal(true);
        setEnableDietaDiaria(false);
        break;
      default:
        break;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
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
      {enableDietaDiaria && !enableDietaSemanal ? (
        <NutritionistCreateDailyDiet
          setEnableDietaSemanal={setEnableDietaSemanal}
          setEnableDietaDiaria={setEnableDietaDiaria}
          setOpenSnackBarOK={setOpenSnackBarOK}
          setOpenSnackBarKO={setOpenSnackBarKO}
        />
      ) : null}

      {enableDietaSemanal && !enableDietaDiaria ? (
        <NutritionistCreateWeeklyDiet
          setEnableDietaSemanal={setEnableDietaSemanal}
          setEnableDietaDiaria={setEnableDietaDiaria}
          setOpenSnackBarOK={setOpenSnackBarOK}
          setOpenSnackBarKO={setOpenSnackBarKO}
          dailyDietList={props.dailyDietList}
        />
      ) : null}

      {!enableDietaSemanal && !enableDietaDiaria ? (
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
          ></Paper>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 20px 5px 20px",
              marginTop: "3px",
              height: "486px",
            }}
          ></Paper>
        </>
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
export default NutritionistCreateDiet;
