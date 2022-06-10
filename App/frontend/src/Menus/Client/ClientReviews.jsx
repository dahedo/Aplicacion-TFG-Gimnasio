import {
  Alert,
  Button,
  Dialog,
  Input,
  InputAdornment,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
function ClientReviews(props) {
  const defaultReview = {
    peso: "",
    fechaRevision: formatDate(new Date()),
    cuello: "",
    hombros: "",
    pecho: "",
    cintura: "",
    antebrazoDerecho: "",
    antebrazoIzquierdo: "",
    musloDerecho: "",
    musloIzquierdo: "",
    bicepsDerecho: "",
    bicepsIzquierdo: "",
    cadera: "",
    comentarios: "",
    cliente: {
      user_id: props.clientId,
    },
  };

  const numRows = 10;
  const maxTextfieldNumber = 500;
  const [page, setPage] = React.useState(0);
  const [newReview, setNewReview] = useState(defaultReview);
  const [enableNewReview, setEnableNewReview] = useState(true);
  const [comentDialog, setComentDialog] = useState("");
  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);

  const [nextReview, setNextReview] = React.useState(null);

  useEffect(() => {
    if (props.reviews && props.reviews.length > 0) {
      const lastDate = props.reviews.sort((a, b) =>
        b.fechaRevision
          .split("/")
          .reverse()
          .join()
          .localeCompare(a.fechaRevision.split("/").reverse().join())
      )[0].fechaRevision;

      let from = lastDate.split("/");
      let date_2 = new Date(from[2], from[1] - 1, from[0]);
      let date_1 = new Date();

      let difference = date_1.getTime() - date_2.getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

      if (TotalDays > 7) {
        setEnableNewReview(true);
      } else {
        setEnableNewReview(false);
      }
      date_2.setDate(date_2.getDate() + 7);
      setNextReview(formatDate(date_2));
    } else {
      setEnableNewReview(true);
    }
  }, [props.reviews, enableNewReview]);

  const handleCloseDialog = (e) => {
    setComentDialog("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
  };

  const cancelNewReview = (e) => {
    setNewReview(defaultReview);
  };

  const createNewReview = (e) => {
    let value = e.target.value;
    if (e.target.id !== "comentarios" && e.target.value > maxTextfieldNumber) {
      value = maxTextfieldNumber;
    }
    setNewReview({ ...newReview, [e.target.id]: value });
  };

  const saveNewReview = (e) => {
    const url = `http://localhost:8080/revisiones/create-update`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, newReview, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setOpenSnackBarOK(true);
          setNewReview(defaultReview);
          props.getClientData();
        },
        (error) => {
          setOpenSnackBarKO(true);
        }
      );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {enableNewReview ? (
        <Paper
          elevation={3}
          style={{ display: "flex", flexDirection: "column", height: "200px" }}
        >
          <div
            style={{
              height: "40px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="h6"
              style={{ width: "200px", margin: "5px 5px 5px 10px" }}
            >
              Nueva revisión:
            </Typography>
            <div
              style={{
                width: "calc(100% - 200px)",
                display: "flex",
                justifyContent: "right",
                margin: "5px 5px 0px 0px",
              }}
            >
              <Button
                onClick={saveNewReview}
                style={{ margin: "5px 5px 5px 5px" }}
                variant="contained"
              >
                Guardar
              </Button>
              <Button
                onClick={cancelNewReview}
                style={{ margin: "5px 5px 5px 5px" }}
                variant="contained"
              >
                Cancelar
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0px 5px 0px 5px",
            }}
          >
            <TextField
              required
              id="peso"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Peso (kg)"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.peso}
            />
            <TextField
              id="cuello"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Cuello"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.cuello}
            />
            <TextField
              id="hombros"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Hombros"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.hombros}
            ></TextField>
            <TextField
              id="pecho"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Pecho"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.pecho}
            ></TextField>
            <TextField
              id="cintura"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Cintura"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.cintura}
            ></TextField>

            <TextField
              id="cadera"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Cadera"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.cadera}
            ></TextField>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0px 5px 0px 5px",
            }}
          >
            <TextField
              id="antebrazoIzquierdo"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Antebrazo izq"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.antebrazoIzquierdo}
            ></TextField>
            <TextField
              id="antebrazoDerecho"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Antebrazo der"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.antebrazoDerecho}
            ></TextField>
            <TextField
              id="musloIzquierdo"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Muslo izq"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.musloIzquierdo}
            ></TextField>
            <TextField
              id="musloDerecho"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Muslo der"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.musloDerecho}
            ></TextField>
            <TextField
              id="bicepsIzquierdo"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Bicep izq"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.bicepsIzquierdo}
            ></TextField>
            <TextField
              id="bicepsDerecho"
              type="number"
              placeholder={"[0-500]"}
              InputProps={{ inputProps: { min: 0, max: maxTextfieldNumber } }}
              style={{ width: "180px", margin: "5px 5px 5px 5px" }}
              size="small"
              label={"Bicep der"}
              onChange={createNewReview}
              onKeyPress={(event) => avoidCharacters(event)}
              value={newReview.bicepsDerecho}
            ></TextField>
          </div>

          <TextField
            style={{ margin: "5px 10px 0px 10px" }}
            id="comentarios"
            size="small"
            label={"Comentarios"}
            onChange={createNewReview}
            value={newReview.comentarios}
          ></TextField>
        </Paper>
      ) : (
        <Paper
          elevation={3}
          style={{
            fontSize: "25px",
            color: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <span>Ya se realizo una revisión en los ultimos 7 días</span>
          <span>
            Podrá realizar una nueva revisión a partir del {nextReview}
          </span>
        </Paper>
      )}

      <Paper elevation={3} style={{ marginTop: "3px", height: "431px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "5px 10px 5px 10px",
            height: "100%",
          }}
        >
          <TableContainer
            style={{
              borderRadius: "4px",
              border: " 1px solid rgba(224, 224, 224, 1) ",
              height: "calc(100% - 60px)",
            }}
          >
            <Table
              style={
                props.reviews.slice(page * numRows, page * numRows + numRows)
                  .length === numRows
                  ? { height: "100%" }
                  : { height: "auto" }
              }
              size="small"
              aria-label="simple table"
            >
              <TableHead style={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Fecha
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Peso
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Cuello
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Hombros
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Pecho
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Cintura
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Cadera
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Antebrazo izq
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Antebrazo der
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Muslo izq
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Muslo der
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Bicep izq
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Bicep der
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "3px 3px 3px 3px",
                      fontSize: "0.8rem",
                      color: "white",
                    }}
                    align="center"
                  >
                    Comentario
                  </TableCell>
                </TableRow>
              </TableHead>
              {props.reviews && props.reviews !== [] ? (
                <TableBody>
                  {props.reviews
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
                        <TableCell align="center">{row.musloDerecho}</TableCell>

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
            count={props.reviews.length}
            rowsPerPage={numRows}
            page={page}
            onPageChange={handleChangePage}
          />
        </div>
      </Paper>

      <Snackbar
        open={openSnackBarOK}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Guardado correctamente
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackBarKO}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Error al guardar
        </Alert>
      </Snackbar>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleCloseDialog}
        open={comentDialog !== ""}
      >
        <Paper style={{ height: "200px", padding: "20px 20px 20px 20px" }}>
          <Typography variant="h6" style={{ width: "200px" }}>
            Comentario
          </Typography>
          <span>{comentDialog}</span>
        </Paper>
      </Dialog>
    </div>
  );
}

export default ClientReviews;

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

function avoidCharacters(event) {
  if (
    event?.key === "-" ||
    event?.key === "+" ||
    event?.key === "." ||
    event?.key === ","
  ) {
    event.preventDefault();
  }
}
