import React, { useState } from "react";

import { Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function ClientProfile(props) {
  const [clientProfile, setClientProfile] = useState(props.clientProfile);
  const [readOnly, setReadOnly] = useState(true);

  const submit = async (e) => {
    e.preventDefault();
    setClientProfile({
      ...clientProfile,
      [e.target.id]: !clientProfile[e.target.id],
    });
  };

  const cancel = async (e) => {
    e.preventDefault();
    setClientProfile(props.clientProfile);
    setReadOnly(true);
  };

  const edit = async (e) => {
    e.preventDefault();
    setReadOnly(!readOnly);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Paper elevation={3} style={{ height: "19%" }}>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "15px 15px 15px 15px" }}
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          defaultValue={props.clientProfile.nombre}
        >
          {" "}
        </TextField>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "15px 15px 15px 15px" }}
          id="outlined-basic"
          label="Apellidos"
          variant="outlined"
          value={props.clientProfile.apellidos}
        >
          {" "}
        </TextField>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "15px 15px 15px 15px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          defaultValue={props.clientProfile.email}
        ></TextField>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "15px 15px 15px 15px" }}
          id="outlined-basic"
          label="Edad"
          variant="outlined"
        >
          {" "}
        </TextField>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "0px 15px 15px 15px" }}
          id="outlined-basic"
          label="Peso"
          variant="outlined"
        >
          {" "}
        </TextField>
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ margin: "0px 15px 15px 15px" }}
          id="outlined-basic"
          label="Altura"
          variant="outlined"
        ></TextField>
      </Paper>
      <Paper elevation={3} style={{ height: "59%" }}>
        <div style={{ margin: "10px" }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  ¿Alguna vez le ha diagnosticado su médico un problema en el
                  corazón, recomendándole que solo haga deporte bajo supervisión
                  médica?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq1"
                    onClick={submit}
                    style={{ padding: "5px" }}
                    variant={clientProfile.parq1 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq1"
                    onClick={submit}
                    variant={clientProfile.parq1 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Siente dolor en el pecho al hacer ejercicio?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq2"
                    onClick={submit}
                    variant={clientProfile.parq2 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq2"
                    onClick={submit}
                    variant={clientProfile.parq2 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Ha tenido dolor en el pecho durante el último mes?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq3"
                    onClick={submit}
                    variant={clientProfile.parq3 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq3"
                    onClick={submit}
                    variant={clientProfile.parq3 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Se marea frecuentemente o ha perdido el conocimiento
                  demasiadas veces?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq4"
                    onClick={submit}
                    variant={clientProfile.parq4 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq4"
                    onClick={submit}
                    variant={clientProfile.parq4 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Toma medicación para la presión arterial u otro problema
                  circulatorio?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq5"
                    onClick={submit}
                    variant={clientProfile.parq5 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq5"
                    onClick={submit}
                    variant={clientProfile.parq5 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Tiene problemas en las articulaciones o algún dolor que se
                  agrava haciendo ejercicio?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq6"
                    onClick={submit}
                    variant={clientProfile.parq6 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq6"
                    onClick={submit}
                    variant={clientProfile.parq6 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  ¿Cuenta con alguna otra recomendación médica que le recomiende
                  no hacer deporte con mucha intensidad?
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq7"
                    onClick={submit}
                    variant={clientProfile.parq7 ? "contained" : null}
                  >
                    Si
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    disabled={readOnly}
                    id="parq7"
                    onClick={submit}
                    variant={clientProfile.parq7 ? null : "contained"}
                  >
                    No
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Paper>
      <Paper size="small" style={{ height: "10%" }} elevation={3}>
        En caso de tener alguna alergia o intolerancia alimenticia indiquese a
        continuación
        <TextField
          InputProps={{ readOnly: readOnly }}
          size="small"
          style={{ width: "500px", margin: "15px 15px 15px 15px" }}
          id="outlined-basic"
          label="Alergias e intolerancias"
          variant="outlined"
        >
          {" "}
        </TextField>
      </Paper>
      <Paper size="small" style={{ height: "5%" }} elevation={3}>
        {readOnly ? (
          <Button onClick={edit}>Edit</Button>
        ) : (
          <React.Fragment>
            <Button>Save</Button>
            <Button onClick={cancel}>Cancel</Button>
          </React.Fragment>
        )}
      </Paper>
    </div>
  );
}
export default ClientProfile;
