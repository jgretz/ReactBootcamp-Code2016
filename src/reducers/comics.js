import { LOAD_COMICS_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_COMICS_SUCCESS:
      return action.payload.data.data.results;

    default:
      return state;
  }
};
