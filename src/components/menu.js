import React from 'react';
import { Link } from 'react-router';

const Menu = () =>
(
  <div>
    <Link to="/heroes">Heroes</Link>
    <Link to="/comics">Comics</Link>
    <Link to="/creators">Creators</Link>
    <Link to="/stories">Stories</Link>
  </div>
);

export default Menu;
