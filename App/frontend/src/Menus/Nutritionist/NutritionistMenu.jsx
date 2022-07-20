import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../navbar";
import NutritionistCreateDiet from "./CreateDiet/NutritionistCreateDiet";
import NutritionistViewDiets from "./ViewDiet/NutritionistViewDiets";
import NutritionistAssignedClients from "./AsignedClients/NutritionistAssignedClients";
import {
  Button,
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import jwt from "jwt-decode";

function NutritionistMenu(props) {
  const navigate = useNavigate();

  const [showDietsPanel, setShowDietsPanel] = useState(true);
  const [showClientsPanel, setShowClientsPanel] = useState(false);
  const [createDietsPanel, setCreateDietsPanel] = useState(false);
  const [dailyDietList, setDailyDietList] = useState([]);
  const [weeklyDietList, setWeeklyDietList] = useState([]);
  const [nutritionistProfile, setNutritionistProfile] = useState({
    nombre: "",
    apellidos: "",
    clientes: [],
  });
  const [clients, setClients] = useState({
    new: [],
    reviewed: [],
    nonReviewed: [],
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
      if (loggedUser.rol === "ENTRENADOR") {
        navigate("/menuEntrenador");
      }
    }
    const urlNutritionist = `http://localhost:8080/nutricionista/${loggedUser.userId}`;

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
          setNutritionistProfile({
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            clientes: response.data.clientes,
          });

          filterClients(response.data.clientes);
          reloadDiets();
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const getMaxDate = (list) => {
    return new Date(
      Math.max(
        ...list.map((element) => {
          const myDate = element.fechaRevision.split("/");
          return new Date(myDate[2], myDate[1] - 1, myDate[0]);
        })
      )
    );
  };

  const filterClients = (clientList) => {
    const newClients = clientList.filter(
      (client) => client.fechaAsignacionDieta === null && client.dieta === null
    );

    const notNew = clientList.filter(
      (client) =>
        client.dieta !== null &&
        client.fechaAsignacionDieta !== null &&
        client.revisiones.length !== 0
    );

    const reviewedClients = notNew.filter(
      (client) =>
        getMaxDate(client.revisiones) <=
        new Date(
          client.fechaAsignacionDieta.split("/")[2],
          client.fechaAsignacionDieta.split("/")[1] - 1,
          client.fechaAsignacionDieta.split("/")[0]
        )
    );

    const nonReviewedClients = notNew.filter(
      (client) =>
        getMaxDate(client.revisiones) >
        new Date(
          client.fechaAsignacionDieta.split("/")[2],
          client.fechaAsignacionDieta.split("/")[1] - 1,
          client.fechaAsignacionDieta.split("/")[0]
        )
    );

    setClients({
      new: newClients,
      reviewed: reviewedClients,
      nonReviewed: nonReviewedClients,
    });
  };

  const reloadDiets = () => {
    const urlDailyDiet = `http://localhost:8080/alimentacion-diaria/get-all`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .get(urlDailyDiet, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setDailyDietList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

    reloadWeeklyDiets();
  };

  const reloadWeeklyDiets = () => {
    const urlDailyDiet = `http://localhost:8080/dietas/get-all`;
    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .get(urlDailyDiet, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setWeeklyDietList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const showDiets = (e) => {
    setShowClientsPanel(false);
    setShowDietsPanel(true);
    setCreateDietsPanel(false);
  };

  const createDiets = (e) => {
    setShowClientsPanel(false);
    setShowDietsPanel(false);
    setCreateDietsPanel(true);
  };

  const showClients = (e) => {
    setShowClientsPanel(true);
    setShowDietsPanel(false);
    setCreateDietsPanel(false);
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
                <p>Hola {nutritionistProfile.nombre} !</p>

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
                  variant="contained"
                  onClick={showDiets}
                  style={{ width: "90%", marginTop: "100px" }}
                >
                  Ver dietas
                </Button>
                <Button
                  sx={
                    createDietsPanel
                      ? {
                          color: "black !important",
                          backgroundColor: "#B7B7B7 !important",
                        }
                      : null
                  }
                  disabled={createDietsPanel}
                  variant="contained"
                  onClick={createDiets}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Crear dietas
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
              {showDietsPanel ? (
                <NutritionistViewDiets
                  reloadDiets={reloadDiets}
                  dailyDietList={dailyDietList}
                  weeklyDietList={weeklyDietList}
                />
              ) : null}
              {createDietsPanel ? (
                <NutritionistCreateDiet
                  dailyDietList={dailyDietList}
                  reloadDiets={reloadDiets}
                />
              ) : null}
              {showClientsPanel ? (
                <NutritionistAssignedClients
                  nutritionistProfile={nutritionistProfile}
                  newClients={clients.new}
                  reviewedClients={clients.reviewed}
                  nonReviewedClients={clients.nonReviewed}
                />
              ) : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default NutritionistMenu;
