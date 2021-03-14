import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import DoorBack from "../components/story-mode/door-back"
import * as EvictionStoryStyles from "../styles/pages/eviction-story.module.css"

export default function EvictionStory(){
    return (
        <div>
            <DoorBack
                link = {'/'} //TODO add link to overview page when complete
            /> 
            <div id={EvictionStoryStyles.stepZero}>
                <div className={EvictionStoryStyles.stickyItems}>
                    <div className={EvictionStoryStyles.backgroundImage}></div>
                    <div className={EvictionStoryStyles.topGradient}></div>
                    <p className={EvictionStoryStyles.stepHeader}>Prólogo: Maria encuentra un aviso en su puerta</p>
                    <div className={EvictionStoryStyles.storyText}>
                    Son las seis y media de la tarde cuando María llega a casa y encuentra un papel pegado en la puerta.<br/><br/>

                    Es un aviso de desalojo en el que se le informa de que no ha pagado la renta de este mes. El aviso dice que si no paga el saldo restante en 5 días, el edificio emprenderá acciones legales contra ella.<br/><br/>

                    María temía que esto pasara. Hace apenas unas semanas, perdió su trabajo principal por culpa del COVID-19, y no pudo pagar toda la renta de este mes.<br/><br/>

                    Al principio, María se asusta al leer la carta. Le preocupa que su familia se vea obligada a abandonar su casa.<br/><br/>

                    Pero María tiene derechos, y existen medidas que puede tomar para protegerse.<br/><br/>
                    </div>
                    <div className={EvictionStoryStyles.bottomGradient}></div>
                </div>
            </div>    
        <div>heyu</div>
        <div>heiy</div>
        <div>
            hey<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
    )
}