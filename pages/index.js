/* eslint-disable @next/next/no-title-in-document-head */
import About from "components/About";
import Contacto from "components/Contacto";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Productos from "components/Productos";
import Reconocimientos from "components/Reconocimientos";
import Testimonios from "components/Testimonios";
import Whatsapp from "components/Whatsapp";
 
import Head from 'next/head'

 export default function Home() {
  return (
    <>
 <Head>
        <title>Las delicias de mi tierra</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Navbar/> 
    <Header/>
    <About/>
    <Productos/>
    <Reconocimientos/>
    <Testimonios/>
    <Contacto/>
    <Footer/>
    <Whatsapp/>
    </>
  )
}
