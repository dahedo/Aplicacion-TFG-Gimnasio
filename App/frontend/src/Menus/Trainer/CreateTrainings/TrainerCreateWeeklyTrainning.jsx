import {
  Button,
  Dialog,
  Collapse,
  Paper,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WeekTable from "./WeekTable";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";

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
  const emptyTraining = {
    nombre: "",
    entrenamientoDiarios: [
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
  };
  const numRows = 9;
  const [page, setPage] = React.useState(0);
  const [dailyTraining, setDailyTraining] = useState(props.dailyTrainingtList);
  useEffect(() => {
    setDailyTraining(props.dailyTrainingtList);
  }, [props.dailyTrainingtList]);

  const [entrenamientoSemanal, setEntrenamientoSemanal] =
    useState(emptyTraining);

  const [enableBusqueda, setEnableBusqueda] = useState({
    enable: false,
    day: null,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const search = (day) => {
    setEnableBusqueda({ enable: true, day: day });
    setPage(0);
  };
  const handleClose = (e) => {
    setEnableBusqueda({
      enable: false,
      day: null,
    });
  };

  const cancelRow = (day) => {
    let newtraining = { ...entrenamientoSemanal };
    const newArr = newtraining.entrenamientoDiarios.map((obj) => {
      if (obj.diaSemana === day) {
        return { entrenamientoDiario: null, diaSemana: day };
      }
      return obj;
    });
    newtraining.entrenamientoDiarios = newArr;

    setEntrenamientoSemanal(newtraining);
  };

  const seleccionarEntrenamiento = async (row, day, e) => {
    let newtraining = { ...entrenamientoSemanal };
    const newArr = newtraining.entrenamientoDiarios.map((obj) => {
      if (obj.diaSemana === day) {
        return { entrenamientoDiario: row, diaSemana: day };
      }
      return obj;
    });
    newtraining.entrenamientoDiarios = newArr;

    setEntrenamientoSemanal(newtraining);
    setEnableBusqueda({
      enable: false,
      day: null,
    });
  };

  const save = () => {
    console.log(entrenamientoSemanal);

    const url = `http://localhost:8080/entremaniento-semanal/create-update`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, entrenamientoSemanal, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          props.setOpenSnackBarOK(true);
          setEntrenamientoSemanal(emptyTraining);
          // props.reloadDiets();
        },
        (error) => {
          props.setOpenSnackBarKO(true);
        }
      );
  };

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
          value={entrenamientoSemanal.nombre}
          onChange={(e) =>
            setEntrenamientoSemanal({
              ...entrenamientoSemanal,
              nombre: e.target.value,
            })
          }
        ></TextField>
        <TextField
          required
          id="descripcion"
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
            marginTop: "15px",
            height: "calc(100% - 30px)",
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
          }}
        >
          <Table style={{ height: "100%" }} aria-label="collapsible table">
            <TableBody>
              {entrenamientoSemanal.entrenamientoDiarios.map((row) => (
                <WeekTable
                  key={row.name}
                  row={row}
                  search={search}
                  cancelRow={cancelRow}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Botones guardar / cancelar */}
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            style={{ height: "30px", margin: "5px 5px 5px 5px" }}
            variant="contained"
            onClick={() => save()}
          >
            Guardar
          </Button>
          <Button
            style={{ height: "30px", margin: "5px 5px 5px 5px" }}
            variant="outlined"
          >
            cancelar
          </Button>
        </div>
      </Paper>

      {/* Dialogo de busqueda de entrenamientos diarios */}
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        onClose={handleClose}
        open={enableBusqueda.enable}
      >
        <Paper style={{ height: "600px", padding: "20px 20px 20px 20px" }}>
          <div
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <TextField
              // onChange={filtrar}
              style={{ margin: "10px 10px 10px 10px" }}
              size="small"
              label="Buscar nombre"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "calc(100% - 60px)",
            }}
          >
            <TableContainer
              style={{
                height: "calc(100% - 70px)",
                borderRadius: "4px",
                border: " 1px solid rgba(224, 224, 224, 1) ",
              }}
            >
              <Table
                style={
                  dailyTraining?.slice(page * numRows, page * numRows + numRows)
                    .length === numRows
                    ? { height: "100%" }
                    : { height: "auto" }
                }
                aria-label="simple table"
              >
                <TableBody>
                  {dailyTraining
                    ?.slice(page * numRows, page * numRows + numRows)
                    .map((row) => (
                      <RowDialog
                        seleccionarEntrenamiento={seleccionarEntrenamiento}
                        key={row.name}
                        row={row}
                        enableBusqueda={enableBusqueda}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={{ marginRight: 0 }}
              rowsPerPageOptions={[]}
              component="div"
              count={dailyTraining?.length}
              rowsPerPage={numRows}
              page={page}
              onPageChange={handleChangePage}
            />
          </div>
        </Paper>
      </Dialog>
    </React.Fragment>
  );
}

export default TrainerCreateWeeklyTrainning;

function RowDialog(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ padding: "7px", width: "60px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ padding: "7px" }}>{row.nombre}</TableCell>
        <TableCell style={{ padding: "7px", width: "60px" }} align="right">
          <Button
            onClick={(e) =>
              props.seleccionarEntrenamiento(row, props.enableBusqueda.day, e)
            }
            variant="outlined"
          >
            <AddIcon />
          </Button>
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" aria-label="purchases">
                <TableBody>
                  {row.ejercicioEntrenamiento.map((ejercicio) => (
                    <TableRow key={ejercicio.ejercicio.id}>
                      <TableCell>{ejercicio.ejercicio.nombre}</TableCell>
                      <TableCell>{ejercicio.repeticiones}</TableCell>
                      <TableCell>{ejercicio.series}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}
