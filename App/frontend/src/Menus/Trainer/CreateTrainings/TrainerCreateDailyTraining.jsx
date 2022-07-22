import {
  Button,
  Dialog,
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
} from "@mui/material";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input1: {
    height: 10,
  },
}));

function TrainerCreateDailyTrainning(props) {
  const numRows = 13;
  const [page, setPage] = React.useState(0);
  const [enableImage, setEnableImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [dailyTraining, setDailyTraining] = useState({
    nombre: "",
    openDialog: false,
    training: [],
  });

  const handleCloseDialog = () => {
    setDailyTraining({ ...dailyTraining, openDialog: false });
  };
  const handleAddExercise = () => {
    setDailyTraining({ ...dailyTraining, openDialog: true });
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const ver = (image) => {
    setEnableImage(true);
    setImageToShow(image);
  };

  const handleClose = (e) => {
    setEnableImage(false);
  };

  const dailyTrainingAddExercise = (exercise) => {
    const trainingObj = {
      series: 0,
      repeticiones: 0,
      ejercicio: exercise,
    };
    setDailyTraining({
      nombre: dailyTraining.nombre,
      openDialog: false,
      training: dailyTraining.training.concat(trainingObj),
    });
    setPage(0);
  };

  const dailyTrainingDeleteExercise = (index) => {
    const newList = dailyTraining.training.map((a) => a);
    newList.splice(index, 1);
    if (index > -1) {
      setDailyTraining({
        nombre: dailyTraining.nombre,
        openDialog: false,
        training: newList,
      });
    }
  };

  const changeParameters = (e, row) => {
    const newList = dailyTraining.training.map((a) => a);
    const objIndex = dailyTraining.training.findIndex((obj) => obj === row);
    newList[objIndex][e.target.id] = parseInt(e.target.value);

    setDailyTraining({
      nombre: dailyTraining.nombre,
      openDialog: false,
      training: newList,
    });
  };

  const save = () => {
    const data = {
      nombre: dailyTraining.nombre,
      ejercicioEntrenamiento: dailyTraining.training,
    };

    const url = `http://localhost:8080/entremaniento-diario/create-update`;

    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          props.setOpenSnackBarOK(true);
          setDailyTraining({
            nombre: "",
            openDialog: false,
            training: [],
          });
        },
        (error) => {
          props.setOpenSnackBarKO(true);
        }
      );
  };

  return (
    <>
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
          id="nombreEntreno"
          size="small"
          label="Nombre"
          variant="outlined"
          value={dailyTraining.nombre}
          onChange={(e) =>
            setDailyTraining({ ...dailyTraining, nombre: e.target.value })
          }
        ></TextField>
        <TextField
          style={{ marginRight: "10px" }}
          size="small"
          label="Descripción"
          variant="outlined"
        ></TextField>
        <Button onClick={handleAddExercise} variant="outlined">
          Añadir ejercicio
        </Button>
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
        {/* Tabla de Ejercicios */}
        <DailyTrainingTable
          dailyTraining={dailyTraining.training}
          dailyTrainingDeleteExercise={dailyTrainingDeleteExercise}
          setImageToShow={setImageToShow}
          setEnableImage={setEnableImage}
          changeParameters={changeParameters}
        />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            style={{ height: "30px", margin: "5px 5px 5px 5px" }}
            variant="contained"
            onClick={() => save()}
          >
            Guardar
          </Button>
          <Button
            style={{ height: "30px", margin: "5px 5px 5px 5px" }}
            variant="outlined"
          >
            cancelar
          </Button>
        </div>
        {/* PopUp seleccion de ejercicios */}
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={dailyTraining.openDialog}
          onClose={handleCloseDialog}
        >
          <Paper
            elevation={3}
            style={{
              padding: "20px 20px 5px 20px",
            }}
          >
            <TableContainer style={{ height: "calc(100% - 70px)" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#1976d2" }}>
                    <TableCell
                      style={{ padding: "7px", color: "white", width: "600px" }}
                      align="left"
                    >
                      Nonbre
                    </TableCell>
                    <TableCell
                      style={{ padding: "7px", color: "white", width: "150px" }}
                    >
                      Parte del Cuerpo
                    </TableCell>
                    <TableCell
                      style={{ padding: "7px", color: "white", width: "150px" }}
                    >
                      Grupo muscular
                    </TableCell>
                    <TableCell
                      style={{ padding: "7px", color: "white", width: "150px" }}
                    >
                      Equipamiento
                    </TableCell>
                    <TableCell
                      style={{ padding: "7px", color: "white", width: "100px" }}
                      align="center"
                    >
                      Imagen
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.exerciseData
                    .slice(page * numRows, page * numRows + numRows)
                    .map((row) => (
                      <TableRow
                        key={row.nombre}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell style={{ padding: "7px" }} align="left">
                          {row.nombre}
                        </TableCell>
                        <TableCell style={{ padding: "7px" }} align="left">
                          {row.parteCuerpo}
                        </TableCell>
                        <TableCell style={{ padding: "7px" }} align="left">
                          {row.grupoMuscular}
                        </TableCell>
                        <TableCell style={{ padding: "7px" }}>
                          {row.equipamiento}
                        </TableCell>
                        <TableCell
                          style={{ padding: "7px" }}
                          align="center"
                          onClick={() => ver(row.urlImagen)}
                        >
                          Ver
                        </TableCell>

                        <TableCell style={{ padding: "7px" }} align="right">
                          <Button
                            style={{ height: "25px" }}
                            onClick={() => dailyTrainingAddExercise(row)}
                            variant="outlined"
                          >
                            <AddIcon fontSize="small" />
                          </Button>
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
              count={props.exerciseData.length}
              rowsPerPage={numRows}
              page={page}
              onPageChange={handleChangePage}
            />
          </Paper>
        </Dialog>

        <Dialog onClose={handleClose} open={enableImage}>
          <img src={imageToShow} alt="alternatetext" />
        </Dialog>
      </Paper>
    </>
  );
}

export default TrainerCreateDailyTrainning;

function DailyTrainingTable(props) {
  const {
    dailyTraining,
    dailyTrainingDeleteExercise,
    setImageToShow,
    setEnableImage,
    changeParameters,
  } = props;
  const classes = useStyles();
  const numRows = 13;
  const [page, setPage] = React.useState(0);
  const [dailyTrainingData, setDailyTrainingData] =
    React.useState(dailyTraining);

  useEffect(() => {
    setDailyTrainingData(dailyTraining);
  }, [dailyTraining]);

  const ver = (image) => {
    setEnableImage(true);
    setImageToShow(image);
  };

  return (
    <TableContainer style={{ marginTop: "15px", height: "calc(100% - 30px)" }}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
              align="left"
            >
              Nonbre
            </TableCell>

            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            >
              Grupo muscular
            </TableCell>
            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            >
              Equipamiento
            </TableCell>
            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            >
              Repeticiones
            </TableCell>
            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            >
              Series
            </TableCell>

            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
              align="center"
            >
              Imagen
            </TableCell>
            <TableCell
              style={{
                padding: "7px",
                color: "white",
                backgroundColor: "#1976d2",
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyTrainingData
            .slice(page * numRows, page * numRows + numRows)
            .map((row) => (
              <TableRow
                key={row.nombre}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell style={{ padding: "7px" }} align="left">
                  {row.ejercicio.nombre}
                </TableCell>
                <TableCell style={{ padding: "7px" }} align="left">
                  {row.ejercicio.grupoMuscular}
                </TableCell>
                <TableCell style={{ padding: "7px" }} align="left">
                  {row.ejercicio.equipamiento}
                </TableCell>
                <TableCell style={{ width: "100px", padding: "7px" }}>
                  <TextField
                    id="repeticiones"
                    type="number"
                    size="small"
                    variant="outlined"
                    InputProps={{ classes: { input: classes.input1 } }}
                    value={row.repeticiones}
                    onChange={(e) => changeParameters(e, row)}
                  ></TextField>
                </TableCell>
                <TableCell style={{ width: "100px", padding: "7px" }}>
                  <TextField
                    id="series"
                    size="small"
                    type="number"
                    variant="outlined"
                    onChange={(e) => changeParameters(e, row)}
                    value={row.series}
                    InputProps={{ classes: { input: classes.input1 } }}
                  ></TextField>
                </TableCell>
                <TableCell
                  style={{ width: "100px", padding: "7px" }}
                  align="center"
                  onClick={() => ver(row.ejercicio.urlImagen)}
                >
                  Ver
                </TableCell>

                <TableCell
                  style={{ width: "100px", padding: "7px" }}
                  align="right"
                >
                  <Button
                    style={{ height: "25px" }}
                    onClick={() =>
                      dailyTrainingDeleteExercise(
                        dailyTrainingData.indexOf(row)
                      )
                    }
                    variant="outlined"
                  >
                    <ClearIcon fontSize="small" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
