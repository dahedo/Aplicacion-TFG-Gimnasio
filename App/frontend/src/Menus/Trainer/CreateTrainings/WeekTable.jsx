import {
  Button,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

function WeekTable(props) {
  const semana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const { row, search } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ padding: "7px", width: "60px" }}>
          {row.entrenamientoDiario ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{ padding: "7px", width: "100px" }}
        >
          {semana[row.diaSemana - 1]}
        </TableCell>
        <TableCell style={{ padding: "7px" }}>
          {row.entrenamientoDiario?.nombre}
        </TableCell>
        <TableCell style={{ padding: "7px" }} align="right">
          {row.entrenamientoDiario?.nombre ? (
            <Button
              onClick={() => props.cancelRow(row.diaSemana)}
              variant="outlined"
            >
              <ClearIcon fontSize="small" />
            </Button>
          ) : (
            <Button
              onClick={() => search(row.diaSemana)}
              id={row.diaSemana}
              variant="outlined"
            >
              <SearchIcon fontSize="small" />
            </Button>
          )}
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table
                component={Paper}
                size="small"
                aria-label="purchases"
                style={{ width: "100%" }}
              >
                <TableBody>
                  {row.entrenamientoDiario?.ejercicioEntrenamiento.map(
                    (ejercicio) => (
                      <TableRow key={ejercicio.ejercicio.id}>
                        <TableCell>{ejercicio.ejercicio.nombre}</TableCell>
                        <TableCell>{ejercicio.repeticiones}</TableCell>
                        <TableCell>{ejercicio.series}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}

export default WeekTable;
