import _ from 'lodash';
import React, { PropTypes } from 'react';

const ListItem = ({ item }) => {
  const noComics = _.omit(item, 'comics');
    const tags = [];

    _.forOwn(noComics, (value, key) => {
      tags.push((
        <div key={key}>
          <span>{key}: </span>
          <span>{value}</span>
        </div>
      ));
    });

    return (
      <li key={item.id}>
        { tags }
      </li>
    );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
