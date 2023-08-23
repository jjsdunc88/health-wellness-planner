import React from "react";

function Nav(props) {
    return (
        <ul id='navBar'>
            <button onClick={() => props.setUser('Fitness')}>Fitness</button>
            <button onClick={() => props.setUser('Login')}>Login</button>
            <button onClick={() => props.setUser('SignUp')}>Sign Up</button>
        </ul>
    );
}

export default Nav;