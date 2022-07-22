import {
  Button,
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
import WeeklyDiet from "../ViewDiet/WeeklyDiet";
import NutritionistDialogSelectWDiet from "./NutritionistDialogSelectWDiet";
import React from "react";

function NutritionistReviewClientDialog(props) {
  const {
    setEnableReviewDialoge,
    enableReviewDialog,
    handleCloseReviewDialog,
  } = props;
  const [openSelectDietDialog, setOpenSelectDietDialog] = React.useState(false);

  const numRows = 5;
  const [page, setPage] = React.useState(0);
  const empty = { id: "", nombre: "", alimentacionDiariaDietas: [] };
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

  const save = () => {
    console.log(setEnableReviewDialoge);
  };

  return (
    <Dialog fullWidth={true} maxWidth={"xl"} open={enableReviewDialog.open}>
      <Paper style={{ height: "680px", padding: "20px 20px 0px 20px" }}>
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
        <TextField
          size="small"
          label="Alergias / Intolerancias"
          value={enableReviewDialog.clientToReview?.parametrosCliente?.alergias}
        ></TextField>
        <TextField
          size="small"
          label="Lesiones"
          value={enableReviewDialog.clientToReview?.parametrosCliente?.lesiones}
        ></TextField>

        {/* Dieta semanal asignada */}
        <TableContainer
          style={{
            marginTop: "5px",
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
            height: "315px",
          }}
        >
          <Table>
            <TableBody>
              <WeeklyDiet
                key={enableReviewDialog.clientToReview?.dieta?.id}
                row={
                  enableReviewDialog.clientToReview?.dieta
                    ? enableReviewDialog.clientToReview?.dieta
                    : empty
                }
                open={true}
                handleClickOpen={() => setOpenSelectDietDialog(true)}
              />
            </TableBody>
          </Table>
        </TableContainer>

        {/* Revisiones de cliente */}
        <TableContainer
          style={{
            marginTop: "5px",
            borderRadius: "4px",
            border: " 1px solid rgba(224, 224, 224, 1) ",
            height: "210px",
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
          style={{ height: "55px" }}
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
        <div
          style={{
            height: "30px",
          }}
        >
          <Button
            style={{
              height: "25px",
              marginRight: "5px",
            }}
            variant="contained"
            onClick={save}
          >
            Guardar
          </Button>
          <Button
            style={{
              height: "25px",
            }}
            variant="contained"
            onClick={handleCloseReviewDialog}
          >
            Cancelar
          </Button>
        </div>
      </Paper>
      <NutritionistDialogSelectWDiet
        open={openSelectDietDialog}
        setOpenSelectDietDialog={setOpenSelectDietDialog}
        weeklyDietList={props.weeklyDietList}
        enableReviewDialog={enableReviewDialog}
        setEnableReviewDialoge={setEnableReviewDialoge}
      ></NutritionistDialogSelectWDiet>
    </Dialog>
  );
}

export default NutritionistReviewClientDialog;
