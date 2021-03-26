import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import * as ResourceStyles from "../styles/pages/resources.module.css"
import ResourceItem from "../components/resource-item"

export default function Resources() {
    return (
        <main>
            <Navbar/>
            <ResourceItem 
                title = "Welcoming Atlanta"
                phoneDisplay = "(404) 521-0790"
                phoneContact = "(contacto: Pedro Pimentel)"
                phoneLink = "404-521-0790"
                hours = "lunes a jueves de 9am a 1pm"
                URL = "welcomingatlanta.com"
                speaksSpanish = "Se habla español"
                description = "Welcoming Atlanta conecta a los inmigrantes con servicios y recursos importantes, como alimentos, negociación y asistencia para presentar solicitudes."
                howToReach = "Llámenos o envíe un mensaje de texto a este número 555-0976 para que lo agreguen a nuestra lista de mensajes de texto."
                notes = "Podemos programar una cita individual para usted con un miembro de su comunidad para responder preguntas o ayudarlo a hacer cualquier cosa."
                highlighted={true}
            />

            <Footer/>
        </main>
    )
}