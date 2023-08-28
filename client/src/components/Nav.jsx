import React from "react";
import { NavContainer, NavButton } from "../styled-components/Nav-Style";
import Auth from '../utils/auth';

function Nav(props) {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                    <NavContainer>
                        <NavButton href="/nutrition">Nutrition Page</NavButton>
                        <button onClick={logout}> Logout </button>
                        <NavButton href="/signup">Signup</NavButton>
                    </NavContainer>
                </>
            ) : (
                <>
                    <NavContainer>
                        <NavButton href="/nutrition">Nutrition Page</NavButton>
                        <NavButton href="/login"> Login</NavButton>
                        <NavButton href="/signup">Signup</NavButton>
                    </NavContainer>

                </>
            )}
        </div>
    );
};

export default Nav;
