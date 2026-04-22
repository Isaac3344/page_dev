import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

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
        text="Si todavía no tienes claro qué plan necesitas, escríbenos y te ayudamos a elegir la mejor opción."
        center
      />

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Tu correo"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <input
            type="text"
            name="user_whatsapp"
            placeholder="Tu WhatsApp"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Cuéntanos qué tipo de página necesitas"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <div className="flex flex-col gap-3">
            <Button variant="primary">
              {sending ? "Enviando..." : "Enviar consulta"}
            </Button>

            {message && (
              <p className="text-sm text-slate-300">{message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


