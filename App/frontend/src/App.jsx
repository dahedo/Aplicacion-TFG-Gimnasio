import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuenuCliente from "./Menus/Client/ClientMenu";
import Login from "./Login/Login";
import LandingPage from "./LandingPage";
import MuenuEntrenador from "./Menus/Trainer/TrainerMenu";
import NutritionistMenu from "./Menus/Nutritionist/NutritionistMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/menuCliente" element={<MuenuCliente />}></Route>
        <Route path="/menuEntrenador" element={<MuenuEntrenador />}></Route>
        <Route path="/menuNutricionista" element={<NutritionistMenu />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
