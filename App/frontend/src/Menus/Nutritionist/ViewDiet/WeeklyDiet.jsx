import {
  TableRow,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  Collapse,
  IconButton,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function WeeklyDiet(props) {
  const [open, setOpen] = React.useState(
    props.open !== null ? props.open : false
  );
  const { row, handleClickOpen } = props;

  return (
    <>
      <TableRow>
        <TableCell style={{ padding: "1px", width: "60px" }}>
          {row.alimentacionDiariaDietas.length !== 0 ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>

        <TableCell style={{ padding: "1px" }}>{row.nombre}</TableCell>
        <TableCell style={{ padding: "1px" }} align="right">
          <Button variant="outlined" onClick={() => handleClickOpen(row)}>
            {props.buttonType === "select" ? (
              <AddIcon fontSize="small" />
            ) : (
              <EditIcon fontSize="small" />
            )}
          </Button>
        </TableCell>
      </TableRow>
      {open && row.alimentacionDiariaDietas !== [] ? (
        <TableRow
          style={{
            marginLeft: "30px",
            backgroundColor: "rgba(224, 224, 224, 1)",
          }}
        >
          <TableCell
            style={{
              padding: "7px 10px 7px 30px",
            }}
            colSpan={4}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
                <TableBody>
                  {row.alimentacionDiariaDietas
                    .sort((a, b) =>
                      a.diaSemana > b.diaSemana
                        ? 1
                        : b.diaSemana > a.diaSemana
                        ? -1
                        : 0
                    )
                    .map((alimentacionDiaria) => (
                      <DailyDietRow row={alimentacionDiaria} />
                    ))}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

function DailyDietRow(props) {
  const [open, setOpen] = React.useState(false);
  const { row, handleClickOpen } = props;
  return (
    <>
      <TableRow>
        <TableCell style={{ padding: "1px", width: "60px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ padding: "1px" }}>
          {semana[row.diaSemana - 1]}
        </TableCell>
        <TableCell style={{ padding: "1px" }}>
          {row.alimentacionDiaria.nombre}
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell
            style={{
              padding: "7px 10px 7px 20px",
            }}
            colSpan={4}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
                {Object.entries(row.alimentacionDiaria).map(([key, value]) =>
                  key !== "nombre" &&
                  key !== "id" &&
                  value !== "" &&
                  value !== null ? (
                    <TableRow key={key}>
                      <TableCell style={{ padding: "1px 1px 1px 15px" }}>
                        {key}
                      </TableCell>
                      <TableCell style={{ padding: "1px" }}>{value}</TableCell>
                    </TableRow>
                  ) : null
                )}
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

export default WeeklyDiet;
