import { Paper } from "@mui/material";

function NutritionistViewWeeklyDiets(props) {
  return (
    <Paper
      elevation={3}
      style={{
        height: "calc(100% - 73px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px 10px 20px",
        marginTop: "3px",
      }}
    />
  );
}

export default NutritionistViewWeeklyDiets;
