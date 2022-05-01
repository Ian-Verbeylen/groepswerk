import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Frigo from "./pages/Frigo";
import Winkellijst from "./pages/Winkellijst";
import Receptenboek from "./pages/Receptenboek";
import Profiel from "./pages/Profiel";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

import { FRIDGE } from "./testMockData";
import { INGREDIENTS } from "./testMockData";

function App() {
  const [fridge, setFridge] = useState({ FRIDGE });
  const [ingredients, setIngredients] = useState({ INGREDIENTS });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frigo" element={<Frigo fridge={fridge} />} />
          <Route path="winkellijst" element={<Winkellijst />} />
          <Route path="receptenboek" element={<Receptenboek />} />
          <Route path="profiel" element={<Profiel />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
