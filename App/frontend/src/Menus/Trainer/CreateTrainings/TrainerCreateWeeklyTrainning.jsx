import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function TrainerCreateWeeklyTrainning(props) {
  const semana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const [entrenamientoSemanal, setEntrenamientoSemanal] = useState({
    nombre: "",
    entrenamientoSemanalDiario: [
      {
        entrenamientoDiario: null,
        diaSemana: 1,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 2,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 3,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 4,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 5,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 6,
      },
      {
        entrenamientoDiario: null,
        diaSemana: 7,
      },
    ],
  });

  return (
    <React.Fragment>
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
      >
        <TextField
          required
          style={{ marginRight: "10px" }}
          id="nombreEntreno"
          size="small"
          label="Nombre"
          variant="outlined"
        ></TextField>
        <TextField
          required
          id="caloriasEntreno"
          style={{ marginRight: "10px" }}
          size="small"
          label="Descripción"
          variant="outlined"
        ></TextField>
      </Paper>

      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px 20px 5px 20px",
          marginTop: "3px",
          height: "500px",
        }}
      >
        <TableContainer
          style={{
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
            height: "460px",
          }}
        >
          <Table style={{ height: "100%" }} aria-label="collapsible table">
            <TableBody>
              {entrenamientoSemanal.entrenamientoSemanalDiario.map((row) => (
                <TableRow>
                  <TableCell style={{ padding: "7px" }}></TableCell>
                  {" > "}
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ padding: "7px" }}
                  >
                    {semana[row.diaSemana - 1]}
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    {" "}
                    Entrenamiento_seleccionado
                  </TableCell>
                  <TableCell style={{ padding: "7px" }} align="right">
                    {row.alimentacionDiaria?.nombre ? (
                      <Button
                        // onClick={() => props.cancelRow(row.diaSemana)}
                        variant="outlined"
                      >
                        {/* <ClearIcon fontSize="small" /> */}
                      </Button>
                    ) : (
                      <Button
                        // onClick={() => search(row.diaSemana)}
                        // id={row.diaSemana}
                        variant="outlined"
                      >
                        {/* <SearchIcon fontSize="small" ></SearchIcon> */}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}

export default TrainerCreateWeeklyTrainning;
