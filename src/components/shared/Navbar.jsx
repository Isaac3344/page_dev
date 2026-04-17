import { NavLink, Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `text-sm transition ${isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-lg font-bold tracking-tight">
          SOLUCIONES WEB
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navClass}>Inicio</NavLink>
          <NavLink to="/planes" className={navClass}>Planes</NavLink>
          <NavLink to="/cotizador" className={navClass}>Cotizador</NavLink>
          <NavLink to="/contacto" className={navClass}>Contacto</NavLink>
        </nav>

        <Button to="/cotizador" variant="primary">Cotizar</Button>
      </div>
    </header>
  );
}