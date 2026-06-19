import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section className="w-full bg-[#F8F5EF] py-20 px-5 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          relative
          w-full
          max-w-5xl
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
          sm:px-14
          lg:px-20
          text-center
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7D7B1]/25 via-transparent to-[#5E6650]/10 pointer-events-none" />

        <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-[#B89B5E]/50" />
        <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-[#B89B5E]/50" />

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.45em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.24em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[#B89B5E]
              tracking-[0.24em]
              text-xs
              sm:text-sm
              font-semibold
              mb-8
            "
          >
            Nuestra Boda
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black leading-none">
              Janeth
            </h1>

            <p className="font-[DancingScript] text-5xl sm:text-6xl md:text-7xl text-[#B89B5E] leading-none">
              &
            </p>

            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#5E6650] leading-none">
              Josué
            </h1>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.45 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#B89B5E] mx-auto mt-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            viewport={{ once: true }}
            className="
              mt-10
              text-2xl
              sm:text-3xl
              text-[#5E6650]
              font-[DancingScript]
              leading-relaxed
            "
          >
            Con la bendición de nuestros padres
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 mt-14">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="
                bg-[#F8F5EF]
                rounded-tl-[2.5rem]
                rounded-br-[2.5rem]
                rounded-tr-xl
                rounded-bl-xl
                p-7
                sm:p-9
                shadow-[0_18px_45px_rgba(184,155,94,0.12)]
                border
                border-[#B89B5E]/25
              "
            >
              <h2 className="text-[#B89B5E] uppercase tracking-[0.24em] text-xs sm:text-sm mb-7 font-semibold">
                Padres del Novio
              </h2>

              <p className="text-xl sm:text-2xl font-playfair text-black leading-snug">
                Alicia Palacios Zúñiga
              </p>

              <div className="w-12 h-[1px] bg-[#B89B5E]/60 mx-auto my-5" />

              <p className="text-xl sm:text-2xl font-playfair text-black leading-snug">
                Guadalupe Mejía Valadez
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="
                bg-[#5E6650]
                rounded-tl-[2.5rem]
                rounded-br-[2.5rem]
                rounded-tr-xl
                rounded-bl-xl
                p-7
                sm:p-9
                shadow-[0_18px_45px_rgba(94,102,80,0.22)]
                border
                border-[#B89B5E]/35
              "
            >
              <h2 className="text-[#B89B5E] uppercase tracking-[0.24em] text-xs sm:text-sm mb-7 font-semibold">
                Padres de la Novia
              </h2>

              <p className="text-xl sm:text-2xl font-playfair text-white leading-snug">
                Juan José Ramos Cedillo
              </p>

              <div className="w-12 h-[1px] bg-[#B89B5E]/70 mx-auto my-5" />

              <p className="text-xl sm:text-2xl font-playfair text-white leading-snug">
                Jannett López López
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;