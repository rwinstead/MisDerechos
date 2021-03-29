import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import * as homeStyles from "../styles/pages/home.module.css"
import heroText from "../assets/icons/homeHeroText.svg"

//Example of multi class names:
//className={`${styles.description} ${styles.yellow}`}

export default function Home() {

  return (
      <main>
        <Navbar/>
        <section className={homeStyles.heroContainer}>
          <img className={homeStyles.heroText} src={heroText} alt=""/>
          <p className={homeStyles.heroDescription}>
          <span className={homeStyles.bold}>Mi Casa Mis Derechos</span> ayuda los residentes de Atlanta comprender y poner en acción sus derechos de vivienda usando historias.
          </p>
          <Link
                to="/story-select/"
                className={homeStyles.ctaButton}
                style={{backgroundColor: "#E7BE48", color: "#4A4A4A"}}>
                Ir a las historias
          </Link>
        </section>

        <section className={homeStyles.aboutThisContainer}>
          <div className={homeStyles.aboutThisContent}>
            <span className={homeStyles.aboutThisHeader} style={{color: "#262626"}}>¿Qué es esta pagina web?</span>
            <p className={homeStyles.aboutThisBody} style={{color:"#262626"}}>Esta página web es para educar a los inquilinos. Le mostramos historias de personas en situaciones difíciles que reclaman sus derechos contra el desalojo, sin importar el estado de su documentación.</p>
            <p className={homeStyles.aboutThisYellow}>Lea sus historias para ayudarle a comprender qué hacer cuando se enfrente a una situación similar.</p>
            <p className={homeStyles.aboutThisAffiliation}>*Mi Casa Mis Derechos se desarrolló en conjunto con estudiantes de maestría de Georgia Tech HCI y Welcoming Atlanta.</p>
          </div>  
        </section>

        <Footer/>
        
      </main>
    )
}
