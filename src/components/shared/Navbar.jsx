import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle, Star, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "593997623522";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, quiero información sobre una página web."
  )}`;

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-300"
      : "text-slate-300 transition hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
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

        <div className="hidden md:block">
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

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/planes" className={linkClass} onClick={() => setOpen(false)}>
              Planes
            </NavLink>
            <NavLink to="/cotizador" className={linkClass} onClick={() => setOpen(false)}>
              Cotizador
            </NavLink>
            <NavLink to="/contacto" className={linkClass} onClick={() => setOpen(false)}>
              Contacto
            </NavLink>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400/20"
          >
            <MessageCircle className="h-4 w-4 text-cyan-300" />
            Hablemos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}