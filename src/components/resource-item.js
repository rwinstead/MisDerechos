import React from "react"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

import * as ResourceItemStyles from "./resource-item.module.css"
import telephoneIcon from "../assets/icons/phone_black.svg"
import clockIcon from "../assets/icons/clock_black.svg"
import internetIcon from "../assets/icons/internet_black.svg"
import starIcon from "../assets/icons/star.svg"


export function ResourceItem(props) {
    return(
        <main id={props.title} className={props.highlighted ? ResourceItemStyles.highlighted : ResourceItemStyles.nonHighlighted}>
            <div className={props.highlighted ? ResourceItemStyles.highlightedTitle : ResourceItemStyles.title}> {props.title}</div>
            <section className={ResourceItemStyles.contactBlock}>
                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.phone} src={telephoneIcon} alt="telephone icon"/>
                    <a id={ResourceItemStyles.phoneLink} href={"tel:"+props.phoneLink}>{props.phoneDisplay}</a>
                    <p>{props.phoneContact}</p>
                </div>

                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.clock} src={clockIcon} alt="clock icon"/>
                    <p>{props.hours}</p>
                </div>

                <div className={ResourceItemStyles.contactRow}>
                    <img id={ResourceItemStyles.internet} src={internetIcon} alt="internet icon"/>
                    <a id={ResourceItemStyles.URL} href={`http://` + props.URL} target="_blank" rel="noreferrer">{props.URL}</a>
                </div>
            </section>
            
            <section className={ResourceItemStyles.textBlock}>
                <div id={ResourceItemStyles.speaksSpanish}>{props.speaksSpanish}</div>
                <div>
                    <span className={ResourceItemStyles.bold}>
                    {"Que hacen: "}
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
                            <img src={starIcon} alt="star icon indicating an important note"></img>
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

export function CategoryItem(props) {
    return (
        <main id={props.title} className={ResourceItemStyles.categoryContainer}>
             <div className={ResourceItemStyles.categoryTitle}> {props.title}</div>
             <div className={ResourceItemStyles.categoryDescription}>
                 {props.description}
             </div>
        </main>
    )
}
