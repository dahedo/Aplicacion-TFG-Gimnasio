import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TrainerCreateDailyTrainning from "./TrainerCreateDailyTrainning";
import TrainerCreateWeeklyTrainning from "./TrainerCreateWeeklyTrainning";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TrainerCreateTrainnings(props) {
  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);
  const [enableDailyTrainning, setEnableDailyTrainning] = useState(false);
  const [enableWeeklyTrainning, setEnableWeeklyTrainning] = useState(false);

  const createTrainning = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "create-daily-trainning":
        setEnableDailyTrainning(true);
        setEnableWeeklyTrainning(false);
        break;
      case "create-weekly-trainning":
        setEnableDailyTrainning(false);
        setEnableWeeklyTrainning(true);
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
          onClick={createTrainning}
          id="create-daily-trainning"
          variant="contained"
        >
          Crear entrenamiento diario
        </Button>

        <Button
          onClick={createTrainning}
          id="create-weekly-trainning"
          variant="contained"
        >
          Crear entrenamiento semanal
        </Button>
      </Paper>
      {enableDailyTrainning && !enableWeeklyTrainning ? (
        <TrainerCreateDailyTrainning />
      ) : null}

      {enableWeeklyTrainning && !enableDailyTrainning ? (
        <TrainerCreateWeeklyTrainning />
      ) : null}

      {!enableWeeklyTrainning && !enableDailyTrainning ? (
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
export default TrainerCreateTrainnings;
