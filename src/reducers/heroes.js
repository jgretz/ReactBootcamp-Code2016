import { LOAD_HEROES_SUCCESS } from '../actions/load_heroes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_HEROES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
