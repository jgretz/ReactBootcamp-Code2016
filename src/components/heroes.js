import React, { Component } from 'react';
import autobind from 'class-autobind';

import List from './list';

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      heroes: [
        {
          id: 0,
          name: 'Wolverine',
          description: 'A mutant known for his regenerative abilities',
          comics: {
            available: 300,
          }
        },
        {
          id: 1,
          name: 'Storm',
          description: 'A mutant known for her ability to control the weather',
          comics: {
            available: 200,
          }
        },
        {
          id: 2,
          name: 'Wonderboy',
          description: 'A rocker with the power to kill a yak with mind bullets',
          comics: {
            available: 1,
          }
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Heroes</h2>
        <List items={this.state.heroes} />
      </div>
    );
  }
}
