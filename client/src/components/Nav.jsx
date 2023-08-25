import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <ul id='navBar'>
            <Link to="/fitness">Fitness</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </ul>
    );
}

export default Nav;