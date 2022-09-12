import React from 'react'
import dp from "../Images/dp.jpg"

export default function Header() {
    return(
        <div className="div-header">
            <img src={dp} alt="DP" className="dp"/>
            <div className="div-headInfo">
                <h2>JoyBoy</h2>
                <h4>King Of The Pirates</h4>
                <h6>One Piece</h6>
            </div>
            <button className="butJoin">Join Crew</button>
        </div>
    )
}