import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

import List from './list';
import { loadHeroes } from '../actions/load_heroes';

class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadHeroes();
  }

  renderAlphabetically(heroes = this.props.heroes) {
    const sorted = _.sortBy(heroes, h => h.name);
    return (
      <List items={sorted} />
    );
  }

  renderMostPopular(heroes = this.props.heroes) {
    const maxHero = _.maxBy(heroes, h => h.comics.available);
    const list = maxHero ? [maxHero] : [];
    return (
      <List items={list} />
    );
  }

  render() {
    return (
      <div>
        <h2>Heroes</h2>
        <h2>My Alphabetical Heroes</h2>
        { this.renderAlphabetically() }
        <h2>Most Popular Hero</h2>
        { this.renderMostPopular() }
      </div>
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
