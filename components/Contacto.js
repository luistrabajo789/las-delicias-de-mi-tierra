import Image from "next/image";
import React from "react";
import logo from "public/Logo2.png";
import facebook from "public/facebook.png";
import insta_icon from "public/insta_icon.png";
import youtube from "public/youtube.png";

export default function Contacto() {
  return (
    <section id="contacto" className="grid place-content-center sm:grid-cols-12 bg-color-secondary h-70 sm:h-60 py-16  sm:py:0">
      <div className="col-span-6 grid place-content-center ">
        <Image className=" w-64 pb-10 sm:w-80" src={logo} alt="" />
      </div>
      <div className="col-span-6 flex flex-col justify-center justify-items-center py-3">
        <h3 className="text-white text-3xl sm:text-4xl font-bold pb-3 text-center">¡Contactanos!</h3>
        <div className="flex justify-center gap-5  ">
          <Image className="w-12 h-10" src={facebook} alt="" />
          <Image className="w-12 h-10" src={insta_icon} alt="" />
          <Image className="w-12 h-10" src={youtube} alt="" />
        </div>
        <h3 className="text-center text-white py-5 text-xl font-semibold">(+57) 320 605 4112</h3>
      </div>
    </section>
  );
}
