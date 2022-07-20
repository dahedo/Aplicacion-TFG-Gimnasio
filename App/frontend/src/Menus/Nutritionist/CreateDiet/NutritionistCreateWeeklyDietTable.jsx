import { Table, TableBody, TableContainer } from "@mui/material";
import WeekTable from "./WeekTable";

function NutritionistCreateWeeklyDietTable(props) {
  return (
    <TableContainer
      style={{
        borderRadius: "4px",
        border: " 1px solid rgba(224, 224, 224, 1) ",
        height: "388px",
      }}
    >
      <Table style={{ height: "100%" }} aria-label="collapsible table">
        <TableBody>
          {props.weeklyDailydiets.map((row) => (
            <WeekTable
              key={row.name}
              row={row}
              search={props.search}
              cancelRow={props.cancelRow}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default NutritionistCreateWeeklyDietTable;
