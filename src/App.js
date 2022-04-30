import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Frigo from "./pages/Frigo";
import Winkellijst from "./pages/Winkellijst";
import Receptenboek from "./pages/Receptenboek";
import Profiel from "./pages/Profiel";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frigo" element={<Frigo />} />
          <Route path="winkelijst" element={<Winkellijst />} />
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
