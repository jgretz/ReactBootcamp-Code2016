import React, { Component } from 'react';
import autobind from 'class-autobind';

import List from './list';
import ItemInput from './item_input';

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      items: []
    };
  }

  addItem(item) {
    this.setState({ items: [ ...this.state.items, item ] });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h2>Heroes</h2>
        <ItemInput addItem={this.addItem} />
        <List items={items} />
      </div>
    );
  }
}
