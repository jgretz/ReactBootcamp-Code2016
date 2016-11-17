import React, { PropTypes } from 'react';

const ListItem = ({ item, index }) =>
(
  <li>
    <span className="title">Hero { index }: </span>
    <span>{ item }</span>
  </li>
);

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
};

export default ListItem;
