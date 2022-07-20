import {
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";

import React, { useState } from "react";

function NutritionistReviewClientDialog(props) {
  const { enableReviewDialog, handleCloseReviewDialog } = props;
  const numRows = 6;
  const [page, setPage] = React.useState(0);
  const tableHeaderData = [
    "Fecha",
    "Peso",
    "Cuello",
    "Hombros",
    "Pecho",
    "Cintura",
    "Cadera",
    "Antebrazo izq",
    "Antebrazo der",
    "Muslo izq",
    "Muslo der",
    "Bicep izq",
    "Bicep der",
    "Comentario",
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function getAge(dateString) {
    if (dateString) {
      var today = new Date();

      let from = dateString.split("/");
      var birthDate = new Date(from[2], from[1] - 1, from[0]);

      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    } else return "";
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xl"}
      onClose={handleCloseReviewDialog}
      open={enableReviewDialog.open}
    >
      <Paper style={{ height: "600px", padding: "20px 20px 20px 20px" }}>
        <TextField
          size="small"
          label="Nombre"
          value={enableReviewDialog.clientToReview?.nombre}
        />
        <TextField
          size="small"
          label="Apellidos"
          value={enableReviewDialog.clientToReview?.apellidos}
        />
        <TextField
          size="small"
          label="Edad"
          value={getAge(enableReviewDialog.clientToReview?.fechaNacimiento)}
        />
        <TextField
          size="small"
          label="Altura"
          value={enableReviewDialog.clientToReview?.altura}
        />
        <TextField size="small" label="Aalergias / Intolerancias"></TextField>

        <TableContainer
          style={{
            marginTop: "10px",
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
            height: "calc(100% - 360px)",
          }}
        >
          <Table
            style={
              enableReviewDialog.clientToReview?.revisiones.slice(
                page * numRows,
                page * numRows + numRows
              ).length === numRows
                ? { height: "100%" }
                : { height: "auto" }
            }
            size="small"
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                {tableHeaderData.map((cell) => (
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {enableReviewDialog.clientToReview?.revisiones &&
            enableReviewDialog.clientToReview?.revisiones !== [] ? (
              <TableBody>
                {enableReviewDialog.clientToReview?.revisiones
                  .sort((a, b) =>
                    b.fechaRevision
                      .split("/")
                      .reverse()
                      .join()
                      .localeCompare(
                        a.fechaRevision.split("/").reverse().join()
                      )
                  )
                  .slice(page * numRows, page * numRows + numRows)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.fechaRevision}</TableCell>
                      <TableCell align="center">{row.peso}</TableCell>
                      <TableCell align="center">{row.cuello}</TableCell>
                      <TableCell align="center">{row.hombros}</TableCell>
                      <TableCell align="center">{row.pecho}</TableCell>
                      <TableCell align="center">{row.cintura}</TableCell>
                      <TableCell align="center">{row.cadera}</TableCell>
                      <TableCell align="center">
                        {row.antebrazoIzquierdo}
                      </TableCell>
                      <TableCell align="center">
                        {row.antebrazoDerecho}
                      </TableCell>
                      <TableCell align="center">
                        {row.bicepsIzquierdo}
                      </TableCell>
                      <TableCell align="center">{row.bicepsDerecho}</TableCell>
                      <TableCell align="center">{row.musloIzquierdo}</TableCell>
                      <TableCell align="center">{row.musloDerecho}</TableCell>
                      {/* 
                      <TableCell
                        align="center"
                        style={{
                          padding: "2px 2px 2px 2px",
                        }}
                        onClick={() => setComentDialog(row.comentarios)}
                      >
                        {row.comentarios !== "" ? (
                          <CommentOutlinedIcon size="small" />
                        ) : null}
                      </TableCell> */}
                    </TableRow>
                  ))}
              </TableBody>
            ) : null}
          </Table>
        </TableContainer>
        <TablePagination
          style={{ marginRight: 0 }}
          rowsPerPageOptions={[]}
          component="div"
          count={
            enableReviewDialog.clientToReview
              ? enableReviewDialog.clientToReview.revisiones.length
              : 0
          }
          rowsPerPage={numRows}
          page={page}
          onPageChange={handleChangePage}
        />

        <TableContainer
          style={{
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
            height: "calc(100% - 350px)",
          }}
        ></TableContainer>
      </Paper>
    </Dialog>
  );
}

export default NutritionistReviewClientDialog;
