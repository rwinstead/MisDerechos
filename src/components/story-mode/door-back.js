import React from "react"
import { Link } from "gatsby"
import * as doorStyles from "./door-back.module.css"
import doorIcon from "../../assets/icons/doorBack.svg"

//const BackLink = props => (<Link to={props.to}>{props.children}</Link>);

export default function StoryBack(props){

    return (
        <div className={doorStyles.root}>
            <Link to = {props.link}>
                <img id={doorStyles.door} src={doorIcon} alt="Back" />
            </Link>
        </div>
    )


}