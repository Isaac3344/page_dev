import { Link, NavLink } from "react-router-dom";
import { MessageCircle, Star } from "lucide-react";

export default function Navbar() {
  const whatsappNumber = "593999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, quiero información sobre una página web."
  )}`;

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-300"
      : "text-slate-300 transition hover:text-white";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-400/10 p-2 text-cyan-300">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight text-white">WEBPRO</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavLink to="/" className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/planes" className={linkClass}>
            Planes
          </NavLink>
          <NavLink to="/cotizador" className={linkClass}>
            Cotizador
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
        >
          <MessageCircle className="h-4 w-4 text-cyan-300" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}