import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
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
          max-w-6xl
          w-full
          bg-white
          rounded-tl-[3.5rem]
          sm:rounded-tl-[5rem]
          rounded-br-[3.5rem]
          sm:rounded-br-[5rem]
          rounded-tr-2xl
          rounded-bl-2xl
          shadow-[0_25px_80px_rgba(94,102,80,0.18)]
          overflow-hidden
          grid
          grid-cols-1
          lg:grid-cols-2
          border
          border-[#B89B5E]/25
        "
      >
        <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-[#B89B5E]/50 z-20" />
        <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-[#B89B5E]/50 z-20" />

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            h-[340px]
            sm:h-[460px]
            md:h-[540px]
            lg:h-full
            min-h-[340px]
            overflow-hidden
          "
        >
          <img
  src="/dress-code2.png"
  alt="Vestimenta"
  className="
    w-full
    h-full
    object-contain
    object-center
  "
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-[#5E6650]/10" />

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-xs tracking-[0.35em] uppercase text-[#E8D8B5] mb-2">
              Dress Code
            </p>
          </div>
        </motion.div>

        {/* TEXTO */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
            py-16
            sm:px-12
            lg:px-16
            bg-gradient-to-br
            from-white
            via-[#F8F5EF]
            to-white
          "
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[11px]
              sm:text-sm
              tracking-[0.22em]
              text-[#B89B5E]
              font-semibold
              mb-4
            "
          >
            Código de Vestimenta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              font-playfair
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-black
              leading-tight
              mb-6
            "
          >
            Vestimenta
            <span className="block text-[#5E6650] italic font-light">
              Formal
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#B89B5E] mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="
              border
              border-[#B89B5E]/30
              bg-white/70
              rounded-3xl
              px-6
              py-7
              shadow-[0_15px_40px_rgba(184,155,94,0.12)]
              max-w-md
            "
          >
            <p className="text-[#5E6650] text-base sm:text-lg leading-8">
              Te pedimos acompañarnos con vestimenta formal Hombres y Mujeres para celebrar este
              día tan especial con elegancia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-8
              max-w-md
              bg-[#5E6650]
              text-white
              rounded-tl-[2rem]
              rounded-br-[2rem]
              rounded-tr-lg
              rounded-bl-lg
              px-6
              py-6
              shadow-[0_18px_45px_rgba(94,102,80,0.25)]
              border
              border-[#B89B5E]/40
            "
          >
            <p className="text-[#B89B5E] text-xs uppercase tracking-[0.25em] mb-3">
              Nota especial
            </p>

            <p className="text-sm sm:text-base leading-7">
              Adoramos a tus pequeños, sin embargo, este evento está destinado
              solo para adultos. ¡Esperamos tu comprensión!.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vestimenta;