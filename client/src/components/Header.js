import React from "react";
import Nav from "./Nav";

function Header(props) {
    return (
        <header>
            <h1>Catalyst Coach</h1>
            <Nav setUser={props.setUser} />
        </header>
    );
}