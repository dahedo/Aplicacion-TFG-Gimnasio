import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './navbar';

import { styled } from '@mui/material/styles';

function Entrenamientos() {

  var categories:string[]; 
  categories = ["Ejercicios","Entrenamientos","Alimentacion","Seguimiento","..."] 

  function print(){
    console.log("hola")
  }


  return (
    <div className="App">
   <h1 style={{color: 'white'}}>Entrenamientos</h1> 
    </div>
  );
}

export default Entrenamientos;