import Image from "next/image";
import React from "react";

import rec2 from "public/rec2opt.png";
import rec from "public/recopt.png";
import bg3 from "public/bg3.png";
import bg4 from "public/bg4.png";

export default function Reconocimientos() {
  return (
    <section className="relative">

      <div className="absolute right-0 top-0 sm:w-52   lg:top-36 w-24 lg:w-72">
        <Image   src={bg3} alt="" />
      </div>
      <div className="absolute left-0 bottom-0 sm:w-52   lg:bottom-36 w-24  lg:w-72">
        <Image  src={bg4} alt="" />
      </div>
      <div
        id="reconocimientos"
        className="relative sm:pt-32 py-16 px-6 sm:mx-32 flex flex-col justify-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold color-primary text-center  sm:pb-2 ">
          Reconocimientos
        </h1>
        <div className="w-full grid place-content-center py-3">
          <div className="bg-color-secondary w-10 h-3"></div>
        </div>
        <h3 className="text-center text-lg md:text-xl  text-gray-500 pb-10 sm:pb-5">
          Cada día crecemos para tener lo mejor para ustedes
        </h3>
        <div className="grid grid-cols-12 sm:grid-cols-12 gap-5">
          <div className="col-span-6 flex sm:justify-end pt-3">
            <Image className="w-72" src={rec2} alt="rec" />
          </div>
          <div className="col-span-6 flex sm:justify-start pb-1">
            <Image className="w-72" src={rec} alt="rec" />
          </div>
        </div>
      </div>
    </section>
  );
}
