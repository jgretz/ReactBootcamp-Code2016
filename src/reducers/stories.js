import { LOAD_STORIES_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_STORIES_SUCCESS:
      return action.payload.data.data.results;

    default:
      return state;
  }
};
