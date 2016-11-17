import React, { Component } from 'react';

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
        <ol>
          <li>{ `Hero 0: ${items[0]}` }</li>
          <li>{ `Hero 1: ${items[1]}` }</li>
          <li>{ `Hero 2: ${items[2]}` }</li>
        </ol>
      </div>
    );
  }
}
