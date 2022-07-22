import React, { useState } from "react";

import { Alert, Button, Snackbar, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";

function ClientProfile(props) {
  const [clientProfile, setClientProfile] = useState(props.clientProfile);
  const [readOnly, setReadOnly] = useState(true);
  const [value, setValue] = React.useState(new Date());

  const [openSnackBarOK, setOpenSnackBarOK] = React.useState(false);
  const [openSnackBarKO, setOpenSnackBarKO] = React.useState(false);

  const submit = (e) => {
    if (e.target.id.includes("parametrosCliente")) {
      let property = e.target.id.split(".");

      setClientProfile({
        ...clientProfile,
        parametrosCliente: {
          ...clientProfile.parametrosCliente,
          [property[1]]: !clientProfile.parametrosCliente[property[1]],
        },
      });
    } else {
      setClientProfile({
        ...clientProfile,
        [e.target.id]: !clientProfile[e.target.id],
      });
    }
  };

  const cancel = (e) => {
    setClientProfile(props.clientProfile);
    setReadOnly(true);
  };

  const save = () => {
    const url = `http://localhost:8080/clientes/create-update`;

    var token = window.localStorage.getItem("loggedUser");
    token = JSON.parse(token);

    axios
      .post(url, clientProfile, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          setOpenSnackBarOK(true);
          props.getClientData();

          setReadOnly(!readOnly);
        },
        (error) => {
          setOpenSnackBarKO(true);
        }
      );
  };

  const edit = (e) => {
    setReadOnly(!readOnly);
  };

  const changeData = (e) => {
    if (e.target.id.includes("parametrosCliente")) {
      let property = e.target.id.split(".");
      setClientProfile({
        ...clientProfile,
        parametrosCliente: {
          ...clientProfile.parametrosCliente,
          [property[1]]: e.target.value,
        },
      });
    } else {
      setClientProfile({
        ...clientProfile,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleChangeDate = (newValue) => {
    setClientProfile({ ...clientProfile, fechaNacimiento: newValue });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBarOK(false);
    setOpenSnackBarKO(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "70px",
          }}
        >
          <TextField
            fullWidth
            disabled={readOnly}
            size="small"
            style={{ margin: "5px 5px 5px 10px" }}
            id="nombre"
            label="Nombre"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.nombre}
          />
          <TextField
            fullWidth
            disabled={readOnly}
            size="small"
            style={{ margin: "5px 5px 5px 5px" }}
            id="apellidos"
            label="Apellidos"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.apellidos}
          />
          <TextField
            disabled={readOnly}
            size="small"
            style={{ minWidth: "250px", margin: "5px 5px 5px 5px" }}
            id="email"
            label="Email"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.email}
          />

          <MobileDatePicker
            disabled={readOnly}
            label="Fecha de nacimiento"
            id="fechaNacimiento"
            inputFormat="dd/MM/yyyy"
            disableFuture
            value={
              clientProfile.fechaNacimiento
                ? clientProfile.fechaNacimiento
                : null
            }
            onChange={handleChangeDate}
            error={false}
            renderInput={(params) => (
              <TextField
                style={{ minWidth: "180px", margin: "5px 5px 5px 5px" }}
                size="small"
                error={false}
                {...params}
              />
            )}
          />

          <TextField
            type="number"
            disabled={readOnly}
            size="small"
            style={{ minWidth: "100px", margin: "5px 10px 5px 5px" }}
            id="altura"
            label="Altura"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.altura}
          ></TextField>
        </Paper>
        <Paper elevation={3} style={{ height: "382px", marginTop: "3px" }}>
          <div
            style={{
              margin: "10px",
              borderRadius: "4px",
              border: " 1px solid rgba(224, 224, 224, 1) ",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Alguna vez le ha diagnosticado su médico un problema en el
                    corazón, recomendándole que solo haga deporte bajo
                    supervisión médica?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq1"
                      onClick={submit}
                      style={{ padding: "5px" }}
                      variant={
                        clientProfile.parametrosCliente?.parq1
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq1"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq1
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Siente dolor en el pecho al hacer ejercicio?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq2"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq2
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq2"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq2
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Ha tenido dolor en el pecho durante el último mes?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq3"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq3
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq3"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq3
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Se marea frecuentemente o ha perdido el conocimiento
                    demasiadas veces?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq4"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq4
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq4"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq4
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Toma medicación para la presión arterial u otro problema
                    circulatorio?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq5"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq5
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq5"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq5
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Tiene problemas en las articulaciones o algún dolor que se
                    agrava haciendo ejercicio?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq6"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq6
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq6"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq6
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ padding: "7px" }}>
                    ¿Cuenta con alguna otra recomendación médica que le
                    recomiende no hacer deporte con mucha intensidad?
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq7"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq7
                          ? "contained"
                          : null
                      }
                    >
                      Si
                    </Button>
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <Button
                      disabled={readOnly}
                      id="parametrosCliente.parq7"
                      onClick={submit}
                      variant={
                        clientProfile.parametrosCliente?.parq7
                          ? null
                          : "contained"
                      }
                    >
                      No
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Paper
          size="small"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "65px",
            marginTop: "3px",
          }}
          elevation={3}
        >
          <p style={{ marginLeft: "10px" }}>
            En caso de tener alguna alergia o intolerancia alimenticia indiquese
            a continuación:
          </p>
          <TextField
            disabled={readOnly}
            size="small"
            style={{ width: "500px", margin: "5px 10px 5px 5px" }}
            id="parametrosCliente.alergias"
            label="Alergias e intolerancias"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.parametrosCliente?.alergias}
          ></TextField>
        </Paper>
        <Paper
          size="small"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "65px",
            marginTop: "3px",
          }}
          elevation={3}
        >
          <p style={{ marginLeft: "10px" }}>
            En caso de tener alguna lesion, dolor o molestia indiquelo a
            continuación:
          </p>

          <TextField
            disabled={readOnly}
            size="small"
            style={{ width: "500px", margin: "5px 10px 5px 5px" }}
            id="parametrosCliente.lesiones"
            label="Lesiones o dolores"
            variant="outlined"
            onChange={changeData}
            value={clientProfile.parametrosCliente?.lesiones}
          ></TextField>
        </Paper>

        <Paper
          size="small"
          style={{
            height: "40px",
            marginTop: "3px",
            display: "flex",
            justifyContent: "flex-end",
          }}
          elevation={3}
        >
          {readOnly ? (
            <Button
              variant="contained"
              style={{ margin: "5px 10px 5px 5px" }}
              onClick={edit}
            >
              Editar
            </Button>
          ) : (
            <React.Fragment>
              <Button
                variant="contained"
                style={{ margin: "5px 0px 5px 5px" }}
                onClick={save}
              >
                Guardar
              </Button>
              <Button
                variant="contained"
                style={{ margin: "5px 10px 5px 5px" }}
                onClick={cancel}
              >
                Cancelar
              </Button>
            </React.Fragment>
          )}
        </Paper>
      </LocalizationProvider>

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
    </div>
  );
}
export default ClientProfile;
