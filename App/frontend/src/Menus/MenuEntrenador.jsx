import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../navbar";
import jwt from "jwt-decode";

function MuenuEntrenador(props) {
  const navigate = useNavigate();

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
  }, []);

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
        <div style={{ height: "95%", width: "90%" }}>
          <Grid container spacing={2} style={{ height: "100%" }}>
            <Grid item xs={12} md={2} style={{ height: "100%" }}>
              <Paper elevation={3} style={{ height: "100%" }}>
                Entrenador
              </Paper>
            </Grid>

            <Grid item xs={12} md={10}>
              <Paper elevation={3} style={{ height: "100%" }}></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default MuenuEntrenador;
