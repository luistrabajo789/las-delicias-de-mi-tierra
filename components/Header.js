import React, { useRef } from "react";
import { useParallax } from 'react-scroll-parallax';

export default function Header() {

  const paralax = useParallax({ speed: -7 });
 
  return (
    <section  id="header" className="grid place-content-center ">
      <div ref={paralax.ref} className="rounded-lg py-28 w-screen m bg-white/75 sm:bg-white/50 lg:bg-transparent text-center z-100">
        <h1 className="color-primary pt-16 sm:pt-10 fuenteWinter  text-7xl sm:text-6xl md:text-7xl lg:text-8xl ">
          ¡Endulzamos
        </h1>
        <div className="grid place-content-center">
        <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl px-3 italic pb-2 bg-color-secondary rounded-md text-white font-bold">
          tus momentos
        </div>
        </div>
        <h1 className="color-primary text-6xl fuenteWinter  sm:text-5xl md:text-6xl lg:text-7xl">
          más especiales!
        </h1>
      </div>
    </section>
  );
}
