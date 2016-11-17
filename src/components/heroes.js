import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

import { loadHeroes } from '../actions';
import List from './list';

class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadHeroes();
  }

  render() {
    return (
      <List title="My Heroes" data={this.props.heroes} />
    );
  }
}

Heroes.propTypes = {
  heroes: PropTypes.array.isRequired,
  loadHeroes: PropTypes.func.isRequired,
};

// redux
const mapStateToProps = ({ heroes }) => ({ heroes });

export default connect(mapStateToProps, { loadHeroes })(Heroes);
