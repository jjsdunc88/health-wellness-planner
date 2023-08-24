import React from "react";

function Nav(props) {
    return (
        <ul id='navBar'>
            <button onClick={() => props.setPage('Fitness')}>Fitness</button>
            <button onClick={() => props.setPage('Login')}>Login</button>
            <button onClick={() => props.setPage('SignUp')}>Sign Up</button>
        </ul>
    );
}

export default Nav;