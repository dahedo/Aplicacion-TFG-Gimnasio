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


  useEffect(()=>{
    var loggedUser= window.localStorage.getItem('loggedUser');
    
    if(loggedUser == null){
      navigate('/login');
    }else{
      loggedUser= JSON.parse(loggedUser)
 
      if(loggedUser.Rol === 'ENTRENADOR'){
        navigate('/menuEntrenador');
      }if(loggedUser.Rol === 'NUTRICIONISTA'){
        navigate('/menuNutricionista');
      }
    }
  
  },[])


  return (
    <div className="App">
      <ResponsiveAppBar loginVisivility={false} />
      <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100% - 60px)' }}>
        <Paper style={{ height: '100%',width:'50%' }}></Paper>
        <Paper style={{ height: '100%',width:'50%' }}></Paper>

      </div>
    </div>
  );
}

export default MuenuCliente;
