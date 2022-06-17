// component with the social icons
import React from "react"
import twitterLogo from "../images/TwitterIcon.png"
import facebookLogo from "../images/FacebookIcon.png"
import instagramLogo from "../images/InstagramIcon.png"
import gitHubLogo from "../images/GitHubIcon.png"

export default function Footer() {
    return (
        <footer>
            <img src={twitterLogo} alt="twitter logo"/>
            <img src={facebookLogo} alt="twitter logo"/>
            <img src={instagramLogo} alt="twitter logo"/>
            <img src={gitHubLogo} alt="twitter logo"/>
        </footer>
    )
}