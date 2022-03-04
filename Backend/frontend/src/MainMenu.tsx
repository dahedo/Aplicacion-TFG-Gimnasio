import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './navbar';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

function MainMenu() {
    const navigate  = useNavigate();
  var categories:string[]; 
  categories = ["Ejercicios","Entrenamientos","Alimentacion","Seguimiento","..."] 

  function print(category: string){

    switch(category) { 
      case "Ejercicios": { 
        navigate('/ejercicios');
         break; 
      } 
      case "Entrenamientos": { 
        navigate('/entrenamientos');
         break; 
      } 
      case "Alimentacion": { 
        navigate('/alimentacion');
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   }  
  }


  return (
    <div className="App">
      <ResponsiveAppBar/>
        <Grid container className="main-menu-grid" >
          {categories.map((category, index) => (
            <Grid item className="main-menu-grid-item" xs={2} sm={4} md={4} key={index}>
              <Paper className="main-menu-grid-button" elevation={5} onClick={() => print(category)}>
                  <div style={{height:'80%'}}></div>
                  <div style={{height:'20%', display:'flex', justifyContent:'center'}}>{category}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default MainMenu;
