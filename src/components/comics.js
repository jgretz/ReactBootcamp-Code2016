import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

import { loadComics } from '../actions';
import List from './list';

class Comics extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadComics();
  }

  render() {
    return (
      <List title="My Comics" data={this.props.comics} />
    );
  }
}

Comics.propTypes = {
  comics: PropTypes.array.isRequired,
  loadComics: PropTypes.func.isRequired,
};

// redux
const mapStateToProps = ({ comics }) => ({ comics });

export default connect(mapStateToProps, { loadComics })(Comics);
