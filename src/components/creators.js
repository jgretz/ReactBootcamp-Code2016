import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

import { loadCreators } from '../actions';
import List from './list';

class Creators extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadCreators();
  }

  render() {
    return (
      <List title="My Creators" data={this.props.creators} />
    );
  }
}

Creators.propTypes = {
  creators: PropTypes.array.isRequired,
  loadCreators: PropTypes.func.isRequired,
};

// redux
const mapStateToProps = ({ creators }) => ({ creators });

export default connect(mapStateToProps, { loadCreators })(Creators);
