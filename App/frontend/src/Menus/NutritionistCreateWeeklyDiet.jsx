import {
  Button,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

function NutritionistCreateWeeklyDiet(props) {
  console.log(props.dailyDietList);
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");

  const [dietaSemanal, setDietaSemanal] = useState({
    lunes: {},
    martes: {},
    miercoles: {},
    jueves: {},
    viernes: {},
    sabado: {},
    domingo: {},
  });
  const [enableBusqueda, setEnableBusqueda] = useState(false);

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

  const buscar = async (e) => {
    e.preventDefault();
    setEnableBusqueda(true);
  };
  const handleClose = async (e) => {
    e.preventDefault();
    setEnableBusqueda(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{
          height: "12%",
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
          height: "65%",
          padding: "20px 20px 20px 20px",
          marginTop: "10px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Lunes</TableCell>
                <TableCell>
                  <Button onClick={buscar} id="Lunes">
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Martes</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Miercoles</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jueves</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Viernes</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sabado</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Domingo</TableCell>
                <TableCell>
                  <Button>
                    <SearchIcon fontSize="small" />
                    {"Buscar"}
                  </Button>
                </TableCell>
              </TableRow>
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

      <Dialog onClose={handleClose} open={enableBusqueda}>
        <TableContainer component={Paper}>
          <TableBody>
            <TableRow>z</TableRow>
          </TableBody>
        </TableContainer>
      </Dialog>
    </>
  );
}

export default NutritionistCreateWeeklyDiet;
