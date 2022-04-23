import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './navbar';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import axios from 'axios';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

function Ejercicios() {


  const [getData, setGetData] = React.useState<any[]>([]);
  
    //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  
const baseURL = "http://localhost:8080/ejercicios/find-all";

    React.useEffect(() => {

      console.log("antes")

      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setGetData(response.data);
      });
    }, []);

  return (
    <div className="App">
   <h1 style={{color: 'white'}}>Ejercicios</h1> 
   <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Grupo Muscular </TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Otra información</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          { getData.map((row) => (
            <TableRow
              key={row.nombreEjercicio} 
            >
              <TableCell>{row.nombreEjercicio}</TableCell>
              <TableCell>{row.grupoMuscular}</TableCell> 
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>{row.otraInfo}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Ejercicios;
