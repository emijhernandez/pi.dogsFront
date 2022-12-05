import React from "react";
import s from "./LandingPage.module.css";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";

function LandingPage() {
  return(
    <div>
      <header>
          <span className={s.titulo}>Raza de Perros</span>
      </header>
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>Conoce las distintas razas de nuestros mejores amigos haciendo click aquí.</h1>
          <Link to="/home" className={s.sub_titulo}><h3 className={s.boton}>Acceder</h3></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage;