import {
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Dialog,
  Button,
} from "@mui/material";
import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
function NutritionistAssignedClients(props) {
  const numRows = 13;
  const [page, setPage] = React.useState(0);

  const [enableNewClients, setEnableNewClients] = useState(true);
  const [enableNonReviewedClients, setEnableNonReviewedClients] =
    useState(false);
  const [enableReviewedClients, setEnableReviewedClients] = useState(false);

  const [nutritionistClients, setNutritionistClients] = React.useState(
    props.nutritionistProfile.clientes
  );
  const [enableReviewDialog, setEnableReviewDialoge] = React.useState({
    open: false,
    clientToReview: null,
  });

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

  const changeView = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "new-clients":
        setEnableNewClients(true);
        setEnableNonReviewedClients(false);
        setEnableReviewedClients(false);
        break;
      case "non-reviewed-clients":
        setEnableNewClients(false);
        setEnableNonReviewedClients(true);
        setEnableReviewedClients(false);
        break;
      case "reviewed-clients":
        setEnableNewClients(false);
        setEnableNonReviewedClients(false);
        setEnableReviewedClients(true);
        break;
      default:
        break;
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const openReviewDialog = (row) => {
    console.log(row);
    setEnableReviewDialoge({
      open: true,
      clientToReview: row,
    });
  };

  const handleCloseReviewDialog = () => {
    setEnableReviewDialoge({
      open: false,
      clientToReview: null,
    });
  };

  const filtrar = (e) => {
    const filteredData = props.nutritionistProfile.clientes.filter((data) =>
      data.nombre.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setNutritionistClients(filteredData);
    setPage(0);
  };

  const maxDate = (arr) => {
    new Date(
      Math.max(
        ...arr.map((element) => {
          return new Date(element.date);
        })
      )
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "70px",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={
            enableNewClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableNewClients}
          id="new-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes nuevos
        </Button>
        <Button
          sx={
            enableNonReviewedClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableNonReviewedClients}
          id="non-reviewed-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes sin revisar
        </Button>
        <Button
          sx={
            enableReviewedClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableReviewedClients}
          id="reviewed-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes revisados
        </Button>
      </Paper>

      {enableNewClients &&
      !enableNonReviewedClients &&
      !enableReviewedClients ? (
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
          nuevos
        </Paper>
      ) : null}
      {!enableNewClients &&
      enableNonReviewedClients &&
      !enableReviewedClients ? (
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
          sin revisar
        </Paper>
      ) : null}
      {!enableNewClients &&
      !enableNonReviewedClients &&
      enableReviewedClients ? (
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
          revisados
        </Paper>
      ) : null}

      {/* <Paper
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
                <InputAdornment>
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
            margin: "0px 10px 10px 10px",
            height: "calc(100% - 60px)",
          }}
        >
          <TableContainer style={{ height: "calc(100% - 70px)" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "#1976d2" }}>
                  <TableCell
                    style={{ padding: "7px", color: "white" }}
                    align="left"
                  >
                    Nombre
                  </TableCell>
                  <TableCell style={{ padding: "7px", color: "white" }}>
                    Apellidos
                  </TableCell>

                  <TableCell
                    style={{ padding: "7px", color: "white", width: "150px" }}
                  >
                    Estado
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nutritionistClients.map((row) => (
                  <TableRow
                    style={
                      row.revisiones.length === 0 &&
                      row.fechaAsignacionDieta === null &&
                      row.dieta === null
                        ? { backgroundColor: "#FFA794" }
                        : {}
                    }
                    key={row.nombre}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    onClick={() => openReviewDialog(row)}
                  >
                    <TableCell style={{ padding: "7px" }}>
                      {row.nombre}
                    </TableCell>
                    <TableCell style={{ padding: "7px" }}>
                      {row.apellidos}
                    </TableCell>

                    <TableCell style={{ padding: "7px" }}>
                      {row.revisiones.length === 0 &&
                      row.fechaAsignacionDieta === null
                        ? "sin revisar"
                        : "revisado"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ marginRight: 0 }}
            rowsPerPageOptions={[]}
            component="div"
            count={nutritionistClients.length}
            rowsPerPage={numRows}
            page={page}
            onPageChange={handleChangePage}
          />
        </div>

        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          onClose={handleCloseReviewDialog}
          open={enableReviewDialog.open}
        >
          <Paper style={{ height: "600px", padding: "20px 20px 20px 20px" }}>
            <TextField size="small" label="Nombre"></TextField>
            <TextField size="small" label="Apellidos"></TextField>
            <TextField size="small" label="Edad"></TextField>
            <TextField size="small" label="Altura"></TextField>
            <TextField
              size="small"
              label="Aalergias / Intolerancias"
            ></TextField>

            <TableContainer
              style={{
                borderRadius: "4px",
                border: " 1px solid rgba(224, 224, 224, 1) ",
                height: "calc(100% - 60px)",
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
                          <TableCell align="center">
                            {row.fechaRevision}
                          </TableCell>
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
                          <TableCell align="center">
                            {row.bicepsDerecho}
                          </TableCell>
                          <TableCell align="center">
                            {row.musloIzquierdo}
                          </TableCell>
                          <TableCell align="center">
                            {row.musloDerecho}
                          </TableCell>

                          {/* <TableCell
                          align="center"
                          style={{
                            padding: "2px 2px 2px 2px",
                          }}
                          onClick={() => setComentDialog(row.comentarios)}
                        >
                          {row.comentarios !== "" ? (
                            <CommentOutlinedIcon size="small" />
                          ) : null}
                        </TableCell> 
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
          </Paper>
        </Dialog>
      </Paper> */}
    </div>
  );
}

export default NutritionistAssignedClients;
