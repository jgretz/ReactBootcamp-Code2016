import React, { Component, PropTypes } from 'react';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Day 1</h1>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
