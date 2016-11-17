import React, { PropTypes } from 'react';
import ListItem from './list_item';

const List = ({ items }) =>
(
  <ol>
    { items.map((item, index) => <ListItem key={index} item={item} index={index} />) }
  </ol>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
