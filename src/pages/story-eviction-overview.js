import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import * as evictionOverviewStyles from "../styles/pages/story-eviction-overview.module.css"
import bookIcon from "../assets/icons/book.svg"
import startArrow from "../assets/icons/startArrow.svg"
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/800.css"

import thumbnail1 from "../assets/images/eviction-story-overview/thumbnail1.png"
import thumbnail2 from "../assets/images/eviction-story-overview/thumbnail2.png"
import thumbnail3 from "../assets/images/eviction-story-overview/thumbnail3.png"
import thumbnail4 from "../assets/images/eviction-story-overview/thumbnail4.png"
import thumbnail5 from "../assets/images/eviction-story-overview/thumbnail5.png"
import thumbnail6 from "../assets/images/eviction-story-overview/thumbnail6.png"


export default function StoryOverview() {
    return (
        <main>
            <Navbar/>
                <section className={evictionOverviewStyles.heroContainer}>
                    <div id={evictionOverviewStyles.heroText}>Cuando recibe un aviso de desalojo</div>
                    <div id={evictionOverviewStyles.readingTime}>
                        <img src={bookIcon} alt="book icon"/>16 min
                    </div>
                    <div id={evictionOverviewStyles.storyDescription}>Una mujer llamada María encuentra un aviso de desalojo en su puerta. Ver qué hace. </div>
                    <Link
                    to="/story-eviction/"
                    >
                        <div id={evictionOverviewStyles.startArrow}>
                            <img src={startArrow} alt="start story icon"/>
                        </div>
                    </Link>
                </section>

                <section id={evictionOverviewStyles.resourcesContainer}>
                    <div id={evictionOverviewStyles.resourcesHeader}>
                        Recursos usados en esta historia:
                    </div>

                    <div className={evictionOverviewStyles.resourceItemContainer}>
                        <span className={evictionOverviewStyles.resourceItem}>
                           <span className={evictionOverviewStyles.bullet}/>AVLF
                        </span>
                        <span className={evictionOverviewStyles.resourceDescription}>
                            (Servicios legales)
                        </span>
                    </div>


                    <div className={evictionOverviewStyles.resourceItemContainer}>
                        <span className={evictionOverviewStyles.resourceItem}>
                           <span className={evictionOverviewStyles.bullet}/>United Way
                        </span>
                        <span className={evictionOverviewStyles.resourceDescription}>
                            (Asistencia de alquiler)
                        </span>
                    </div>

                    <div className={evictionOverviewStyles.resourceItemContainer}>
                        <span className={evictionOverviewStyles.resourceItem}>
                           <span className={evictionOverviewStyles.bullet}/>Welcoming Atlanta
                        </span>
                        <span className={evictionOverviewStyles.resourceDescription}>
                            (Apoyo de communidad)
                        </span>
                    </div>
                </section>

                <section id={evictionOverviewStyles.stepsContainer}>
                    <div id={evictionOverviewStyles.stepHeader}>
                        <span>Los pasos en esta historia</span>
                        <p>Pinche en una imagen para navegar a esa parte de la historia.</p>
                    </div>

                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>1</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María se pone en contacto con abogados gratis a  AVLF.</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img src={thumbnail1} alt="Step 1 thumbnail"/>
                            </div>
                        </div>
                    </div>


                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>2</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María encuentra su contracto de alquiler y comprenda las condiciónes.</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img  src={thumbnail2} alt="Step 2 thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>3</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María explica su situación a la oficina de arrendamiento de su apartamento.</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img  src={thumbnail3} alt="Step 3 thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>4</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María presenta la moratoria de desalojos de los CDC.</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img  src={thumbnail4} alt="Step 4 thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>5</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María solicita la ayuda a la vivienda</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img  src={thumbnail5} alt="Step 5 thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className={evictionOverviewStyles.stepBox}>
                        <div className={evictionOverviewStyles.stepItem}>
                            <div className={evictionOverviewStyles.stepNumberContainer}>
                                <span className={evictionOverviewStyles.stepNumber}>6</span>
                            </div>
                            <div className={evictionOverviewStyles.stepTextContainer}>
                                <p>María hace un plan para pagar su renta.</p>
                            </div>
                            <div className={evictionOverviewStyles.stepThumbnail}>
                                <img  src={thumbnail6} alt="Step 6 thumbnail"/>
                            </div>
                        </div>
                    </div>

                </section>







            <Footer/>
        </main>
    )
}