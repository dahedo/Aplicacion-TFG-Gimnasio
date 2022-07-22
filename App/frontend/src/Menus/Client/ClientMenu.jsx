import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "../../navbar";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import jwt from "jwt-decode";
import ClientProfile from "./ClientProfile";
import ClientDiets from "./ClientDiets";
import ClientExercisesPanel from "./ClientExercisesPanel";
import ClientReviews from "./ClientReviews";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ClientMenu(props) {
  const navigate = useNavigate();

  //loaging flags
  const [isExerciseLoading, setExercieseLoading] = React.useState(true);
  const [isClientLoading, setClientLoading] = React.useState(true);

  //Bool flags to enable diferent screens
  const [showProfilePanel, setShowProfilePanel] = useState(true);
  const [showDietsPanel, setShowDietsPanel] = useState(false);
  const [showTrainningsPanel, setShowTrainningsPanel] = useState(false);
  const [showExercisesPanel, setShowExercisesPanel] = useState(false);
  const [showReviewsPanel, setShowReviewsPanel] = useState(false);

  //data
  const [exerciseData, setExerciseData] = useState([]);

  const [clientProfile, setClientProfile] = useState({
    user_id: null,
    nombre: "",
    apellidos: "",
    email: false,
    fechaNacimiento: null,
    username: "",
    dieta: "",
    parametrosCliente: {},
    altura: null,
    revisiones: null,
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

    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    getClientData();

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
          setExercieseLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const getClientData = () => {
    var loggedUser = window.localStorage.getItem("loggedUser");
    loggedUser = jwt(loggedUser);
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
            user_id: response.data.user_id,
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            email: response.data.email,
            fechaNacimiento: response.data.fechaNacimiento,
            username: response.data.username,
            dieta: response.data.dieta,
            parametrosCliente: response.data.parametrosCliente,
            altura: response.data.altura,
            revisiones: response.data.revisiones,
          });
          setClientLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const selectFromMenu = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "show-profile":
        setShowProfilePanel(true);
        setShowDietsPanel(false);
        setShowTrainningsPanel(false);
        setShowExercisesPanel(false);
        setShowReviewsPanel(false);
        break;
      case "show-diets":
        setShowProfilePanel(false);
        setShowDietsPanel(true);
        setShowTrainningsPanel(false);
        setShowExercisesPanel(false);

        setShowReviewsPanel(false);
        break;
      case "show-trainnings":
        setShowProfilePanel(false);
        setShowDietsPanel(false);
        setShowTrainningsPanel(true);
        setShowExercisesPanel(false);
        setShowReviewsPanel(false);
        break;
      case "show-exercises":
        setShowProfilePanel(false);
        setShowDietsPanel(false);
        setShowTrainningsPanel(false);
        setShowExercisesPanel(true);
        setShowReviewsPanel(false);
        break;
      case "show-reviews":
        setShowProfilePanel(false);
        setShowDietsPanel(false);
        setShowTrainningsPanel(false);
        setShowExercisesPanel(false);
        setShowReviewsPanel(true);
        break;
      default:
        break;
    }
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
                <p>Hola {clientProfile.nombre} !</p>
                <Button
                  sx={
                    showProfilePanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showProfilePanel}
                  id="show-profile"
                  variant="contained"
                  onClick={selectFromMenu}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Perfil
                </Button>
                <Button
                  sx={
                    showDietsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showDietsPanel}
                  id="show-diets"
                  variant="contained"
                  onClick={selectFromMenu}
                  style={{ width: "90%", marginTop: "70px" }}
                >
                  Dietas
                </Button>
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
                  id="show-trainnings"
                  variant="contained"
                  onClick={selectFromMenu}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Entrenamientos
                </Button>
                <Button
                  sx={
                    showExercisesPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showExercisesPanel}
                  id="show-exercises"
                  variant="contained"
                  onClick={selectFromMenu}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Ejercicios
                </Button>
                <Button
                  sx={
                    showReviewsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={showReviewsPanel}
                  id="show-reviews"
                  variant="contained"
                  onClick={selectFromMenu}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Revisiones
                </Button>
              </Paper>
            </Grid>
            {!isExerciseLoading && !isClientLoading ? (
              <Grid item xs={12} md={10}>
                {showProfilePanel ? (
                  <ClientProfile
                    clientProfile={clientProfile}
                    getClientData={getClientData}
                  />
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
                {showReviewsPanel ? (
                  <ClientReviews
                    reviews={clientProfile.revisiones}
                    clientId={clientProfile.user_id}
                    getClientData={getClientData}
                  />
                ) : null}
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                md={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CircularProgress />
                </Box>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ClientMenu;
