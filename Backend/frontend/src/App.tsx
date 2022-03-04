import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainMenu from './MainMenu';
import Ejercicios from './Ejercicios';
import Alimentacion from './Alimentacion';
import Entrenamientos from './Entrenamientos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainMenu/>}> </Route>
      <Route path="/ejercicios" element={<Ejercicios/>}> </Route>
      <Route path="/entrenamientos" element={<Entrenamientos/>}> </Route>
      <Route path="/alimentacion" element={<Alimentacion/>}> </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
