import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <ul id='navBar'>
            <Link to="/nutrition">Nutrition Page</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </ul>
    );
}

export default Nav;