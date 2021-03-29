import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import * as SelectStyles from "../styles/pages/story-select.module.css"

import rightArrow from "../assets/icons/shortRightArrow.svg"

export default function StorySelect() {
    return (
        <main>
            <Navbar/>
            <section className={SelectStyles.pageContainer}>
                <div id={SelectStyles.headerText}>
                    Selecciona una historia.
                </div>

                <div className={SelectStyles.storyBox}>
                    <div id ={SelectStyles.storyImage}/>
                    <div className={SelectStyles.storyTitle}>
                        Cuando recibe un aviso de desalojo
                    </div>

                    <div className={SelectStyles.storyDescription}>
                        En esta historia, aprenderá como responder cuando reciba un aviso de desalojo durante el COVID-19.
                    </div>
                    
                        <div id={SelectStyles.readButtonContainer}>

                            <Link
                                to="/story-eviction-overview/"
                                style={{ textDecoration: 'none'}}
                                id ={SelectStyles.readButton}
                            >
                                <div>
                                    Leer más
                                    <img 
                                        id={SelectStyles.arrow}
                                        src={rightArrow}
                                        alt="Arrow for go to next section"
                                    />
                                </div>
                            </Link>
                            
                        </div>
                    
                    </div>
                <div id={SelectStyles.footerSpacer}/>
            </section>
            <Footer/>
        </main>
    )
}