import React, { useEffect,useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../navbar';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import axios from 'axios';
import jwt from "jwt-decode";


function MuenuCliente(props) {
  const navigate = useNavigate();
  const [clientProfile, setClientProfile] = useState({
    nombre:'',
    apellidos: '',
    email: false,
    fechaNacimiento:'',
    username:''
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
    token =JSON.parse(token); 

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${token}` } }).then((response) => {
      setClientProfile({
        nombre:response.data.nombre,
        apellidos: response.data.apellidos,
        email: response.data.email,
        fechaNacimiento:response.data.fechaNacimiento,
        username: response.data.username
    })
    }, (error) => {
      console.log(error);
    });



  }, [])


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
              <Paper elevation={3} style={{ height: '100%', display:'flex', flexDirection:'column', alignItems: 'center'  }}>
                <Avatar
                  alt="Remy Sharp"
                  src= "/static/images/avatar/1.jpg" 
                  sx={{ width: 150, height: 150 }}
                  style={{marginTop:'30px'}}
                />
                <p>Bienvenido {clientProfile.nombre}</p>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'30px'}}>Perfil</Button>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'100px'}}>Dietas</Button>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'30px'}}>Entrenamientos</Button>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'30px'}}>Ejercicios</Button>


              </Paper>
            </Grid>

            <Grid item xs={12} md={10}>
              <Paper elevation={3} style={{ height: '100%' }}>

              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MuenuCliente;
