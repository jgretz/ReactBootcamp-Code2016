import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () =>
(
  <Nav bsStyle="pills">
    <LinkContainer to="/heroes">
      <NavItem>Heroes</NavItem>
    </LinkContainer>
    <LinkContainer to="/comics">
      <NavItem>Comics</NavItem>
    </LinkContainer>
    <LinkContainer to="/creators">
      <NavItem>Creators</NavItem>
    </LinkContainer>
    <LinkContainer to="/stories">
      <NavItem>Stories</NavItem>
    </LinkContainer>
  </Nav>
);

export default Menu;
