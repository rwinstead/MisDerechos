import React from "react"
import * as navbarStyles from "./navbar.module.css"
import hamburger from "../assets/icons/hamburger.svg"
import logo from "../assets/icons/logo.svg"

export default function Navbar() {
  return (
    <div className={navbarStyles.container}>
      <div className={navbarStyles.menuButton}>
        <span className={navbarStyles.menuText}>Menú</span>    
        <img className={navbarStyles.hamburger} src={hamburger} alt="Menu"/>
      </div>
      <img className={navbarStyles.logo} src={logo} alt="Mi Casa Mis Derechos"/>
    </div>
  ) 
}