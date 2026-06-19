import React from "react";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <section className="w-full bg-[#5E6650] py-20 px-6 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center">

        {/* FECHA */}
        <div className="text-center mb-12">
          <p className="text-[#E7D7B1] tracking-[0.35em] uppercase text-sm sm:text-base font-semibold">
            {dia}
          </p>

          <h1 className="text-7xl sm:text-8xl font-playfair text-[#F7F4ED] leading-none mt-3 drop-shadow-lg">
            {fecha}
          </h1>

          <p className="text-[#E7D7B1] text-2xl sm:text-3xl tracking-[0.2em] mt-3">
            {mesAnio}
          </p>
        </div>

        {/* TARJETA */}
        <div
          className="
            relative
            bg-[#F7F4ED]
            w-full
            max-w-2xl
            mx-auto
            p-10
            sm:p-14

            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            border
            border-[#d8cfbf]

            rounded-tl-[4rem]
            rounded-br-[4rem]
            rounded-tr-[1rem]
            rounded-bl-[1rem]
          "
        >
          {/* Línea superior */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-[#B89B5E]" />

          {/* Esquinas decorativas */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#B89B5E]/40" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#B89B5E]/40" />

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-black tracking-wide">
              {titulo}
            </h2>

            <div className="w-20 h-[2px] mx-auto bg-[#B89B5E] mt-4" />
          </div>

          <div className="mt-10 flex flex-col items-center text-center gap-8">

            {/* Hora */}
            <div>
              <p className="text-[#B89B5E] uppercase tracking-[0.25em] text-sm">
                Hora
              </p>

              <p className="text-2xl md:text-3xl font-playfair text-[#5E6650] mt-3">
                {hora}
              </p>
            </div>

            {/* Lugar */}
            <div>
              <p className="text-[#B89B5E] uppercase tracking-[0.25em] text-sm">
                Lugar
              </p>

              <p className="text-2xl md:text-3xl font-cursiveDancing text-[#5E6650] mt-3">
                {lugar}
              </p>

              <p className="text-black/70 mt-4 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                {direccion}
              </p>
            </div>

            {/* Botón */}
            <a
              href={ubicacion}
              target="_blank"
              rel="noreferrer"
              className="
                mt-2
                bg-[#B89B5E]
                hover:bg-[#a88c52]
                hover:scale-105
                transition-all
                duration-300

                text-white
                px-10
                py-4
                rounded-full

                shadow-lg
                tracking-wide
              "
            >
              Ver Ubicación
            </a>
          </div>

          {/* Línea inferior */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-[#B89B5E]" />
        </div>
      </div>
    </section>
  );
};

export default Celebracion;