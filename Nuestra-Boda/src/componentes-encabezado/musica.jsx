import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Musica() {
  const audioRef = useRef(null);
  const [mostrarModal, setMostrarModal] = useState(true);

  const activarMusica = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
      setMostrarModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const continuarSinMusica = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/musica.mp3"
        loop
      />

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/50
              backdrop-blur-md
              px-5
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                w-full
                max-w-md
                bg-white
                rounded-tl-[3rem]
                rounded-br-[3rem]
                rounded-tr-xl
                rounded-bl-xl
                shadow-[0_25px_80px_rgba(94,102,80,0.20)]
                border
                border-[#B89B5E]/30
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7D7B1]/20 via-transparent to-[#5E6650]/10" />

              <div className="relative z-10 p-10 text-center">
                <p
                  className="
                    uppercase
                    tracking-[0.28em]
                    text-[#B89B5E]
                    text-xs
                    sm:text-sm
                    font-semibold
                  "
                >
                  Bienvenidos
                </p>

                <h2
                  className="
                    font-playfair
                    text-4xl
                    sm:text-5xl
                    text-black
                    mt-5
                  "
                >
                  Nuestra Boda
                </h2>

                <div className="w-20 h-[2px] bg-[#B89B5E] mx-auto my-6" />


                <p
                  className="
                    text-[#5E6650]
                    leading-8
                    text-base
                    sm:text-lg
                  "
                >
                  Hemos preparado una experiencia especial para ti.
                  Te recomendamos activar la música para disfrutar
                  plenamente nuestra invitación.
                </p>

                <div className="flex flex-col gap-4 mt-8">
                  <button
                    onClick={activarMusica}
                    className="
                      bg-[#5E6650]
                      hover:bg-[#4f5744]
                      text-white
                      py-4
                      rounded-full
                      transition
                      duration-300
                      font-playfair
                      tracking-wide
                      border
                      border-[#B89B5E]/50
                    "
                  >
                    Activar Música
                  </button>

                  <button
                    onClick={continuarSinMusica}
                    className="
                      border
                      border-[#B89B5E]
                      text-[#B89B5E]
                      py-4
                      rounded-full
                      transition
                      duration-300
                      hover:bg-[#B89B5E]/10
                      font-playfair
                    "
                  >
                    Continuar Sin Música
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}