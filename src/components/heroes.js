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

  renderInput() {
    return (
      <div>
        <input /><button>Add</button>
      </div>
    );
  }

  renderList(items) {
    return (
      <ol>
        { items.map((item, index) => this.renderItem(item, index)) }
      </ol>
    );
  }

  renderItem(item, index) {
    return (
      <li key={index}>
        <span className="title">Hero { index }: </span>
        <span>{ item }</span>
      </li>
    );
  }


  render() {
    const { items } = this;

    return (
      <div>
        <h2>Heroes</h2>
        { this.renderInput() }
        { this.renderList(items) }
      </div>
    );
  }
}
