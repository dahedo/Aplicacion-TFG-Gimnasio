import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../navbar';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import jwt from "jwt-decode";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function MuenuCliente(props) {
  const navigate = useNavigate();

  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showClientsPanel, setShowClientsPanel] = useState(false);
  const [showDietsPanel, setShowDietsPanel] = useState(false);
  const [createDietsPanel, setCreateDietsPanel] = useState(false);


  const [clientProfile, setClientProfile] = useState({
    nombre: '',
    apellidos: '',
    email: false,
    fechaNacimiento: '',
    username: '',
    parq1: false,
    parq2: false,
    parq3: false,
    parq4: false,
    parq5: false,
    parq6: false,
    parq7: false
  });




  var categories;
  categories = ["Ejercicios", "Entrenamientos", "Alimentacion", "Seguimiento", props.userType]


  useEffect(() => {
    var loggedUser = window.localStorage.getItem('loggedUser');

    if (loggedUser == null) {
      navigate('/login');
    } else {
      loggedUser = jwt(loggedUser)

      if (loggedUser.rol === 'ENTRENADOR') {
        navigate('/menuEntrenador');
      } if (loggedUser.rol === 'NUTRICIONISTA') {
        navigate('/menuNutricionista');
      }
    }

    const url = `http://localhost:8080/clientes/${loggedUser.userId}`

    var token = window.localStorage.getItem('loggedUser');
    token = JSON.parse(token);

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${token}` } }).then((response) => {

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
        parq7: response.data.parq7 ? response.data.parq7 : false

      })
    }, (error) => {
      console.log(error);
    });

  }, [])

  const showProfile = async (e) => {
    e.preventDefault();

    console.log(clientProfile)

    setShowProfilePanel(true)
    setShowClientsPanel(false)
    setShowDietsPanel(false)
    setCreateDietsPanel(false)
  }

  const submit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <ResponsiveAppBar loginVisivility={false} logoutVisivility={true} />
      <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100% - 60px)', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ height: '95%', width: '90%' }}>
          <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={12} md={2} style={{ height: '100%' }} >
              <Paper elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 150, height: 150 }}
                  style={{ marginTop: '30px' }}
                />
                <p>Bienvenido {clientProfile.nombre}</p>
                <Button variant="contained" onClick={showProfile} style={{ width: '90%', marginTop: '30px' }}>Perfil</Button>
                <Button variant="contained" onClick={submit} style={{ width: '90%', marginTop: '100px' }}>Dietas</Button>
                <Button variant="contained" onClick={submit} style={{ width: '90%', marginTop: '30px' }}>Entrenamientos</Button>
                <Button variant="contained" onClick={submit} style={{ width: '90%', marginTop: '30px' }}>Ejercicios</Button>


              </Paper>
            </Grid>

            <Grid item xs={12} md={10}>
              {showProfilePanel ?

                <React.Fragment>
                  <Paper elevation={3}>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Nombre" variant="outlined" defaultValue={clientProfile.nombre}> </TextField>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Apellidos" variant="outlined" defaultValue={clientProfile.apellidos}> </TextField>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Email" variant="outlined" defaultValue={clientProfile.email}></TextField>
                  </Paper>
                  <Paper style={{ marginTop: '15px' }} elevation={3}>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Edad" variant="outlined"> </TextField>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Peso" variant="outlined"> </TextField>
                    <TextField style={{ margin: '15px 15px 15px 15px' }} id="outlined-basic" label="Altura" variant="outlined"></TextField>
                  </Paper>
                  <Paper elevation={3}>
                    <Table>
                      <TableBody>
                        <TableRow style={{maxHeight:'30px !important'}}>
                          <TableCell>¿Alguna vez le ha diagnosticado su médico un problema en el corazón, recomendándole que solo haga deporte bajo supervisión médica?</TableCell>
                          <TableCell><Button variant={clientProfile.parq1 ? "contained" : null}  >Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq1 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>¿Siente dolor en el pecho al hacer ejercicio?</TableCell>
                          <TableCell><Button variant={clientProfile.parq2 ? "contained" : null} >Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq2 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>¿Ha tenido dolor en el pecho durante el último mes?</TableCell>
                          <TableCell><Button variant={clientProfile.parq3 ? "contained" : null}>Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq3 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>¿Se marea frecuentemente o ha perdido el conocimiento demasiadas veces?</TableCell>
                          <TableCell><Button variant={clientProfile.parq4 ? "contained" : null}>Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq4 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>¿Toma medicación para la presión arterial u otro problema circulatorio?</TableCell>
                          <TableCell><Button variant={clientProfile.parq5 ? "contained" : null}>Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq5 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>¿Tiene problemas en las articulaciones o algún dolor que se agrava haciendo ejercicio?</TableCell>
                          <TableCell><Button variant={clientProfile.parq6 ? "contained" : null}>Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq6 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell>¿Cuenta con alguna otra recomendación médica que le recomiende no hacer deporte con mucha intensidad?</TableCell>
                          <TableCell><Button variant={clientProfile.parq7 ? "contained" : null}>Si</Button></TableCell>
                          <TableCell><Button variant={clientProfile.parq7 ? null:"contained"}>No</Button></TableCell>
                        </TableRow>

                      </TableBody>
                    </Table>
  
                  </Paper>
                </React.Fragment>
                : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MuenuCliente;
