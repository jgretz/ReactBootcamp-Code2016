import _ from 'lodash';
import React, { Component } from 'react';
import autobind from 'class-autobind';

import List from './list';
import { loadHeroes } from '../actions/load_heroes';

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      heroes: []
    };
  }

  componentWillMount() {
    loadHeroes().then((heroes) => {
      this.setState({ heroes });
    });
  }

  renderAlphabetically() {
    const sorted = _.sortBy(this.state.heroes, h => h.name);
    return (
      <List items={sorted} />
    );
  }

  renderMostPopular() {
    const maxHero = _.maxBy(this.state.heroes, h => h.comics.available);
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
