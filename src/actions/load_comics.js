import { GET, apiExecutor } from '../utils';
import marvel from '../utils/marvel';

export const LOAD_COMICS_SUCCESS = 'LOAD_COMICS_SUCCESS';
export const LOAD_COMICS_FAILURE = 'LOAD_COMICS_FAILURE';

export const loadComics = () =>
  apiExecutor({
    verb: GET,
    url: 'comics',
    data: marvel(),
    successType: LOAD_COMICS_SUCCESS,
    failureType: LOAD_COMICS_FAILURE,
  });
