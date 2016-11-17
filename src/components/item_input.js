import React, { Component, PropTypes } from 'react';
import autobind from 'class-autobind';

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      text: ''
    };
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
  }

  onAddClick() {
    this.props.addItem(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onAddClick}>Add</button>
      </div>
    );
  }
}

ItemInput.propTypes = {
  addItem: PropTypes.func.isRequired,
};
