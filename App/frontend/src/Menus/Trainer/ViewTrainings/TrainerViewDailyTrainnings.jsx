import { Paper } from "@mui/material";

function TrainerViewDailyTrainnings(props) {
  return (
    <Paper
      elevation={3}
      style={{
        height: "calc(100% - 93px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px 10px 20px",
        marginTop: "3px",
      }}
    >
      ver entrenamientos diarios
    </Paper>
  );
}

export default TrainerViewDailyTrainnings;
