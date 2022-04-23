import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MuenuCliente from './Menus/MuenuCliente';
import Ejercicios from './Ejercicios';
import Alimentacion from './Alimentacion';
import Entrenamientos from './Entrenamientos';
import Login from './Login/Login';
import LandingPage from './LandingPage';
import MuenuEntrenador from './Menus/MenuEntrenador';
import MuenuNutricionista from './Menus/MenuNutricionista';

function App() {
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/menuCliente" element={<MuenuCliente  userType={userType} />}> </Route>
        <Route path="/menuEntrenador" element={<MuenuEntrenador userType={userType} />}> </Route>
        <Route path="/menuNutricionista" element={<MuenuNutricionista  userType={userType} />}> </Route>

        <Route path="/ejercicios" element={<Ejercicios />}> </Route>
        <Route path="/entrenamientos" element={<Entrenamientos />}> </Route>
        <Route path="/alimentacion" element={<Alimentacion />}> </Route>
        <Route path="/login" element={<Login setName={setName} setUserType={setUserType}/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
