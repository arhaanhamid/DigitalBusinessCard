import React from 'react'
import fb from "../Images/fb.png"
import insta from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import github from "../Images/github.png"
import linkedin from "../Images/linkedin.png"

export default function Footer() {
    return(
        <div className="div-footer">
            <img src={fb} alt="fb"/>
            <img src={insta} alt="insta"/>
            <img src={twitter} alt="twitter"/>
            <img src={github} alt="github"/>
            <img src={linkedin} alt="linkedin"/>
        </div>
    )
}