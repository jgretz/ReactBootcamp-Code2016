import React, { Component } from 'react';
import List from './list';
import ItemInput from './item_input';

export default class Heroes extends Component {
  constructor(props) {
    super(props);

    this.items = [
      'Wolverine',
      'Storm',
      'Wonderboy'
    ];
  }

  render() {
    const { items } = this;

    return (
      <div>
        <h2>Heroes</h2>
        <ItemInput />
        <List items={items} />
      </div>
    );
  }
}
