import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
  Collapse,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
function NutritionistViewDailyDiets(props) {
  const numRows = 9;
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedDiet, setSelectedDiet] = React.useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (row) => {
    setSelectedDiet(row);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditDiet = (e) => {
    setSelectedDiet({ ...selectedDiet, [e.target.id]: e.target.value });
  };

  const save = () => {
    const url = `http://localhost:8080/alimentacion-diaria/create-update-alimentacion`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, selectedDiet, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setOpen(false);

          props.reloadDiets();
        },
        (error) => {
          props.setOpenSnackBarKO(true);
        }
      );

    setOpen(false);
  };

  return (
    <Paper
      elevation={3}
      style={{
        height: "calc(100% - 93px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px 10px 20px",
        marginTop: "3px",
      }}
    >
      <TableContainer
        style={{
          height: "calc(100% - 60px)",
          borderRadius: "4px",
          border: " 1px solid rgba(224, 224, 224, 1) ",
        }}
      >
        <Table
          style={
            props.dailyDietList.slice(page * numRows, page * numRows + numRows)
              .length === numRows
              ? { height: "100%" }
              : { height: "auto" }
          }
          aria-label="simple table"
        >
          <TableBody>
            {props.dailyDietList
              .slice(page * numRows, page * numRows + numRows)
              .map((row) => (
                <CustomRow row={row} handleClickOpen={handleClickOpen} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={props.dailyDietList.length}
        rowsPerPage={numRows}
        page={page}
        onPageChange={handleChangePage}
      />

      <Dialog fullWidth maxWidth={"lg"} onClose={handleClose} open={open}>
        <DialogTitle>Editar dieta:</DialogTitle>
        <DialogContent
          dividers
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            id="desayuno"
            onChange={handleEditDiet}
            value={selectedDiet.desayuno}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Desayuno"
          >
            Desayuno
          </TextField>
          <TextField
            id="mediaMañana"
            onChange={handleEditDiet}
            value={selectedDiet.mediaMañana}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Media mañana"
          >
            Media mañana
          </TextField>
          <TextField
            id="comida"
            onChange={handleEditDiet}
            value={selectedDiet.comida}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Comida"
          >
            Comida
          </TextField>
          <TextField
            id="merienda"
            onChange={handleEditDiet}
            value={selectedDiet.merienda}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Merienda"
          >
            Merienda
          </TextField>
          <TextField
            id="cena"
            onChange={handleEditDiet}
            value={selectedDiet.cena}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Cena"
          >
            Cena
          </TextField>
          <TextField
            id="preEntreno"
            onChange={handleEditDiet}
            value={selectedDiet.preEntreno}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Pre-entreno"
          >
            Pre-entreno
          </TextField>
          <TextField
            id="postEntreno"
            onChange={handleEditDiet}
            value={selectedDiet.postEntreno}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Post-entreno"
          >
            Post-entreno
          </TextField>
          <TextField
            id="otros"
            onChange={handleEditDiet}
            value={selectedDiet.otros}
            style={{ margin: "5px 5px 5px 5px" }}
            label="Otros"
          >
            Otros
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={save}>
            Guardar
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default NutritionistViewDailyDiets;

function CustomRow(props) {
  const [open, setOpen] = React.useState(false);
  const { row, handleClickOpen } = props;

  return (
    <>
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
        <TableCell>{row.nombre}</TableCell>
        <TableCell style={{ padding: "7px" }} align="right">
          <Button onClick={() => handleClickOpen(row)}>
            <EditIcon fontSize="small" /> Editar
          </Button>
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
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
    </>
  );
}
