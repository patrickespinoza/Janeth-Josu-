import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado || !asistencia) {
      setError("Completa tu nombre y confirma asistencia");
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      nombre: nombreInvitado,
      asistencia,
      invitados,
      mensaje: mensajeInvitado,
    };

    try {
  const body = new URLSearchParams();

  body.append("nombre", nombreInvitado);
  body.append("asistencia", asistencia);
  body.append("invitados", invitados);
  body.append("mensaje", mensajeInvitado);

  await fetch(
    "https://script.google.com/macros/s/AKfycbxtOvRoLUHrr5G8sJB2_-8iDImNf0oRRE9tepGykUXUyezISDQYLc8rIor5AQiWU6Tu/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: body,
    }
  );

  setEnviado(true);
  setNombreInvitado("");
  setMensajeInvitado("");
  setAsistencia("");
  setInvitados("");

  setTimeout(() => {
    setEnviado(false);
  }, 3000);

} catch (err) {
  console.error(err);
  setError("Hubo un error al enviar");
} finally {
  setLoading(false);
}
  };

  return (
    <section className="w-full bg-[#F8F5EF] py-20 px-5 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          w-full
          max-w-2xl
          bg-white
          rounded-tl-[4rem]
          sm:rounded-tl-[5rem]
          rounded-br-[4rem]
          sm:rounded-br-[5rem]
          rounded-tr-2xl
          rounded-bl-2xl
          shadow-[0_25px_80px_rgba(94,102,80,0.18)]
          border
          border-[#B89B5E]/25
          px-7
          py-16
          sm:px-12
          text-center
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7D7B1]/25 via-transparent to-[#5E6650]/10 pointer-events-none" />

        <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-[#B89B5E]/50" />
        <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-[#B89B5E]/50" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <p className="uppercase tracking-[0.28em] text-[#B89B5E] text-xs sm:text-sm font-semibold">
            Confirma tu asistencia
          </p>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-black leading-tight">
            RSVP
          </h1>

          <div className="w-24 h-[2px] bg-[#B89B5E]" />

          <p className="max-w-md text-[#5E6650] text-base sm:text-lg leading-8">
            Será un honor contar contigo en este día tan especial. Por favor,
            confirma tu asistencia.
          </p>

          <div className="w-full max-w-sm mt-5 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre y apellido"
              value={nombreInvitado}
              onChange={(e) => setNombreInvitado(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-[#F8F5EF]
                border
                border-[#B89B5E]/30
                text-[#5E6650]
                placeholder:text-[#5E6650]/60
                font-playfair
                outline-none
                focus:ring-2
                focus:ring-[#B89B5E]/40
              "
            />

            <div className="flex flex-col gap-3 text-left">
              <label className="flex items-center gap-3 cursor-pointer bg-[#F8F5EF] border border-[#B89B5E]/25 rounded-2xl p-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                    asistencia === "Sí asistiré"
                      ? "border-[#B89B5E]"
                      : "border-[#5E6650]/40"
                  }`}
                >
                  {asistencia === "Sí asistiré" && (
                    <div className="w-2.5 h-2.5 bg-[#B89B5E] rounded-full" />
                  )}
                </div>

                <span className="text-[#5E6650] font-playfair">
                  Sí asistiré
                </span>

                <input
                  type="radio"
                  name="asistencia"
                  value="Sí asistiré"
                  onChange={() => setAsistencia("Sí asistiré")}
                  className="hidden"
                />
              </label>

              <label className="flex items-center gap-3 cursor-pointer bg-[#F8F5EF] border border-[#B89B5E]/25 rounded-2xl p-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                    asistencia === "No podré asistir"
                      ? "border-[#B89B5E]"
                      : "border-[#5E6650]/40"
                  }`}
                >
                  {asistencia === "No podré asistir" && (
                    <div className="w-2.5 h-2.5 bg-[#B89B5E] rounded-full" />
                  )}
                </div>

                <span className="text-[#5E6650] font-playfair">
                  No podré asistir
                </span>

                <input
                  type="radio"
                  name="asistencia"
                  value="No podré asistir"
                  onChange={() => setAsistencia("No podré asistir")}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="number"
              min="1"
              value={invitados}
              onChange={(e) => setInvitados(Number(e.target.value))}
              className="
                w-full
                p-4
                rounded-2xl
                bg-[#F8F5EF]
                border
                border-[#B89B5E]/30
                text-[#5E6650]
                text-center
                font-playfair
                outline-none
                focus:ring-2
                focus:ring-[#B89B5E]/40
              "
            />

            <textarea
              placeholder="Mensaje para los novios (opcional)"
              value={mensajeInvitado}
              onChange={(e) => setMensajeInvitado(e.target.value)}
              rows="4"
              className="
                w-full
                p-4
                rounded-2xl
                bg-[#F8F5EF]
                border
                border-[#B89B5E]/30
                text-[#5E6650]
                placeholder:text-[#5E6650]/60
                font-playfair
                outline-none
                resize-none
                focus:ring-2
                focus:ring-[#B89B5E]/40
              "
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm font-playfair"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {enviado && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[#5E6650] text-sm font-playfair"
              >
                Confirmación enviada correctamente
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={enviarConfirmacion}
            disabled={loading}
            className={`mt-3 px-10 py-4 rounded-full shadow-lg transition duration-300 text-white flex items-center justify-center gap-2 font-playfair tracking-wide ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5E6650] hover:bg-[#4f5744] border border-[#B89B5E]/50 hover:scale-105"
            }`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar confirmación"
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;