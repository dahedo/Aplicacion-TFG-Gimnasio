import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainMenu from './MainMenu';
import Ejercicios from './Ejercicios';
import Alimentacion from './Alimentacion';
import Entrenamientos from './Entrenamientos';
import Login from './Login';
import LandingPage from './LandingPage';

function App() {
  const [name, setName] = useState('');

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}> </Route>
      <Route path="/main-menu" element={<MainMenu/>}> </Route>
      <Route path="/ejercicios" element={<Ejercicios/>}> </Route>
      <Route path="/entrenamientos" element={<Entrenamientos/>}> </Route>
      <Route path="/alimentacion" element={<Alimentacion/>}> </Route>
      <Route path="/login" element={ <Login setName={setName}/>}> </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
