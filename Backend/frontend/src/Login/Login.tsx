import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from "react-router-dom";
import { Paper } from '@mui/material';
import ResponsiveAppBar from '../navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Login = (props: { setName: (name: string) => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [salida, setSalida] = useState('');


    interface State {
        password: string;
        showPassword: boolean;
      }

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
      });


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log("login")
        const response = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        });

        const content = await response.json();
        setSalida(content.token)



        // setRedirect(true); 
        props.setName(content.name);
    }

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };


    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div style={{ height: '100vh' }}>
            <ResponsiveAppBar />
            <div style={{ height: 'calc(100% - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ width: '350px', height: '450px' }}>
                    <Stack spacing={2} direction="column" style={{ marginTop: '40px', marginLeft: '25px', marginRight: '25px' }}>
                        <Typography variant="h3" component="div" >¡Bienvenido de nuevo! </Typography>
                        <TextField label="Usuario" variant="outlined" />

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
                        <Button variant="contained">Login</Button>
                    </Stack>
                </Paper>
            </div>
        </div>

    );
};

export default Login;
