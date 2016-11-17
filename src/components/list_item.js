import React, { PropTypes } from 'react';
import { name } from '../utils';

const ListItem = ({ item }) =>
(
  <li>
    <span className="title">{name(item)}</span>
    <br />
    <span>{item.description}</span>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
