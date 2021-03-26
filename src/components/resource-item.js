import React from "react"
import { Link } from "gatsby"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import * as ResourceItemStyles from "./resource-item.module.css"
import telephoneIcon from "../assets/icons/phone_black.svg"
import clockIcon from "../assets/icons/clock_black.svg"
import internetIcon from "../assets/icons/internet_black.svg"
import starIcon from "../assets/icons/star.svg"


export default function(props) {
    return(
        <main id={props.highlighted ? ResourceItemStyles.highlighted : null}>
            <div className={ResourceItemStyles.title}> {props.title}</div>
            <section className={ResourceItemStyles.contactBlock}>
                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.phone} src={telephoneIcon} alt="telephone icon"/>
                    <a id={ResourceItemStyles.phoneLink} href={"tel:"+props.phoneLink}>{props.phoneDisplay}</a>
                    <p>{props.phoneContact}</p>
                </div>

                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.clock} src={clockIcon} alt="telephone icon"/>
                    <p>{props.hours}</p>
                </div>

                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.internet} src={internetIcon} alt="telephone icon"/>
                    <a id={ResourceItemStyles.URL} href={`http://` + props.URL} target="_blank">{props.URL}</a>
                </div>
            </section>
            
            <section className={ResourceItemStyles.textBlock}>
                <div id={ResourceItemStyles.speaksSpanish}>{props.speaksSpanish}</div>
                <div>
                    <span className={ResourceItemStyles.bold}>
                    {"Descripción: "}
                    </span>
                    {props.description}
                </div>

                <div>
                    <span className={ResourceItemStyles.bold}>
                    {"Cómo conectarse: "}
                    </span>
                    {props.howToReach}
                </div>
            </section>

            <section id={ props.highlighted ? ResourceItemStyles.notesHighlighted : ResourceItemStyles.notes}>
                <div id={ResourceItemStyles.noteContent}>
                    <div id={ResourceItemStyles.starContainer}>
                        <div>
                            <img src={starIcon}></img>
                        </div>
                    </div>
                    <div id={ResourceItemStyles.noteText}>
                        <span className={ResourceItemStyles.bold}>
                            {"Consejos: "}
                        </span>
                        {props.notes}
                    </div>
                </div>
            </section>

        </main>
    )

}
