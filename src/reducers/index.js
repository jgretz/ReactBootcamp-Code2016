import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import heroes from './heroes';

const rootReducer = combineReducers({
  routing: routerReducer,

  heroes,
});

export default rootReducer;
