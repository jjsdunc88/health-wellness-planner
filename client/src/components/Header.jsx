import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Title } from '../styled-components/Header-Style';
import { StyledLink } from '../styled-components/Header-Style';
import Nav from './Nav';

function Header(props) {
  return (
    <HeaderContainer>
      <StyledLink as={Link} to="/">Catalyst Coach</StyledLink>
      <Nav setPage={props.setPage} />
    </HeaderContainer>
  );
}

export default Header;
