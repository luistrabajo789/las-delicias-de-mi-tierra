import About from "components/About";
import Contacto from "components/Contacto";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Productos from "components/Productos";
import Reconocimientos from "components/Reconocimientos";
import Testimonios from "components/Testimonios";
import Whatsapp from "components/Whatsapp";

 export default function Home() {
  return (
    <>
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
