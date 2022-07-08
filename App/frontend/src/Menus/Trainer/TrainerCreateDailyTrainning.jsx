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

import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";

function TrainerCreateDailyTrainning(props) {
  const numRows = 13;
  const [page, setPage] = React.useState(0);
  const [enableImage, setEnableImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [dailyTraining, setDailyTraining] = useState({
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
    setDailyTraining({
      openDialog: false,
      training: dailyTraining.training.concat(exercise),
    });
    setPage(0);
  };

  const dailyTrainingDeleteExercise = (index) => {
    const newList = dailyTraining.training.map((a) => a);
    newList.splice(index, 1);
    if (index > -1) {
      setDailyTraining({
        openDialog: false,
        training: newList,
      });
    }
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
        ></TextField>
        <TextField
          required
          id="caloriasEntreno"
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
        />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            style={{ height: "30px", margin: "5px 5px 5px 5px" }}
            variant="contained"
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
  } = props;
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
                  {row.nombre}
                </TableCell>
                <TableCell style={{ padding: "7px" }} align="left">
                  {row.grupoMuscular}
                </TableCell>
                <TableCell style={{ padding: "7px" }} align="left">
                  {row.equipamiento}
                </TableCell>
                <TableCell style={{ padding: "7px" }}>repeticiones</TableCell>
                <TableCell style={{ padding: "7px" }}>series</TableCell>
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
