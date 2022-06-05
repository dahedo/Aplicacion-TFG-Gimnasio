import {
  Box,
  Button,
  Collapse,
  Dialog,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NutritionistCreateWeeklyDietTable from "./NutritionistCreateWeeklyDietTable";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";

function NutritionistCreateWeeklyDiet(props) {
  const numRows = 9;
  const [page, setPage] = React.useState(0);
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");
  const [dailyDietList, setDailyDietList] = useState(props.dailyDietList);
  const [enableBusqueda, setEnableBusqueda] = useState({
    enable: false,
    day: null,
  });
  const [dietaSemanal, setDietaSemanal] = useState({
    nombre: "",
    alimentacionDiariaDietas: [
      {
        alimentacionDiaria: null,
        diaSemana: 1,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 2,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 3,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 4,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 5,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 6,
      },
      {
        alimentacionDiaria: null,
        diaSemana: 7,
      },
    ],
  });

  const changeName = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "nombreDieta":
        setNombreDieta(e.target.value.replace(/ /g, "_") + " ");
        break;
      case "caloriasDieta":
        setCaloriasDieta(
          e.target.value === ""
            ? ""
            : e.target.value.replace(/ /g, "_") + "kcal"
        );
        break;
      case "alergiasDieta":
        setAlergiasDieta(
          e.target.value === ""
            ? ""
            : " Alergias:" + e.target.value.replace(/ /g, "_")
        );
        break;
      case "otrosDieta":
        setOtrosDieta(
          e.target.value === ""
            ? ""
            : " Otros:" + e.target.value.replace(/ /g, "_")
        );
        break;
      default:
        break;
    }
  };

  const seleccionarDieta = async (row, day, e) => {
    let newDieta = dietaSemanal;
    const newArr = newDieta.alimentacionDiariaDietas.map((obj) => {
      if (obj.diaSemana === day) {
        return { alimentacionDiaria: row, diaSemana: day };
      }
      return obj;
    });
    newDieta.alimentacionDiariaDietas = newArr;
    setDietaSemanal(newDieta);
    setEnableBusqueda({
      enable: false,
      day: null,
    });
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

  const save = () => {
    const url = `http://localhost:8080/dietas/create-update`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);
    let body = dietaSemanal;
    body = {
      ...body,
      nombre: nombreDieta + caloriasDieta + alergiasDieta + otrosDieta,
    };
    axios
      .post(url, body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          props.setOpenSnackBarOK(true);
          props.setEnableDietaSemanal(false);
          props.setEnableDietaDiaria(false);
        },
        (error) => {
          props.setOpenSnackBarKO(true);
        }
      );
  };

  const cancelRow = (day) => {
    setDietaSemanal(null);
    let newDieta = dietaSemanal;
    const newArr = newDieta.alimentacionDiariaDietas.map((obj) => {
      if (obj.diaSemana === day) {
        return { alimentacionDiaria: null, diaSemana: day };
      }
      return obj;
    });
    newDieta.alimentacionDiariaDietas = newArr;
    setDietaSemanal(newDieta);
    setDietaSemanal({ ...dietaSemanal });
  };

  const cancelAll = () => {
    props.setEnableDietaSemanal(false);
    props.setEnableDietaDiaria(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const filtrar = (e) => {
    e.preventDefault();
    const filteredData = props.dailyDietList.filter((data) =>
      data.nombre.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setDailyDietList(filteredData);
    setPage(0);
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
          id="nombreDieta"
          size="small"
          label="Nombre"
          variant="outlined"
          onChange={changeName}
        ></TextField>
        <TextField
          required
          id="caloriasDieta"
          style={{ marginRight: "10px" }}
          size="small"
          label="Nº Calorias"
          variant="outlined"
          onChange={changeName}
        ></TextField>
        <TextField
          id="alergiasDieta"
          style={{ marginRight: "10px" }}
          size="small"
          label="Alergias/Intolerancias"
          variant="outlined"
          onChange={changeName}
        ></TextField>
        <TextField
          id="otrosDieta"
          style={{ marginRight: "10px" }}
          size="small"
          label="Otros"
          variant="outlined"
          onChange={changeName}
        ></TextField>
      </Paper>

      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px 20px 5px 20px",
          marginTop: "3px",
          height: "484px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(0, 0, 0, 0.65)",
            height: "40px",
          }}
        >
          Nombre: {nombreDieta}
          {caloriasDieta}
          {alergiasDieta}
          {otrosDieta}
        </div>
        <NutritionistCreateWeeklyDietTable
          cancelRow={cancelRow}
          search={search}
          nameWeeklyDiet={dietaSemanal.nombre}
          weeklyDailydiets={dietaSemanal.alimentacionDiariaDietas}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            height: "50px",
          }}
        >
          <Button
            disabled={
              nombreDieta !== "" &&
              caloriasDieta !== "" &&
              dietaSemanal.alimentacionDiariaDietas[0].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[1].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[2].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[3].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[4].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[5].alimentacionDiaria !==
                null &&
              dietaSemanal.alimentacionDiariaDietas[6].alimentacionDiaria !==
                null
                ? false
                : true
            }
            style={{ margin: "10px 10px 10px 10px" }}
            variant="contained"
            onClick={save}
          >
            Guardar
          </Button>
          <Button
            style={{ margin: "10px 0px 10px 10px" }}
            id="cancel-dieta"
            variant="contained"
            onClick={cancelAll}
          >
            Cancelar
          </Button>
        </div>
      </Paper>

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
              onChange={filtrar}
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
                  dailyDietList.slice(page * numRows, page * numRows + numRows)
                    .length === numRows
                    ? { height: "100%" }
                    : { height: "auto" }
                }
                aria-label="simple table"
              >
                <TableBody>
                  {dailyDietList
                    .slice(page * numRows, page * numRows + numRows)
                    .map((row) => (
                      <RowDialog
                        seleccionarDieta={seleccionarDieta}
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
              count={dailyDietList.length}
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

export default NutritionistCreateWeeklyDiet;

function RowDialog(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ width: "60px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.nombre}</TableCell>
        <TableCell style={{ width: "60px" }} align="right">
          <Button
            onClick={(e) =>
              props.seleccionarDieta(row, props.enableBusqueda.day, e)
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
                  {Object.entries(row).map(([key, value]) =>
                    key !== "nombre" &&
                    key !== "id" &&
                    value !== "" &&
                    value !== null ? (
                      <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ) : null
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
