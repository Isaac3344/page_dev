import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Cotizador from "./pages/Cotizador";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/cotizador" element={<Cotizador />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}