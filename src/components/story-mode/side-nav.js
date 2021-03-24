import React from "react"
import * as SideNavStyles from "./side-nav.module.css"
import { Link as ScrollLink} from "react-scroll"



export default function SideNavBar(props) {
    return(
        <div className={SideNavStyles.sidenav}>
            <ScrollLink
                activeClass="active"
                to="step0"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step0Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>0</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step1"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step1Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>1</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step2"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step2Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>2</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step3"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step3Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>3</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step4"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step4Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>4</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step5"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step5Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>5</div>
            </ScrollLink>
            <div className={SideNavStyles.line}></div>
            <ScrollLink
                activeClass="active"
                to="step6"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div className={`${props.visibility.step6Visible? SideNavStyles.circleFilled : SideNavStyles.circleEmpty} ${SideNavStyles.circle}`}>6</div>
            </ScrollLink>
        </div>
    )
}
