import React from "react";
import chontaduro from "public/chontaduro.png";
import piña from "public/pina.png";
import chocolate from "public/chocolate.png";
import Image from "next/image";
import { useParallax } from 'react-scroll-parallax';

export default function Productos() {

  const item1 = useParallax({ speed: -3 });

  return (
    <section id="productos" className="bg2 sm:py-28 pt-16 px-6  flex flex-col justify-center bg-gray-50">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold color-primary text-center pb-12  ">
        Nuestros Productos
      </h1>


      <div ref={item1.ref} className="grid sm:grid-cols-12 gap-6 m-auto sm:mx-10 lg:px-20">
        <div  className="sm:col-span-4 p-5  boxProduct">
          <h2 className="text-5xl lg:text-5xl  fuenteWinter color-primary text-center">
            Chontaduro
          </h2>
          <Image src={chontaduro} alt="" />
        </div>
        <div  className="sm:col-span-4 p-5 boxProduct">
          <h2 className="text-5xl   fuenteWinter color-primary text-center">Piña</h2>
          <Image src={piña} alt="" />
        </div>
        <div  className="sm:col-span-4 p-5  boxProduct">
          <h2 className="text-5xl  fuenteWinter color-primary text-center">
            Chocolate
          </h2>
          <Image src={chocolate} alt="" />
        </div>
      </div>
    </section>
  );
}
