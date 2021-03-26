import React from "react"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import * as ResourceStyles from "../styles/pages/resources.module.css"
import { ResourceItem, CategoryItem } from "../components/resource-item"
import { Link as ScrollLink} from "react-scroll"

export default function Resources() {
    return (
        <main>
            <Navbar/>
            
            <div id={ResourceStyles.pageTitle}>
                Recursos en Atlanta
            </div>
            <div id={ResourceStyles.pageDescription}>
                Encuentre recursos locales para sus problemas de vivienda. Puede encontrar grupos de ayuda legal para pedir ayuda y qué programas de asistencia para el alquiler están disponibles.
            </div>

            <section id={ResourceStyles.categoriesContainer}>
                <div id={ResourceStyles.categoriesContent}>
                    <span id={ResourceStyles.categoriesHeader}>Categorias</span>

                    <ScrollLink
                        activeClass="active"
                        to="Welcoming Atlanta"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                    <div className={ResourceStyles.categoryLinkContainer}>
                        <span id={ResourceStyles.bullet}/>
                        <span id={ResourceStyles.categoryLink}>Welcoming Atlanta</span>
                    </div>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="Ayuda legal"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                    <div className={ResourceStyles.categoryLinkContainer}>
                        <span id={ResourceStyles.bullet}/>
                        <span id={ResourceStyles.categoryLink}>Ayuda legal</span>
                    </div>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="Asistencia financiera"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                    <div className={ResourceStyles.categoryLinkContainer}>
                        <span id={ResourceStyles.bullet}/>
                        <span id={ResourceStyles.categoryLink}>Asistencia financiera</span>
                    </div>
                    </ScrollLink>

                    <div id={ResourceStyles.categoriesSpacer}/>
                </div>
            </section>

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

            <CategoryItem
                title="Ayuda legal"
                description="Por asistencia con cuestiones de vivienda, benefits, trabajo, violencia doméstica, inmigracíon, custodia, discriminacíon, y otro cuestiones."
            />

            <ResourceItem
                title = "Fundación de Abogados Voluntarios de Atlanta (AVLF)"
                phoneDisplay = "(404) 521-0790"
                phoneContact = ""
                phoneLink = "404-521-0790"
                hours = "lunes a jueves de 9am a 1pm"
                URL = "avlf.org/issues/evicitions"
                speaksSpanish = "Se habla español"
                description = "Le brindarán asesoramiento legal y pueden tener un abogado voluntario para que lo represente. Manejan casos en los que el inquilino tiene una disputa con un propietario privado."
                howToReach = "Llámelos durante su horario de atención y pida hablar con un abogado que hable español."
                notes = "Llámelos tan pronto como sabe que tiene problemas con su vivienda porque puede llevar tiempo comunicarse con un abogado. Cuando llame, dígales que Welcoming Atlanta lo recomendó."
                highlighted={false}
            />

            <ResourceItem
                title = "Sociedad de Ayuda Legal de Atlanta (ALAS)"
                phoneDisplay = "(404) 377-5381"
                phoneContact = ""
                phoneLink = "404-377-5381"
                hours = "lunes a jueves de 9am a 12pm"
                URL = "atlantalegalaid.org/get-help/"
                speaksSpanish = "Se habla español"
                description = "Representan a cada inquilino que cumpla con sus requisitos de ingresos un asesoramiento legal detallado."
                howToReach = "Llámelos durante su horario de atención y pida hablar con un abogado que hable español."
                notes = "Llámelos tan pronto como sabe que tiene problemas con su vivienda porque puede llevar tiempo comunicarse con un abogado. Cuando llame, dígales que Welcoming Atlanta lo recomendó."
                highlighted={false}
            />

            <CategoryItem
                title="Asistencia financiera"
                description="Por ayuda para pagar el alquiler, los servicios públicos y otros costos relacionados con la vivienda."
            />

            <ResourceItem
                title = "United Way"
                phoneDisplay = "(404) 527-7200 "
                phoneContact = ""
                phoneLink = "404-527-7200"
                hours = "lunes a jueves de 9am a 12pm"
                URL = "atlantalegalaid.org/get-help211online.unitedwayatlanta.org/"
                speaksSpanish = "Se habla español"
                description = "Descripción: Ofrecen asistencia de hasta $ 5,000 a través del Programa de Asistencia de Vivienda de Emergencia COVID-19 de Atlanta."
                howToReach = "Aplicar en linea."
                notes = "Si necesita ayuda para presentar la solicitud o prefiere hacerlo en papel, comuníquese con Welcoming Atlanta."
                highlighted={false}
            />

            <div id={ResourceStyles.footerSpace}/>
            <Footer/>
        </main>
    )
}