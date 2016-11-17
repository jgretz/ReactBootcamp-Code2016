import React, { PropTypes } from 'react';
import { name } from '../utils';

const ListItem = ({ item }) =>
(
  <tr key={item.id}>
    <td>{name(item)}</td>
    <td>{item.description}</td>
  </tr>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
