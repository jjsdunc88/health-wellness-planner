import React from "react";
import { NavContainer, NavButton } from "../styled-components/Nav-Style";
import Auth from '../utils/auth';

function Nav(props) {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        props.setLoggedIn(false);
    };
    return (
        <div>
            {props.loggedIn ? (
                <>
                    <NavContainer>
                        <NavButton href="/nutrition">Nutrition Page</NavButton>
                        <button onClick={logout} style={{
                            display: 'block',
                            borderRadius: '10px',
                            backgroundColor: 'lightgray',
                            padding: '7px 10px',
                            marginRight: '10px',
                            fontFamily: 'Russo One, sans-serif',
                            fontSize: '18px',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            border: 'none',
                            cursor: 'pointer',
                            transform: 'scale(1)',
                        }}>Logout</button>
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
}

export default Nav;
