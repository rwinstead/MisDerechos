import React from "react"
import { Link } from "gatsby"
import * as SideNavStyles from "./side-nav.module.css"


export default function SideNavBar(props) {
    return(
        <div className={SideNavStyles.sidenav}>
            <Link to ="#step0">
            <div className={`${props.visibility.step0Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>0</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step1">
            <div className={`${props.visibility.step1Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>1</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step2">
            <div className={`${props.visibility.step2Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>2</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step3">
            <div className={`${props.visibility.step3Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>3</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step4">
            <div className={`${props.visibility.step4Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>4</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step5">
            <div className={`${props.visibility.step5Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>5</div>
            </Link>
            <div className={SideNavStyles.line}></div>
            <Link to ="#step6">
            <div className={`${props.visibility.step6Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>6</div>
            </Link>
        </div>
    )
}
