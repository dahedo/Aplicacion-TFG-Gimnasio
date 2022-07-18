import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../navbar";
import NutritionistCreateDiet from "./NutritionistCreateDiet";
import NutritionistViewDiets from "./NutritionistViewDiets";
import NutritionistAssignedClients from "./NutritionistAssignedClients";
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

  const [showClientsPanel, setShowClientsPanel] = useState(false);
  const [showDietsPanel, setShowDietsPanel] = useState(false);
  const [createDietsPanel, setCreateDietsPanel] = useState(false);
  const [dailyDietList, setDailyDietList] = useState([]);
  const [weeklyDietList, setWeeklyDietList] = useState([]);
  const [nutritionistProfile, setNutritionistProfile] = useState({
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

          reloadDiets();
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

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
                  variant="contained"
                  onClick={showDiets}
                  style={{ width: "90%", marginTop: "100px" }}
                >
                  Ver dietas
                </Button>
                <Button
                  variant="contained"
                  onClick={createDiets}
                  style={{ width: "90%", marginTop: "30px" }}
                >
                  Crear dietas
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
