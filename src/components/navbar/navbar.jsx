import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
    return (
        <div className="navbar">
            <Link useref="/" className="navbar_buttonlink">Home</Link>
            <Link useref="/mision" className="navbar_buttonlink">mision</Link>
        </div>
    )
}

export default navbar;