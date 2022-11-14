import React, { useState } from "react";
import LogoNav from "public/Logo1.png";
import Image from "next/image";
import Link from "next/link";
import menu from 'public/menu.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      aria-label="Site Header"
      className="fixed bg-white w-full z-50 top-0 shadow-md"
    >
      <div className=" max-w-screen-xl flex justify-center p-4">
        <div className="flex h-16 items-center justify-between">
          <span className="sr-only">Home</span>
          <Link href="#header" className="w-48 md:w-60 hover:border-none"><Image  src={LogoNav} alt="Logo" /></Link>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 sm:gap-3 lg:gap-6 xl:text-lg">
                <li>
                  <Link className="text-gray-500 transition" href="#nostros">
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition " href="#productos">
                    Nuestros Productos
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition "
                    href="#reconocimientos"
                  >
                    Reconocimientos
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition "
                    href="#testimonios"
                  >
                    Testimonios
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition " href="#contacto">
                    Contactanos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
            <Image onClick={()=>handleClick()} src={menu} alt='menu'/>
            </div>

          </div>
        </div>
      </div>
      <div className="block md:hidden">
              {
                isMenuOpen === true && (
                  <div className="fixed  w-screen h-80  p-10 shadow-xl bg-white">
                    
                    <ul className="flex flex-col justify-center text-lg text-center w-full gap-5">
                    <li>
                  <Link onClick={()=>handleClick()} className="text-gray-500  transition" href="#nostros">
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link onClick={()=>handleClick()} className="text-gray-500 transition " href="#productos">
                    Nuestros Productos
                  </Link>
                </li>

                <li>
                  <Link onClick={()=>handleClick()}
                    className="text-gray-500 transition "
                    href="#reconocimientos"
                  >
                    Reconocimientos
                  </Link>
                </li>

                <li>
                  <Link onClick={()=>handleClick()}
                    className="text-gray-500 transition "
                    href="#testimonios"
                  >
                    Testimonios
                  </Link>
                </li>

                <li>
                  <Link onClick={()=>handleClick()} className="text-gray-500 transition " href="#contacto">
                    Contactanos
                  </Link>
                </li>
                    </ul>
                  </div>
                )
              }
            </div>
    </div>
  );
}
