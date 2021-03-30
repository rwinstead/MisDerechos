import React from "react"
import { Link } from "gatsby"
import * as doorStyles from "./door-back.module.css"
import closeX from "../../assets/icons/closeX.svg"

//const BackLink = props => (<Link to={props.to}>{props.children}</Link>);

export default function StoryBack(props){

    return (
        <div>
            <Link to = {props.link}>
                <img id={doorStyles.door} src={closeX} alt="Back" />
            </Link>
        </div>
    )


}