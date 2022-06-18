import { Avatar, Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../navbar";
import jwt from "jwt-decode";
import axios from "axios";
import TrainerCreateTrainnings from "./TrainerCreateTrainnings";
import TrainerViewTrainnings from "./TrainerViewTrainnings";

function MuenuEntrenador(props) {
  const navigate = useNavigate();

  const [showClientsPanel, setShowClientsPanel] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showTrainningsPanel, setShowTrainningsPanel] = useState(false);
  const [createTrainningsPanel, setCreateTrainningsPanel] = useState(false);
  const [trainerProfile, setTrainerProfile] = useState({
    nombre: "",
    apellidos: "",
    clientes: [],
  });

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
  }, []);

  const showTrainnings = (e) => {
    setShowProfilePanel(false);
    setShowClientsPanel(false);
    setShowTrainningsPanel(true);
    setCreateTrainningsPanel(false);
  };

  const createTrainning = (e) => {
    setShowProfilePanel(false);
    setShowClientsPanel(false);
    setShowTrainningsPanel(false);
    setCreateTrainningsPanel(true);
  };

  const showProfile = (e) => {
    setShowProfilePanel(true);
    setShowClientsPanel(false);
    setShowTrainningsPanel(false);
    setCreateTrainningsPanel(false);
  };

  const showClients = (e) => {
    setShowProfilePanel(false);
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
                  variant="contained"
                  onClick={showProfile}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Perfil
                </Button>
                <Button
                  variant="contained"
                  onClick={showTrainnings}
                  style={{ width: "90%", marginTop: "100px" }}
                >
                  Ver entrenamientos
                </Button>
                <Button
                  variant="contained"
                  onClick={createTrainning}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Crear entrenamientos
                </Button>
                <Button
                  variant="contained"
                  onClick={showClients}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Mis clientes
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={10} style={{ height: "100%" }}>
              {showProfilePanel ? "Perfil" : null}
              {showTrainningsPanel ? <TrainerViewTrainnings /> : null}
              {createTrainningsPanel ? <TrainerCreateTrainnings /> : null}
              {showClientsPanel ? <>ver clientes</> : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default MuenuEntrenador;
