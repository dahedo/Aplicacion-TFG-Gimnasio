import { Button, Paper } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";
import TrainerViewDailyTrainnings from "./TrainerViewDailyTrainnings";
import TrainerViewWeeklyTrainnings from "./TrainerViewWeeklyTrainnings";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TrainerViewTrainnings(props) {
  const [viewDailyTrainning, setViewDailyTrainning] = useState(false);
  const [vieWeeklyTrainning, setVieWeeklyTrainning] = useState(false);

  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
  };

  const showTrainnings = (e) => {
    switch (e.target.id) {
      case "show-daily-trainnings":
        setViewDailyTrainning(true);
        setVieWeeklyTrainning(false);
        break;
      case "show-weekly-trainnings":
        setViewDailyTrainning(false);
        setVieWeeklyTrainning(true);
        break;
      default:
        setViewDailyTrainning(false);
        setVieWeeklyTrainning(false);
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
        <Button
          onClick={showTrainnings}
          id="show-daily-trainnings"
          variant="contained"
        >
          Ver entrenamientos diarios
        </Button>
        <Button
          onClick={showTrainnings}
          id="show-weekly-trainnings"
          variant="contained"
        >
          Ver entrenamientos semanales
        </Button>
      </Paper>

      {viewDailyTrainning && !vieWeeklyTrainning ? (
        <TrainerViewDailyTrainnings />
      ) : null}

      {!viewDailyTrainning && vieWeeklyTrainning ? (
        <TrainerViewWeeklyTrainnings />
      ) : null}

      {!viewDailyTrainning && !vieWeeklyTrainning ? (
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
export default TrainerViewTrainnings;
