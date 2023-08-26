import React from "react";
import { NavContainer, NavButton } from "../styled-components/Nav-Style";

function Nav(props) {
    return (
        <NavContainer>
            <NavButton href="/nutrition">Nutrition Page</NavButton>
            <NavButton href="/login">Login</NavButton>
            <NavButton href="/signup">Signup</NavButton>
        </NavContainer>
    );
}

export default Nav;
