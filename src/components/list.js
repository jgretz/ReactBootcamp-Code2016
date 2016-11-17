import _ from 'lodash';
import React, { PropTypes } from 'react';

import ListItem from './list_item';
import { name } from '../utils';

const List = ({ title, data }) => {
  const renderList = (list) => {  // eslint-disable-line
    const sorted = _.sortBy(list, x => name(x));
    return (
      <ul>
        { sorted.map(item => <ListItem key={item.id} item={item} />) }
      </ul>
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      { renderList(data) }
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default List;
