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
  //
  const [viewDailyTrainning, setViewDailyTrainning] = useState(true);
  const [vieWeeklyTrainning, setVieWeeklyTrainning] = useState(false);

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
          sx={
            viewDailyTrainning
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={viewDailyTrainning}
          onClick={showTrainnings}
          id="show-daily-trainnings"
          variant="contained"
        >
          Ver entrenamientos diarios
        </Button>
        <Button
          sx={
            vieWeeklyTrainning
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={vieWeeklyTrainning}
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
    </div>
  );
}
export default TrainerViewTrainnings;
