import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";

import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function NutritionistCreateDiet(props) {
  const [nombreDieta, setNombreDieta] = useState("");
  const [caloriasDieta, setCaloriasDieta] = useState("");
  const [alergiasDieta, setAlergiasDieta] = useState("");
  const [otrosDieta, setOtrosDieta] = useState("");

  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const [dietaDiaria, setDietaDiaria] = useState({
    nombre: "",
    desayuno: "",
    mediaMañana: "",
    comida: "",
    merienda: "",
    cena: "",
    preEntreno: "",
    postEntreno: "",
    otros: "",
  });

  const [enableDietaDiaria, setEnableDietaDiaria] = useState(false);
  const [enableDietaSemanal, setEnableDietaSemanal] = useState(false);

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

  const createDieta = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "create-dieta-diaria":
        setEnableDietaSemanal(false);
        setEnableDietaDiaria(true);
        break;
      case "create-dieta-semanal":
        setEnableDietaSemanal(true);
        setEnableDietaDiaria(false);
        break;
      case "cancel-dieta":
        setEnableDietaSemanal(false);
        setEnableDietaDiaria(false);
        setDietaDiaria({
          nombre: "",
          desayuno: "",
          mediaMañana: "",
          comida: "",
          merienda: "",
          cena: "",
          preEntreno: "",
          postEntreno: "",
          otros: "",
        });
        break;
      default:
        break;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const changeDietaDiaria = async (e) => {
    e.preventDefault();
    setDietaDiaria({ ...dietaDiaria, [e.target.id]: e.target.value });
  };

  const guardar = async (e) => {
    e.preventDefault();

    setDietaDiaria({
      ...dietaDiaria,
      nombre:
        "[" +
        nombreDieta +
        "][" +
        caloriasDieta +
        "kcal][Alergias:" +
        alergiasDieta +
        "][otros:" +
        otrosDieta +
        "]",
    });

    const url = `http://localhost:8080/alimentacion-diaria/create-update-alimentacion`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, dietaDiaria, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setOpenSnackBar(true);
          setEnableDietaSemanal(false);
          setEnableDietaDiaria(false);
          setDietaDiaria({
            nombre: "",
            desayuno: "",
            mediaMañana: "",
            comida: "",
            merienda: "",
            cena: "",
            preEntreno: "",
            postEntreno: "",
            otros: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={createDieta}
          id="create-dieta-diaria"
          variant="contained"
        >
          Crear dieta diaria
        </Button>

        <Button
          onClick={createDieta}
          id="create-dieta-semanal"
          variant="contained"
        >
          Crear dieta semanal
        </Button>
      </Paper>
      {!enableDietaSemanal && !enableDietaDiaria ? null : (
        <Paper
          elevation={3}
          style={{
            height: "12%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px 20px 10px 20px",
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
      )}
      {enableDietaDiaria && !enableDietaSemanal ? (
        <Paper
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "65%",
            padding: "20px 20px 20px 20px",
          }}
        >
          <TextField
            id="desayuno"
            size="small"
            label="Desayuno"
            onChange={changeDietaDiaria}
            value={dietaDiaria.desayuno}
          ></TextField>
          <TextField
            id="mediaMañana"
            size="small"
            style={{ marginTop: "10px" }}
            label="Media Mañana"
            onChange={changeDietaDiaria}
            value={dietaDiaria.mediaMañana}
          ></TextField>
          <TextField
            id="comida"
            size="small"
            style={{ marginTop: "10px" }}
            label="Comida"
            onChange={changeDietaDiaria}
            value={dietaDiaria.comida}
          ></TextField>
          <TextField
            id="merienda"
            size="small"
            style={{ marginTop: "10px" }}
            label="Merienda"
            onChange={changeDietaDiaria}
            value={dietaDiaria.merienda}
          ></TextField>
          <TextField
            id="cena"
            size="small"
            style={{ marginTop: "10px" }}
            label="Cena"
            onChange={changeDietaDiaria}
            value={dietaDiaria.cena}
          ></TextField>
          <TextField
            id="preEntreno"
            size="small"
            style={{ marginTop: "10px" }}
            label="Pre-Entreno"
            onChange={changeDietaDiaria}
            value={dietaDiaria.preEntreno}
          ></TextField>
          <TextField
            id="postEntreno"
            size="small"
            style={{ marginTop: "10px" }}
            label="Post-Entreno"
            onChange={changeDietaDiaria}
            value={dietaDiaria.postEntreno}
          ></TextField>
          <TextField
            id="otros"
            size="small"
            style={{ marginTop: "10px" }}
            label="Otros"
            onChange={changeDietaDiaria}
            value={dietaDiaria.otros}
          ></TextField>
          <div>
            <Button onClick={guardar}>Guardar</Button>
            <Button id="cancel-dieta" onClick={createDieta}>
              Cancelar
            </Button>
          </div>
        </Paper>
      ) : null}
      {enableDietaSemanal && !enableDietaDiaria ? (
        <TableContainer
          component={Paper}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "65%",
            padding: "20px 20px 20px 20px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Lunes</TableCell>
                <TableCell>
                  <Button>
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
            <Button onClick={guardar}>Guardar</Button>
            <Button id="cancel-dieta" onClick={createDieta}>
              Cancelar
            </Button>
          </div>
        </TableContainer>
      ) : null}

      {!enableDietaSemanal && !enableDietaDiaria ? (
        <>
          <Paper
            elevation={3}
            style={{
              height: "12%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px 20px 10px 20px",
            }}
          ></Paper>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "65%",
              padding: "20px 20px 20px 20px",
            }}
          ></Paper>
        </>
      ) : null}

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Guardado correctamente
        </Alert>
      </Snackbar>
    </div>
  );
}
export default NutritionistCreateDiet;
