import React from "react";


export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="bg2 sm:py-24 w-full px-6 pt-10 grid place-content-center bg-gray-100"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl lg:pt-10 font-bold color-primary text-center  ">
        Clientes Felices
      </h1>
      <div className="w-full grid place-content-center py-3"><div className="bg-color-secondary w-10 h-3"></div></div>

      <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-0 lg:mx-5 xl:mx-16 sm:gap-1">
        <div className="relative col-span-4 flex flex-col sm:px-10 md:px-0 lg:px-10">
          <div className="bubble shadow-xl ">
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna nulla
              facilisi.
            </div>
            <div className="flex justify-end pt-5">
              <div className="text-6xl fuenteWinter color-secondary">❝</div>
            </div>
          </div>
          <div className="flex justify-end mr-3">
              <div className="text-2xl color-secondary font-bold">Juan perez</div>
            </div>
        </div>
        <div className="relative col-span-4 flex flex-col sm:px-10 md:px-0 lg:px-10">
          <div className="bubble shadow-xl ">
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna nulla
              facilisi.
            </div>
            <div className="flex justify-end pt-5">
              <div className="text-6xl fuenteWinter color-secondary ">❝</div>
            </div>
          </div>
          <div className="flex justify-end  mr-3">
              <div className="text-2xl color-secondary   font-bold">Maria Muñoz</div>
            </div>
        </div>
        <div className="relative col-span-4 flex flex-col sm:px-10 md:px-0 lg:px-10">
          <div className="bubble shadow-xl ">
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna nulla
              facilisi.
            </div>
            <div className="flex justify-end pt-5">
              <div className="text-6xl fuenteWinter color-secondary ">❝</div>
            </div>
          </div>
          <div className="flex justify-end mr-3">
              <div className="text-2xl color-secondary font-bold">Pedro Ruiz</div>
            </div>
        </div>
        <div className="col-span-4 flex justify-center "></div>
        <div className="col-span-4 flex justify-start "></div>
      </div>
    </section>
  );
}
