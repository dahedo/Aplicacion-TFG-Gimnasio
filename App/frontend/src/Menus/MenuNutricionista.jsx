import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../navbar';  
import { Button,Avatar,Grid, Paper,Table, TableBody ,TableCell ,TableContainer,TableHead ,TableRow    } from '@mui/material';
import axios from 'axios';
import jwt from "jwt-decode";

function MuenuNutricionista(props) {

    const navigate = useNavigate();

    const [showClientsPanel, setShowClientsPanel] = useState(false);

    const [nutritionistProfile, setNutritionistProfile] = useState({
      nombre:'',
      apellidos: '',
      clientes:[]
  });


    useEffect(()=>{
        var loggedUser= window.localStorage.getItem('loggedUser');
        

        if(loggedUser == null){
          navigate('/login');
        }else{
          loggedUser=jwt(loggedUser) 
          if(loggedUser.rol === 'CLIENTE'){
            navigate('/menuCliente');
          }if(loggedUser.rol === 'ENTRENADOR'){
            navigate('/menuEntrenador');
          }
        }

            
        const url = `http://localhost:8080/nutricionista/${loggedUser.userId}`

        var token = window.localStorage.getItem('loggedUser');
        token =JSON.parse(token); 

        axios.get(url, { headers: { "Access-Control-Allow-Origin": "*", "Authorization": `Bearer ${token}` } }).then((response) => {
          setNutritionistProfile({
            nombre:response.data.nombre,
            apellidos: response.data.apellidos,
            clientes: response.data.clientes
        })
        }, (error) => {
          console.log(error);
        });


      
      },[])

      const submit = async (e) => {
        e.preventDefault();
      }

      const showClients = async (e) => {
        e.preventDefault();
        setShowClientsPanel(true)
      }

    return (
        <div className="App">
        <ResponsiveAppBar loginVisivility={false} logoutVisivility={true}/>
        <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100% - 60px)', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ height: '95%', width: '90%'}}>
            <Grid container spacing={2}  style={{ height: '100%'}}>
            <Grid item xs={12} md={2} style={{ height: '100%' }} >
              <Paper elevation={3} style={{ height: '100%', display:'flex', flexDirection:'column', alignItems: 'center'  }}>
                <Avatar
                  alt="Remy Sharp"
                  src= "/static/images/avatar/1.jpg" 
                  sx={{ width: 150, height: 150 }}
                  style={{marginTop:'30px'}}
                />
                <p>Bienvenido {nutritionistProfile.nombre}</p>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'30px'}}>Perfil</Button>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'100px'}}>Ver dietas</Button>
                <Button variant="contained" onClick={submit} style={{width:'90%', marginTop:'30px'}}>Crear dietas</Button>
                <Button variant="contained" onClick={showClients} style={{width:'90%', marginTop:'30px'}}>Mis clientes</Button>


              </Paper>
            </Grid>

            <Grid item xs={12} md={10}>
              <Paper elevation={3} style={{ height: '100%' }}>
                {showClientsPanel ? 
                 <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
                   <TableHead>
                     <TableRow>
                       <TableCell>Nombre</TableCell>
                       <TableCell align="right">Apellidos</TableCell>
                       <TableCell align="right">Email</TableCell> 
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {nutritionistProfile.clientes.map((row) => (
                       <TableRow key={row.nombre} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                         <TableCell component="th" scope="row">{row.nombre}</TableCell>
                         <TableCell align="right">{row.apellidos}</TableCell>
                         <TableCell align="right">{row.email}</TableCell> 
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </TableContainer>
                :
                null
                }
              </Paper>
            </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
}
export default MuenuNutricionista;