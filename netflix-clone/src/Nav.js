import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionBar = () => {
        window.scrollY > 100 ? handleShow(true) : handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionBar)
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_Netflix_Logo_Digital-Video-e1424532515143.png"
                    alt="" />
                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="" />
            </div>
        </div>
    )
}


export default Nav;