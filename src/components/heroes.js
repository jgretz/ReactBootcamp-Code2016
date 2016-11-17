import _ from 'lodash';
import React, { Component } from 'react';
import autobind from 'class-autobind';

import List from './list';
import { loadHeroes, loadHeroesNamed } from '../actions/load_heroes';

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      heroes: [],
      heroesNamed: [],
    };
  }

  componentWillMount() {
    loadHeroes().then((heroes) => {
      this.setState({ ...this.state, heroes });
    });

    loadHeroesNamed('B').then((heroesNamed) => {
      this.setState({ ...this.state, heroesNamed });
    });
  }

  renderAlphabetically(heroes = this.state.heroes) {
    const sorted = _.sortBy(heroes, h => h.name);
    return (
      <List items={sorted} />
    );
  }

  renderMostPopular(heroes = this.state.heroes) {
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
        <h2>My B Heroes</h2>
        { this.renderAlphabetically(this.state.heroesNamed) }
        <h2>My Alphabetical Heroes</h2>
        { this.renderAlphabetically() }
        <h2>Most Popular Hero</h2>
        { this.renderMostPopular() }
      </div>
    );
  }
}
