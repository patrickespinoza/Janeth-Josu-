import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import Regalos from "./componentes-encabezado/MesadeRegalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className=" overflow-hidden">

        <Celebracion
          titulo="Recepción"
          hora="18:30"
          lugar="Nueva Luna Eventos"
          direccion="Calle Tulipan 112, Miguel Alemán Valdés, 87030 Cdad. Victoria,Tamps"
          ubicacion="https://www.google.com/maps/place/Nueva+Luna+Eventos+(Sal%C3%B3n%2FJard%C3%ADn%2FAlberca)/@23.73188,-99.1692258,17z/data=!3m1!4b1!4m6!3m5!1s0x86795321c9ecde65:0x97618b0333e9f96!8m2!3d23.73188!4d-99.1692258!16s%2Fg%2F11bxks5btp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
        />

      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Regalos/>

      {/* CONFIRMACIÓN */}

      <Confirmacion/>

    </div>
  );
}