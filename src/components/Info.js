// component with photo, name, buttons
import React from "react"
import mailIcon from "../images/Mail.png"
import liIcon from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info--container">
            <div className="info--profile-pic-cont">
            </div>
            <h3 className="info--name">Laura Smith</h3>
            <h4 className="info--job-title">Frontend Developer</h4>
            <h6 className="info--email">laurasmith.website</h6>
            <div className="info--btn-cont">
                <button className="info--btn-email">
                    <img src={mailIcon} alt="mail icon"/>
                    Email
                </button>
                <button className="info--btn-linkedin">
                    <img src={liIcon} alt="linkedIn icon"/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}