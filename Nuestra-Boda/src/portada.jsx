import React, { useRef, useState } from "react";

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-transparent
        md:bg-[#5E6650]
      "
    >
      {/* Imagen MOBILE - ocupa todo el espacio sin fondo */}
      <img
        src="/Manos.jpg"
        alt="Janeth y Josué"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[center_32%]
          md:hidden
        "
      />

      {/* Imagen DESKTOP - como la tienes, con fondo verde */}
      <img
        src="/Manos.jpg"
        alt="Janeth y Josué"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-contain
          object-center
          scale-110
          hidden
          md:block
        "
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-[#E7D7B1]
            text-xs
            sm:text-sm
            font-semibold
            mb-6
          "
        >
          Nuestra Boda
        </p>

        <div className="w-24 h-[2px] bg-[#B89B5E] mb-8" />

        <h1
          className="
            font-playfair
            text-white
            text-5xl
            sm:text-6xl
            md:text-8xl
            lg:text-[7rem]
            leading-none
            drop-shadow-2xl
          "
        >
          Janeth
        </h1>

        <p
          className="
            font-[DancingScript]
            text-[#B89B5E]
            text-5xl
            sm:text-6xl
            md:text-7xl
            my-2
            leading-none
          "
        >
          &
        </p>

        <h1
          className="
            font-playfair
            text-white
            text-5xl
            sm:text-6xl
            md:text-8xl
            lg:text-[7rem]
            leading-none
            drop-shadow-2xl
          "
        >
          Josué
        </h1>

        <div className="w-24 h-[2px] bg-[#B89B5E] mt-8 mb-8" />

        <p
          className="
            font-playfair
            text-[#F8F5EF]
            text-lg
            sm:text-xl
            md:text-2xl
            tracking-[0.25em]
          "
        >
          09 · 08 · 2026
        </p>
      </div>

      <audio ref={audioRef} src="/musica.mp3" loop />
    </section>
  );
}