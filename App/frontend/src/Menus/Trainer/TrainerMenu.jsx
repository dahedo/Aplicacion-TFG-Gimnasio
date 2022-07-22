import { Alert, Avatar, Button, Grid, Paper, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../navbar";
import jwt from "jwt-decode";
import axios from "axios";
import TrainerCreateTrainnings from "./CreateTrainings/TrainerCreateTrainnings";
import TrainerViewTrainnings from "./ViewTrainings/TrainerViewTrainnings";

function MuenuEntrenador(props) {
  const navigate = useNavigate();

  //Botones del menu
  const [showClientsPanel, setShowClientsPanel] = useState(false);
  const [showTrainningsPanel, setShowTrainningsPanel] = useState(false);
  const [createTrainningsPanel, setCreateTrainningsPanel] = useState(true);

  //Datos
  const [exerciseData, setExerciseData] = useState([]);

  //PopUps OK - KO en las peticiones
  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);

  const [trainerProfile, setTrainerProfile] = useState({
    nombre: "",
    apellidos: "",
    clientes: [],
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
  };

  useEffect(() => {
    var loggedUser = window.localStorage.getItem("loggedUser");

    if (loggedUser == null) {
      navigate("/login");
    } else {
      loggedUser = jwt(loggedUser);
      if (loggedUser.rol === "CLIENTE") {
        navigate("/menuCliente");
      }
      if (loggedUser.rol === "NUTRICIONISTA") {
        navigate("/menuNutricionista");
      }
    }

    //
    // get trainer data
    //
    const urlNutritionist = `http://localhost:8080/entrenador/${loggedUser.userId}`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);
    axios
      .get(urlNutritionist, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setTrainerProfile({
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            clientes: response.data.clientes,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    //
    //get all exercises
    //

    const url2 = `http://localhost:8080/ejercicios/get-all`;
    axios
      .get(url2, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setExerciseData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const showTrainnings = (e) => {
    setShowClientsPanel(false);
    setShowTrainningsPanel(true);
    setCreateTrainningsPanel(false);
  };

  const createTrainning = (e) => {
    setShowClientsPanel(false);
    setShowTrainningsPanel(false);
    setCreateTrainningsPanel(true);
  };

  const showClients = (e) => {
    setShowClientsPanel(true);
    setShowTrainningsPanel(false);
    setCreateTrainningsPanel(false);
  };

  return (
    <div className="App">
      <ResponsiveAppBar loginVisivility={false} logoutVisivility={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 70px)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: "650px", width: "90%" }}>
          <Grid container spacing={2} style={{ height: "100%" }}>
            <Grid item xs={12} md={2} style={{ height: "100%" }}>
              <Paper
                elevation={3}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 150, height: 150 }}
                  style={{ marginTop: "30px" }}
                />
                <p>Hola {trainerProfile.nombre} !</p>
                <Button
                  sx={
                    showTrainningsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showTrainningsPanel}
                  variant="contained"
                  onClick={showTrainnings}
                  style={{ width: "90%", marginTop: "100px" }}
                >
                  Ver entrenamientos
                </Button>

                <Button
                  sx={
                    createTrainningsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={createTrainningsPanel}
                  variant="contained"
                  onClick={createTrainning}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Crear entrenamientos
                </Button>
                <Button
                  sx={
                    showClientsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showClientsPanel}
                  variant="contained"
                  onClick={showClients}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Mis clientes
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={10} style={{ height: "100%" }}>
              {showTrainningsPanel ? (
                <TrainerViewTrainnings
                  setOpenSnackBarOK={setOpenSnackBarOK}
                  setOpenSnackBarKO={setOpenSnackBarKO}
                />
              ) : null}
              {createTrainningsPanel ? (
                <TrainerCreateTrainnings
                  exerciseData={exerciseData}
                  setOpenSnackBarOK={setOpenSnackBarOK}
                  setOpenSnackBarKO={setOpenSnackBarKO}
                />
              ) : null}
              {showClientsPanel ? <>ver clientes</> : null}
            </Grid>
          </Grid>

          <Snackbar
            open={openSnackBarOK}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Guardado correctamente
            </Alert>
          </Snackbar>

          <Snackbar
            open={openSnackBarKO}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Error al guardar
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
export default MuenuEntrenador;
