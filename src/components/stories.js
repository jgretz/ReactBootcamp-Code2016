import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

import { loadStories } from '../actions';
import List from './list';

class Stories extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadStories();
  }

  render() {
    return (
      <List title="My Stories" data={this.props.stories} />
    );
  }
}

Stories.propTypes = {
  stories: PropTypes.array.isRequired,
  loadStories: PropTypes.func.isRequired,
};

// redux
const mapStateToProps = ({ stories }) => ({ stories });

export default connect(mapStateToProps, { loadStories })(Stories);
