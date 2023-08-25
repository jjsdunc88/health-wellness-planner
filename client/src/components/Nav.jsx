import React from "react";
import { Link } from "react-router-dom";


function Nav(props) {
    return (
        <ul id='navBar'>
            <Link to="/fitness" className="navBtn">Fitness</Link>
            <Link to="/login" className="navBtn">Login</Link>
            <Link to="/signup" className="navBtn">Signup</Link>
        </ul>
    );
}

export default Nav;