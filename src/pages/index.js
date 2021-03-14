import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import * as homeStyles from "../styles/pages/home.module.css"
import heroText from "../assets/icons/homeHeroText.svg"
import downArrow from "../assets/icons/downArrow.svg"

//Example of multi class names:
//className={`${styles.description} ${styles.yellow}`}

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={homeStyles.heroContainer}>
        <img className={homeStyles.heroText} src={heroText} alt=""/>
        <p className={homeStyles.heroDescription}>
        <span className={homeStyles.bold}>Mi Casa Mis Derechos</span> ayuda los residentes de Atlanta comprender y poner en acción sus derechos de vivienda usando historias.
        </p>
        <Link to="#option2">
          <img className={homeStyles.downArrow} src={downArrow} alt ="Downward arrow" />
        </Link>
      </div>

      <div className={homeStyles.optionContainer} style={{backgroundColor: "#6A80D8"}}>
        <div className={homeStyles.optionContent}>
          <p className={homeStyles.sectionHeader} style={{color: "white"}}>Me están desalojando.</p>
          <p className={homeStyles.sectionBody} style={{color:"#D9E0FC"}}>Mi propietario ha tomado medidas para sacarme de mi casa.</p>
            <Link
              to="/story-select/"
              className={homeStyles.ctaButton}
              style={{backgroundColor: "#E7BE48", color: "#4A4A4A"}}>
              Aprender qué hacer
            </Link>
        </div>  
      </div>

      <div className={homeStyles.optionContainer} id="option2" style={{backgroundColor: "#E7BE48"}}>
        <div className={homeStyles.optionContent}>
          <p className={homeStyles.sectionHeader} style={{color: "#37488C"}}>
          Estoy preocupado por ser desalojado.
          </p>
          <p className={homeStyles.sectionBody} style={{color:"#404D7E"}}>
          No puedo pagar el rento o estoy teniendo problemas con el propietario.
          </p>
            <Link
              to="/story-select/"
              className={homeStyles.ctaButton}
              style={{backgroundColor: "#6A80D8", color: "white"}}>
              Aprender qué hacer
            </Link>
        </div>  
      </div>
    <Footer></Footer>
      
    </div>
  )
}
