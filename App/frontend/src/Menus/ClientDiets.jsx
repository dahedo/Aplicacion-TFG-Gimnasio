import {
  Button,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

function ClientDiets(props) {
  console.log(props);
  const [dialogEnabled, setDialogEnabled] = useState(false);

  const tableHeaders = [
    "",
    "Desayuno",
    "Media mañana",
    "Comida",
    "Merienda",
    "Cena",
    "Pre-entreno",
    "Post-entreno",
    "Otros",
  ];

  const semana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const openDialog = async (e) => {
    e.preventDefault();
    setDialogEnabled(true);
  };
  const handleClose = async (e) => {
    e.preventDefault();
    setDialogEnabled(false);
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
      <Paper elevation={3} style={{ height: "49%" }}>
        <h1>Dietas genéricas:</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Calorias</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Lupa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Dieta generica 1</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
                <TableCell>d</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dieta generica 2</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
                <TableCell>d</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dieta generica 3</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
                <TableCell>d</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper elevation={3} style={{ height: "49%" }}>
        <h1>Dieta asignada a mi:</h1>
        <Button onClick={openDialog}>Abrir dieta</Button>
      </Paper>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        onClose={handleClose}
        open={dialogEnabled}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow key="sadsadasd">
                {tableHeaders.map((e, i) => (
                  <TableCell key={i}>{e}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.clientDiet?.alimentacionDiariaDietas?.map((e, i) => (
                <TableRow key={i}>
                  <TableCell>{semana[i]}</TableCell>
                  <TableCell>{e.alimentacionDiaria.desayuno}</TableCell>
                  <TableCell>{e.alimentacionDiaria.mediaMañana}</TableCell>
                  <TableCell>{e.alimentacionDiaria.comida}</TableCell>
                  <TableCell>{e.alimentacionDiaria.merienda}</TableCell>
                  <TableCell>{e.alimentacionDiaria.cena}</TableCell>
                  <TableCell>{e.alimentacionDiaria.preEntreno}</TableCell>
                  <TableCell>{e.alimentacionDiaria.postEntreno}</TableCell>
                  <TableCell>{e.alimentacionDiaria.otros}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </div>
  );
}

export default ClientDiets;
