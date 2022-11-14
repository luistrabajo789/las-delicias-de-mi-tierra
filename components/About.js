import Image from "next/image";
import React from "react";
import productImage from "public/Productopt.png";
import { useParallax } from 'react-scroll-parallax';

export default function About() {

  const item1 = useParallax({ speed: -5 });
  const item2 = useParallax({ speed: -5 });

  return (
    <section id="nostros" className="grid sm:grid-cols-12 px-6  lg:mx-10">

        <div  ref={item1.ref} className="sm:col-span-6 pt-10 sm:pt-4 lg:pt-10 sm:ml-5">
       <div className="lg:pl-20 lg:pt-10">
       <h3 className="color-primary text-3xl sm:text-3xl lg:text-4xl text-center sm:text-left font-bold pb-8 inUp">
            ¿Quiénes somos?
          </h3>
          <p className="sm:text-lg lg:text-xl text-gray-500 pb-5 text-center sm:text-left">
            La empresa dedicada a la producción y 
            comercialización de postres
            creados a base de frutas típicas o endémicas de la región (borojó,
            almirajó, piña, chontaduro y cacao) ubicada en Quibdó – Chocó
          </p>
       </div>
        </div>
        <div ref={item2.ref} className="sm:col-span-6 ">
          <Image className="pt-10 v" src={productImage} alt="Imagen producto" />
        </div>

    </section>
  );
}
