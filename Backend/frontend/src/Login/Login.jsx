import React, { useState } from 'react';

import { Paper,Typography,TextField } from '@mui/material';
import ResponsiveAppBar from '../navbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import jwt from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Login = (props) => { 
    const navigate  = useNavigate();
    const [values, setValues] = useState({
        username:'',
        password: '',
        showPassword: false,
    });

 

    const submit = async (e) => {
        e.preventDefault();

        const username=values.username 
        const password=values.password

        
        const response = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
                        })
        });
        const content = await response.json();
        
        if(content.token !== undefined){
            const decoded = jwt(content.token);
            console.log(decoded.Rol)

            window.localStorage.setItem('loggedUser', JSON.stringify(decoded));
            props.setUserType(decoded.Rol)

            switch(decoded.Rol){
                case 'CLIENTE':
                    navigate('/menucliente'); 
                    break;
                case 'ENTRENADOR':
                    navigate('/menuEntrenador'); 
                    break;
                case 'NUTRICIONISTA':
                    navigate('/menuNutricionista'); 
                    break;
            }

        }

        


        

         
        
    }

    const handleChange = (prop) => (event) => {

            console.log()
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <div className="App">
        <ResponsiveAppBar loginVisivility={false} />
            <div style={{ height: 'calc(100% - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ width: '350px', height: '450px' }}>
                    <Stack spacing={2} direction="column" style={{ marginTop: '40px', marginLeft: '25px', marginRight: '25px' }}>
                        <Typography variant="h3" component="div" >¡Bienvenido de nuevo! </Typography>
                        <TextField label="Usuario" variant="outlined" onChange={ handleChange('username')} />

                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button variant="contained" onClick={submit}>Login</Button>
                    </Stack>
                </Paper>
            </div>
        </div>

    );
};

export default Login;
