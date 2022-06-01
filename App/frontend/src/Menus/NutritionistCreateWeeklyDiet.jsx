import {
  Box,
  Button,
  Collapse,
  Dialog,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

function NutritionistCreateWeeklyDiet(props) {
  const semana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");

  const [dietaSemanal, setDietaSemanal] = useState({
    Lunes: {},
    Martes: {},
    Miercoles: {},
    Jueves: {},
    Viernes: {},
    Sabado: {},
    Domingo: {},
  });
  const [enableBusqueda, setEnableBusqueda] = useState(false);
  const [diaBusqueda, setDiaBusqueda] = useState("");

  const changeName = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "nombreDieta":
        setNombreDieta(e.target.value);
        break;
      case "caloriasDieta":
        setCaloriasDieta(e.target.value);
        break;
      case "alergiasDieta":
        setAlergiasDieta(e.target.value);
        break;
      case "otrosDieta":
        setOtrosDieta(e.target.value);
        break;
      default:
        break;
    }
  };

  const seleccionarDieta = async (row, e) => {
    console.log(diaBusqueda);
    setDietaSemanal({ ...dietaSemanal, [diaBusqueda]: row });
    console.log(dietaSemanal);
  };

  const buscar = async (e) => {
    e.preventDefault();
    setDiaBusqueda(e.target.id);
    setEnableBusqueda(true);
  };
  const handleClose = async (e) => {
    e.preventDefault();
    setEnableBusqueda(false);
    setDiaBusqueda("");
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{
          height: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 20px 10px 20px",
          marginTop: "10px",
        }}
      >
        <div>
          Nombre de la dieta:
          {nombreDieta !== "" ? "  [" + nombreDieta + "]" : ""}
          {caloriasDieta !== "" ? "[" + caloriasDieta + "kcal]" : ""}
          {alergiasDieta !== "" ? "[Alergias:" + alergiasDieta + "]" : ""}
          {otrosDieta !== "" ? "[otros:" + otrosDieta + "]" : ""}
        </div>
        <div>
          <TextField
            style={{ marginRight: "10px" }}
            id="nombreDieta"
            size="small"
            label="Nombre"
            variant="outlined"
            onChange={changeName}
          ></TextField>
          <TextField
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
        </div>
      </Paper>

      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px 20px 20px",
          marginTop: "10px",
          height: "410px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {semana.map((dia) => (
                <TableRow key={dia}>
                  <TableCell>{dia}</TableCell>
                  <TableCell>
                    <Button onClick={buscar} id={dia}>
                      <SearchIcon fontSize="small" />
                      {"Buscar"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>
            <Button
            //  onClick={guardar}
            >
              Guardar
            </Button>
            <Button
              id="cancel-dieta"
              // onClick={createDieta}
            >
              Cancelar
            </Button>
          </div>
        </TableContainer>
      </Paper>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        onClose={handleClose}
        open={enableBusqueda}
      >
        <div style={{ height: "600px", padding: "20px 20px 20px 20px" }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {props.dailyDietList.map((row) => (
                  <Row
                    seleccionarDieta={seleccionarDieta}
                    key={row.name}
                    row={row}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Dialog>
    </>
  );
}

export default NutritionistCreateWeeklyDiet;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombre}
        </TableCell>
        <TableCell
          onClick={(e) => props.seleccionarDieta(row, e)}
          component="th"
          scope="row"
        >
          <AddIcon />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
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
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
