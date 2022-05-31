import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "../navbar";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import jwt from "jwt-decode";
import "./NutritionistStyles.css";
import ClientProfile from "./ClientProfile";
import ClientDiets from "./ClientDiets";
import ClientExercisesPanel from "./ClientExercisesPanel";

function ClientMenu(props) {
  const navigate = useNavigate();

  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showDietsPanel, setShowDietsPanel] = useState(false);
  const [showTrainningsPanel, setShowTrainningsPanel] = useState(false);
  const [showExercisesPanel, setShowExercisesPanel] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);

  const [clientProfile, setClientProfile] = useState({
    nombre: "",
    apellidos: "",
    email: false,
    fechaNacimiento: "",
    username: "",
    parq1: false,
    parq2: false,
    parq3: false,
    parq4: false,
    parq5: false,
    parq6: false,
    parq7: false,
    dieta: "",
  });

  useEffect(() => {
    var loggedUser = window.localStorage.getItem("loggedUser");

    if (loggedUser == null) {
      navigate("/login");
    } else {
      loggedUser = jwt(loggedUser);

      if (loggedUser.rol === "ENTRENADOR") {
        navigate("/menuEntrenador");
      }
      if (loggedUser.rol === "NUTRICIONISTA") {
        navigate("/menuNutricionista");
      }
    }

    const url = `http://localhost:8080/clientes/${loggedUser.userId}`;

    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    //Get client data
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setClientProfile({
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            email: response.data.email,
            fechaNacimiento: response.data.fechaNacimiento,
            username: response.data.username,
            parq1: response.data.parq1 ? response.data.parq1 : false,
            parq2: response.data.parq2 ? response.data.parq2 : false,
            parq3: response.data.parq3 ? response.data.parq3 : false,
            parq4: response.data.parq4 ? response.data.parq4 : false,
            parq5: response.data.parq5 ? response.data.parq5 : false,
            parq6: response.data.parq6 ? response.data.parq6 : false,
            parq7: response.data.parq7 ? response.data.parq7 : false,
            dieta: response.data.dieta,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    //Get all exercises
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

  const showProfile = async (e) => {
    e.preventDefault();
    setShowProfilePanel(true);
    setShowDietsPanel(false);
    setShowTrainningsPanel(false);
    setShowExercisesPanel(false);
  };

  const showDiets = async (e) => {
    e.preventDefault();
    setShowProfilePanel(false);
    setShowDietsPanel(true);
    setShowTrainningsPanel(false);
    setShowExercisesPanel(false);
  };

  const showTrainnings = async (e) => {
    e.preventDefault();
    setShowProfilePanel(false);
    setShowDietsPanel(false);
    setShowTrainningsPanel(true);
    setShowExercisesPanel(false);
  };

  const showExercises = async (e) => {
    e.preventDefault();
    setShowProfilePanel(false);
    setShowDietsPanel(false);
    setShowTrainningsPanel(false);
    setShowExercisesPanel(true);
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
                <p>Bienvenido {clientProfile.nombre}</p>
                <Button
                  variant="contained"
                  onClick={showProfile}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Perfil
                </Button>
                <Button
                  variant="contained"
                  onClick={showDiets}
                  style={{ width: "90%", marginTop: "100px" }}
                >
                  Dietas
                </Button>
                <Button
                  variant="contained"
                  onClick={showTrainnings}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Entrenamientos
                </Button>
                <Button
                  variant="contained"
                  onClick={showExercises}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Ejercicios
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={10}>
              {showProfilePanel ? (
                <ClientProfile clientProfile={clientProfile} />
              ) : null}
              {showDietsPanel ? (
                <ClientDiets clientDiet={clientProfile.dieta} />
              ) : null}

              {showTrainningsPanel ? "Entrenamientos" : null}

              {showExercisesPanel ? (
                <ClientExercisesPanel
                  exerciseData={exerciseData}
                ></ClientExercisesPanel>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ClientMenu;
