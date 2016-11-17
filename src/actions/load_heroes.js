import { GET, apiExecutor } from '../utils';
import marvel from '../utils/marvel';

export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const LOAD_HEROES_FAILURE = 'LOAD_HEROES_FAILURE';

export const loadHeroes = () =>
  apiExecutor({
    verb: GET,
    url: 'characters',
    data: marvel(),
    successType: LOAD_HEROES_SUCCESS,
    failureType: LOAD_HEROES_FAILURE,
  });
