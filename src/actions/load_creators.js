import { GET, apiExecutor } from '../utils';
import marvel from '../utils/marvel';

export const LOAD_CREATORS_SUCCESS = 'LOAD_CREATORS_SUCCESS';
export const LOAD_CREATORS_FAILURE = 'LOAD_CREATORS_FAILURE';

export const loadCreators = () =>
  apiExecutor({
    verb: GET,
    url: 'creators',
    data: marvel(),
    successType: LOAD_CREATORS_SUCCESS,
    failureType: LOAD_CREATORS_FAILURE,
  });
