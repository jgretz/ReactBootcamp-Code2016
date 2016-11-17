import React, { PropTypes } from 'react';
import ListItem from './list_item';

const List = ({ items }) =>
(
  <ul>
    { items.map((item, index) => <ListItem key={index} item={item} index={index} />) }
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
