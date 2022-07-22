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
  const { setOpenSnackBarOK, setOpenSnackBarKO } = props;
  const [enableDailyTrainning, setEnableDailyTrainning] = useState(true);
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
          sx={
            enableDailyTrainning
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableDailyTrainning}
          onClick={createTrainning}
          id="create-daily-trainning"
          variant="contained"
        >
          Crear entrenamiento diario
        </Button>

        <Button
          sx={
            enableWeeklyTrainning
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableWeeklyTrainning}
          onClick={createTrainning}
          id="create-weekly-trainning"
          variant="contained"
        >
          Crear entrenamiento semanal
        </Button>
      </Paper>
      {enableDailyTrainning && !enableWeeklyTrainning ? (
        <TrainerCreateDailyTrainning
          exerciseData={props.exerciseData}
          setOpenSnackBarOK={setOpenSnackBarOK}
          setOpenSnackBarKO={setOpenSnackBarKO}
        />
      ) : null}

      {enableWeeklyTrainning && !enableDailyTrainning ? (
        <TrainerCreateWeeklyTrainning />
      ) : null}
    </div>
  );
}
export default TrainerCreateTrainnings;
