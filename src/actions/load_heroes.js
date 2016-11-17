import axios from 'axios';
import marvel from '../utils/marvel';

export const loadHeroes = () =>
  axios({
    method: 'get',
    url: 'https://gateway.marvel.com:443/v1/public/characters',
    params: marvel(),
  }).then((payload) => {
    return payload.data.data.results;
  });

export const loadHeroesNamed = (nameStartsWith) =>
  axios({
    method: 'get',
    url: 'https://gateway.marvel.com:443/v1/public/characters',
    params: {
      ...marvel(),
      nameStartsWith,
    },
  }).then((payload) => {
    return payload.data.data.results;   });
