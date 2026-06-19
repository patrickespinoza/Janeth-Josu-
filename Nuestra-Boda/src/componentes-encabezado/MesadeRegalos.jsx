import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Copy } from "lucide-react";

// ✨ Animación
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const numeroCuenta = "4189140095166848";

  const copiarCuenta = () => {
    navigator.clipboard.writeText(numeroCuenta);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="
        relative
        w-full
        min-h-[620px]
        md:min-h-[680px]
        flex
        items-center
        justify-center
        px-6
        py-20
        bg-[#F8F5EF]
        overflow-hidden
      "
    >
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[#B89B5E]/50" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-[#B89B5E]/50" />

      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          flex
          flex-col
          items-center
          text-center
        "
      >
        <div className="mb-5 rounded-full border border-[#B89B5E]/50 p-4 bg-white/60 shadow-sm">
          <img
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            src="/regalo1.png"
            alt="Regalo"
          />
        </div>

        <p className="text-[#B89B5E] text-sm tracking-[0.35em] uppercase mb-3">
          Con amor
        </p>

        <h1
          className="
            font-playfair
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-semibold
            text-black
            mb-6
          "
        >
          Regalos
        </h1>

        <div className="w-20 h-[1px] bg-[#B89B5E] mb-8" />

        <p
          className="
            max-w-xl
            text-[#5E6650]
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            font-light
            mb-10
          "
        >
          Nuestro mejor regalo es tu compañía, pero si deseas obsequiarnos algo y no sabes què, agradeceremos que sea en efectivo. En la entrada de la fiesta encontrarás una cajita donde podras depositarlo, o bien tranferirlo
        </p>

        <button
          className="
            bg-[#5E6650]
            hover:bg-[#4f5744]
            text-white
            rounded-full
            px-10
            py-4
            min-w-[280px]
            text-base
            sm:text-lg
            tracking-wide
            shadow-lg
            transition
            duration-300
            border
            border-[#B89B5E]/60
          "
          onClick={() => setMostrarModal(true)}
        >
          Ver datos bancarios
        </button>
      </div>

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              bg-black/60
              backdrop-blur-md
              flex
              items-center
              justify-center
              z-50
              px-5
            "
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                relative
                w-full
                max-w-sm
                min-h-[280px]
                rounded-3xl
                p-6
                text-white
                overflow-hidden
                shadow-2xl
                border
                border-[#B89B5E]/50
              "
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, y: 80 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 80 }}
              transition={{ duration: 0.4 }}
              style={{
                background:
                  "linear-gradient(135deg, #5E6650 0%, #3f4637 55%, #B89B5E 120%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20" />

              <button
                className="absolute top-4 right-5 text-white/80 hover:text-white text-xl"
                onClick={() => setMostrarModal(false)}
              >
                ✕
              </button>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-7">
                  <h2 className="text-sm tracking-[0.3em] uppercase">
                    Banorte
                  </h2>
                  <span className="text-xs tracking-widest opacity-80">
                    Cuenta
                  </span>
                </div>

                <div className="w-12 h-8 bg-[#B89B5E] rounded-md mb-7 shadow-inner" />

                <p className="text-xl sm:text-2xl tracking-[0.18em] leading-relaxed">
                  4189 1400 9516 6848
                </p>

                <div className="mt-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-1">
                    Titular
                  </p>
                  <p className="text-sm sm:text-base tracking-wide">
                    Fernanda Janeth Ramos López
                  </p>
                </div>

                <div className="flex items-center justify-between mt-7">
                  <p className="text-xs text-white/60">
                    Toca el ícono para copiar
                  </p>

                  <button
                    onClick={copiarCuenta}
                    className="
                      p-3
                      rounded-full
                      bg-white/15
                      hover:bg-white/25
                      transition
                      border
                      border-white/20
                    "
                  >
                    <Copy size={18} />
                  </button>
                </div>

                {copiado && (
                  <p className="mt-4 text-center text-[#B89B5E] text-sm font-medium">
                    Cuenta copiada
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Regalos;