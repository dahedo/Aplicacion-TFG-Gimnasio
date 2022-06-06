import {
  Button,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

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
            <RowTable
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

function RowTable(props) {
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
          {row.alimentacionDiaria ? (
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
          {row.alimentacionDiaria?.nombre}
        </TableCell>
        <TableCell style={{ padding: "7px" }} align="right">
          {row.alimentacionDiaria?.nombre ? (
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
                  {row.alimentacionDiaria !== null
                    ? Object.entries(row.alimentacionDiaria).map(
                        ([key, value]) =>
                          key !== "nombre" &&
                          key !== "id" &&
                          value !== "" &&
                          value !== null ? (
                            <TableRow key={key}>
                              <TableCell>{key}</TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ) : null
                      )
                    : null}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}
