import React from "react"
import * as footerStyles from "./footer.module.css"
import watlLogo from "../assets/icons/watlLogo.svg"

export default function Footer (){
    return (
        <div className={footerStyles.footerContainer}>
            <img src={watlLogo} alt="Welcoming Atlanta logo"/>
        </div>
    )
}