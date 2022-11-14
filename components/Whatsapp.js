import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import whatsapp from 'public/whatsapp.png'

export default function Whatsapp() {

  const wht = useRef();
  useEffect(() => {
    const header = document.getElementById('testimonios')
    const handleScroll = () => {
      const { y } = header.getBoundingClientRect();
      y >= 0
        ? wht.current.classList.add("hiddenUp")
        : wht.current.classList.remove("hiddenUp");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={wht} className='fixed w-20 h-20 bottom-32 sm:bottom-60 right-2 sm:w-24 sm:h-24 lg:w-32 lg:h-32 sm:right-0'>
        <Image src={whatsapp} alt=''/>
    </div>
  )
}
