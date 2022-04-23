import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../navbar';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

function MuenuCliente(props) {
  const navigate = useNavigate();
  var categories;
  categories = ["Ejercicios", "Entrenamientos", "Alimentacion", "Seguimiento", props.userType]


  useEffect(() => {
    var loggedUser = window.localStorage.getItem('loggedUser');

    if (loggedUser == null) {
      navigate('/login');
    } else {
      loggedUser = JSON.parse(loggedUser)

      if (loggedUser.Rol === 'ENTRENADOR') {
        navigate('/menuEntrenador');
      } if (loggedUser.Rol === 'NUTRICIONISTA') {
        navigate('/menuNutricionista');
      }
    }

  }, [])


  return (
    <div className="App">
      <ResponsiveAppBar loginVisivility={false} />
      <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100% - 60px)', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ height: '95%', width: '90%'}}>
          <Grid container spacing={2}  style={{ height: '100%'}}>
            <Grid item  xs={12} md={2} style={{ height: '100%' }} >
              <Paper elevation={3} style={{ height: '100%' }}>xs=4</Paper>
            </Grid>
            <Grid item xs={12} md={10}>
              <Paper elevation={3} style={{ height: '100%' }}>xs=8</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MuenuCliente;
