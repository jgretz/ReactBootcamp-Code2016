import { GET, apiExecutor } from '../utils';
import marvel from '../utils/marvel';

export const LOAD_STORIES_SUCCESS = 'LOAD_STORIES_SUCCESS';
export const LOAD_STORIES_FAILURE = 'LOAD_STORIES_FAILURE';

export const loadStories = () =>
  apiExecutor({
    verb: GET,
    url: 'stories',
    data: marvel(),
    successType: LOAD_STORIES_SUCCESS,
    failureType: LOAD_STORIES_FAILURE,
  });
