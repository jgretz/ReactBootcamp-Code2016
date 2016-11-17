import React, { PropTypes } from 'react';

const ListItem = ({ item, index }) =>
(
  <li>
    <span className="title">Hero { index }: </span>
    <span>{ item.name }</span>
  </li>
);

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};

export default ListItem;
