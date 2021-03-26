import React from "react"
import { Link } from "gatsby"
import * as footerStyles from "./footer.module.css"
import watlLogo from "../assets/icons/watlLogo.svg"
import logoColor from "../assets/images/WatlColor.png"

export default function Footer (){
    return (
        <div className={footerStyles.footerContainer}>
            <nav>
                <Link
                to="/resources/"
                >
                Todos los Recursos
                </Link>

                <Link
                to="/story-select/"
                >
                Selección de historias
                </Link>

                <Link
                to="/about-us/"
                >
                Sobre esta página web
                </Link>

            </nav>
            <img className={footerStyles.logo} src={logoColor} alt="Welcoming Atlanta logo"/>
        </div>
    )
}