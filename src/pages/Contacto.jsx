import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contacto() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_gofsr4j",
        "template_4joy0qf",
        formRef.current,
        "mcG0IG1Y9zw_lnB2q"
      );

      setMessage("Mensaje enviado correctamente.");
      formRef.current.reset();
    } catch (error) {
      console.error("ERROR EMAILJS:", error);
      setMessage("Hubo un error al enviar el mensaje. Intenta otra vez.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Contacto"
        title="Cuéntanos tu idea"
        text="Respondo rápido para ayudarte a elegir el mejor plan."
      />

      <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Tu correo"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <input
            type="text"
            name="user_whatsapp"
            placeholder="Tu WhatsApp"
            required
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Cuéntanos tu proyecto o idea..."
            required
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {sending ? "Enviando..." : "Enviar consulta"}
          </button>

          {message && <p className="mt-4 text-sm text-slate-300">{message}</p>}

          <p className="mt-4 text-center text-xs text-slate-400">
            Tus datos están 100% seguros. No compartimos tu información.
          </p>
        </form>
      </div>
    </section>
  );
}